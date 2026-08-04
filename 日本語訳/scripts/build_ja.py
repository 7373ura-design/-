# -*- coding: utf-8 -*-
"""Zen Japanese Massage / ASTO ARCHITECTURE 見積書 — 日本語版の生成"""

import os

from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import Color, HexColor
from reportlab.lib.utils import ImageReader

W, H = 595.7, 842.0
SCR = os.path.dirname(os.path.abspath(__file__))   # 原本から取り出した画像素材の置き場
OUT = os.path.join(os.path.dirname(SCR), "Zen_Japanese_Massage_見積書_日本語版.pdf")

pdfmetrics.registerFont(TTFont("Mincho", "/usr/share/fonts/opentype/ipafont-mincho/ipamp.ttf"))
pdfmetrics.registerFont(TTFont("Gothic", "/usr/share/fonts/opentype/ipafont-gothic/ipagp.ttf"))

DARK  = Color(0.1451, 0.2039, 0.2235)   # 濃緑グレー(背景)
CREAM = Color(0.9451, 0.9098, 0.8784)   # クリーム(背景)
TAN   = Color(0.808, 0.726, 0.62)       # 箔押し風のタン
INK   = Color(0.267, 0.267, 0.267)      # 本文
BLACK = Color(0, 0, 0)
LINE  = HexColor("#555555")

PHOTO = f"{SCR}/ext_p1_X4.jpg"
LOGO_LIGHT = f"{SCR}/ext_p1_X8.png"     # 明色ロゴ(濃色背景用)
LOGO_DARK = f"{SCR}/ext_p2_X4.png"      # 濃色ロゴ(淡色背景用)

# 行頭に置かない文字(禁則処理)
NO_START = "、。，．）」』】〕〉》’”ぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮー・：；？！%）"
NO_END = "（「『【〔〈《‘“("


def is_ascii_word_char(ch):
    return ch.isascii() and not ch.isspace()


def tokenize(text):
    """欧文の単語は分割せず、和文は1文字ずつのトークンに分解する。"""
    toks, buf = [], ""
    for ch in text:
        if is_ascii_word_char(ch):
            buf += ch
        else:
            if buf:
                toks.append(buf)
                buf = ""
            toks.append(ch)
    if buf:
        toks.append(buf)
    return toks


def wrap(text, font, size, maxw):
    lines, cur = [], ""
    for tok in tokenize(text):
        if tok == "\n":
            lines.append(cur)
            cur = ""
            continue
        cand = cur + tok
        if pdfmetrics.stringWidth(cand, font, size) <= maxw or not cur:
            cur = cand
        else:
            # 禁則: 次行の頭が禁止文字なら、その文字を前の行にぶら下げる
            if tok and tok[0] in NO_START:
                cur = cand
            elif cur and cur[-1] in NO_END:
                cur, tok = cur[:-1], cur[-1] + tok
                lines.append(cur)
                cur = tok
            else:
                lines.append(cur)
                cur = tok
        if cur.startswith(" "):
            cur = cur.lstrip(" ")
    if cur:
        lines.append(cur)
    return lines


def text_line(c, x, y, s, font, size, color, bold=False, tracking=0):
    c.setFillColor(color)
    c.setFont(font, size)
    if bold:
        c.setStrokeColor(color)
        c.setLineWidth(size * 0.028)
    to = c.beginText(x, y)
    to.setTextRenderMode(2 if bold else 0)
    if tracking:
        to.setCharSpace(tracking)
    to.textOut(s)
    if tracking:
        to.setCharSpace(0)
    to.setTextRenderMode(0)
    c.drawText(to)


def para(c, x, y, maxw, text, font="Gothic", size=11, leading=None,
         color=INK, bold=False, hang=0):
    """段落を描画し、次の描画開始 y を返す。"""
    leading = leading or size * 1.55
    lines = wrap(text, font, size, maxw)
    for i, ln in enumerate(lines):
        text_line(c, x + (0 if i == 0 else hang), y, ln, font, size, color, bold)
        y -= leading
    return y


def bullet(c, x, y, maxw, text, font="Gothic", size=11, leading=None,
           color=INK, mark="・"):
    leading = leading or size * 1.55
    mw = pdfmetrics.stringWidth(mark, font, size)
    text_line(c, x, y, mark, font, size, color)
    return para(c, x + mw, y, maxw - mw, text, font, size, leading, color)


def numbered(c, x, y, maxw, num, text, font="Gothic", size=11, leading=None, color=INK):
    leading = leading or size * 1.55
    nw = pdfmetrics.stringWidth(num, font, size)
    text_line(c, x, y, num, font, size, color)
    return para(c, x + nw, y, maxw - nw, text, font, size, leading, color)


def bg(c, color):
    c.setFillColor(color)
    c.rect(0, 0, W, H, stroke=0, fill=1)


def header_logo(c):
    c.drawImage(LOGO_DARK, 462.8, H - 103.3, width=120.8, height=120.8,
                mask="auto", preserveAspectRatio=True)


def footer(c):
    text_line(c, 59.5, 46.4, "ASTO ARCHITECTURE", "Gothic", 11, INK)
    text_line(c, 59.5, 31.4, "+61 426 273 123  l  https://www.astostudio.com", "Gothic", 11, INK)


def page_title(c, s, size=34, y=733.1, color=INK):
    text_line(c, 59.5, y, s, "Mincho", size, color, bold=True, tracking=size * 0.04)


c = canvas.Canvas(OUT, pagesize=(W, H))
c.setTitle("業務報酬見積書 — Zen Japanese Massage")
c.setAuthor("ASTO ARCHITECTURE")
c.setSubject("214 Enmore Rd, Enmore NSW 2042 インテリアデザイン業務 見積書(日本語版)")

# ─────────────────────────────── P1 表紙 ───────────────────────────────
bg(c, DARK)
c.drawImage(PHOTO, 0, H - 788.0, width=W, height=788.0 - 426.3, mask=None)
c.drawImage(LOGO_LIGHT, 344.1, H - 443.2, width=239.4, height=239.4, mask="auto")

text_line(c, 59.5, 645.6, "業務報酬見積書", "Mincho", 44, TAN, bold=True, tracking=3)
text_line(c, 59.5, 614.9, "214 Enmore Rd, Enmore NSW 2042", "Gothic", 12, TAN)
text_line(c, 59.5, 446.0, "発行日：", "Gothic", 12, TAN)
text_line(c, 59.5, 431.0, "2026年8月1日", "Gothic", 12, TAN)
c.showPage()

# ────────────────────────── P2 ごあいさつ・業務範囲 ──────────────────────────
bg(c, CREAM)
header_logo(c)
page_title(c, "業務報酬見積書")

M, CW = 59.5, 476.0
y = 651.5
text_line(c, M, y, "Zen Japanese Massage 御中", "Gothic", 14, INK)
y -= 30.7
y = para(c, M, y, CW, "件名：214 Enmore Rd, Enmore NSW 2042 インテリアデザイン業務のお見積りについて",
         size=12, leading=15, bold=True)
y -= 15
y = para(c, M, y, CW,
         "このたびは、施術室のインテリアデザインに関する当方の業務について、"
         "お見積りの機会をいただき誠にありがとうございます。", size=12, leading=15)
y -= 15
y = para(c, M, y, CW,
         "お打ち合わせの内容を踏まえ、本プロジェクトに最適な進め方を検討いたしました。"
         "お客様のご要望について、以下のとおり確認させていただきます。", size=12, leading=15)
y -= 15
y = para(c, M, y, CW, "業務範囲", size=12, leading=15, bold=True)
y = para(c, M, y, CW,
         "施術室6室のインテリアコンセプトデザイン、および仕上げ材リストの作成"
         "（各室それぞれ異なるコンセプトとします）", size=12, leading=15)
y -= 15
y = para(c, M, y, CW, "本業務に含まれるもの：", size=12, leading=15)
for t in ["デザインコンセプトの立案および3Dモデルの作成",
          "お客様のご意見を反映したデザインの発展・詳細化",
          "お客様が調達するための仕上げ材・材料リストの作成",
          "現地調査"]:
    y = bullet(c, M + 20.4, y, CW - 20.4, t, size=12, leading=15)
y -= 30
y = para(c, M, y, CW, "本業務に含まれないもの：", size=12, leading=15)
y = bullet(c, M + 20.4, y, CW - 20.4, "詳細な技術図面（施工図等）の作成", size=12, leading=15)
footer(c)
c.showPage()

# ─────────────────────────── P3 プロジェクトの段階 ───────────────────────────
bg(c, Color(1, 1, 1))
header_logo(c)
page_title(c, "業務の各段階")

BX0, BX1 = 59.5, 536.0
PAD = 6.1
BW = BX1 - BX0 - PAD * 2


def phase_block(c, y_top, heading_ja, blocks):
    """枠付きのフェーズブロックを描画し、枠下端の y を返す。"""
    y = y_top - 16
    for kind, txt in blocks:
        if kind == "h":
            y = para(c, BX0 + PAD, y, BW, txt, size=11, leading=12.75, color=BLACK, bold=True)
        elif kind == "p":
            y = para(c, BX0 + PAD, y, BW, txt, size=11, leading=12.75, color=BLACK)
        elif kind == "pm":
            y = para(c, BX0 + PAD, y, BW, txt, "Mincho", 11, 12.75, BLACK)
        elif kind == "bm":
            y = bullet(c, BX0 + PAD + 18.7, y, BW - 18.7, txt, "Mincho", 11, 12.75, BLACK)
        elif kind == "gap":
            y -= txt
    bottom = y - 4
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.rect(BX0, bottom, BX1 - BX0, y_top - bottom, stroke=1, fill=0)
    return bottom


y = 693.2
text_line(c, 65.6, y, "コンセプトデザイン段階", "Mincho", 17, BLACK, bold=True)
y -= 12
y = phase_block(c, y, None, [
    ("h", "フェーズ01　　現地調査およびコンセプトデザイン"),
    ("p", "既存の状況を把握するため現地調査を行います。そこから初期スケッチと3Dモデルを作成し、"
          "6室それぞれ異なるスタイルの施術室について、意匠の方向性を視覚的に分かりやすくご提示します。"),
    ("gap", 12),
    ("p", "デザインの修正は2回まで本業務に含まれます。軽微な調整は修正回数には含めません。"
          "これを超える大幅な修正については、標準の時間単価にて別途ご請求いたします。"),
])

y -= 40
text_line(c, 65.6, y, "設計図書作成段階", "Mincho", 17, BLACK, bold=True)
y -= 12
y = phase_block(c, y, None, [
    ("h", "フェーズ02　　仕上げ材リストの作成"),
    ("p", "コンセプトのご承認後、デザインを精査し、お客様にご発注いただくための材料リストを作成します。"
          "各室における材料の使用箇所および仕上げ方法について、明確にご案内いたします。"),
])

y -= 40
text_line(c, 65.6, y, "施工段階", "Mincho", 17, BLACK, bold=True)
y -= 12
y = phase_block(c, y, None, [
    ("h", "フェーズ03　　施工"),
    ("p", "建築家が現地を訪問し、工事が意匠デザインの意図に沿って進んでいるかを確認します。"
          "施工作業はお客様ご自身で行われるため、建築家は望ましいデザインの実現に向けて、"
          "一般的かつ非公式な助言を適宜ご提供いたします。"),
    ("gap", 10),
    ("pm", "施工方法に関する責任の免責事項："),
    ("pm", "お客様は、当方が建築家であり、有資格の施工業者（ライセンスを有するビルダー）ではないことを"
           "確認のうえ了承するものとします。"),
    ("bm", "非公式な助言に限られること：施工方法、製作、金物、取付方法等に関して建築家が提供する提案・助言は、"
           "あくまで非公式なものであり、専門的な施工指示に該当するものではありません。"),
    ("bm", "お客様自身のリスク：お客様が建築家の施工に関する提案を採用される場合、"
           "それはすべてお客様ご自身の責任とリスクにおいて行われるものとします。"),
    ("bm", "最終的な責任：実際の施工作業に関する一切の責任は、すべてお客様が負うものとします。"),
])
footer(c)
c.showPage()

# ──────────────────────────── P4 費用のまとめ ────────────────────────────
bg(c, CREAM)
header_logo(c)
page_title(c, "費用のまとめ")

TX = [59.5, 120.3, 325.1, 535.9]
rows = [
    ("span", "コンセプト・デザイン段階", None, None),
    ("row", "フェーズ1", "現地調査および6室のコンセプトデザイン", ["$1,200.00", "（移動時間を含む）"]),
    ("row", "フェーズ2", "材料調達用リストの作成", ["$900.00"]),
    ("row", "", "一括請負金額（合計）", ["$2,100.00"]),
    ("span", "施工段階", None, None),
    ("row", "フェーズ3", "現地でのDIY施工に関する指導",
     ["時間単価 $150", "（現地訪問は最大4回、", "費用上限は合計 $900 とします）", "移動時間は別途 @$75 / 時"]),
]

TSZ, TLEAD = 11, 14.5
y_top = 713.7
c.setStrokeColor(LINE)
c.setLineWidth(0.5)

for kind, a, b, cc in rows:
    if kind == "span":
        h = 28.9
        c.rect(TX[0], y_top - h, TX[3] - TX[0], h, stroke=1, fill=0)
        w = pdfmetrics.stringWidth(a, "Gothic", 12)
        text_line(c, (TX[0] + TX[3]) / 2 - w / 2, y_top - h / 2 - 4, a, "Gothic", 12, INK, bold=True)
        y_top -= h
    else:
        l2 = wrap(b, "Gothic", TSZ, TX[2] - TX[1] - 16)
        n = max(len(l2), len(cc))
        h = max(28.9, n * TLEAD + 14)
        for i in range(3):
            c.rect(TX[i], y_top - h, TX[i + 1] - TX[i], h, stroke=1, fill=0)
        if a:
            w = pdfmetrics.stringWidth(a, "Gothic", TSZ)
            text_line(c, (TX[0] + TX[1]) / 2 - w / 2, y_top - h / 2 - 4, a, "Gothic", TSZ, INK)
        yy = y_top - h / 2 + (len(l2) - 1) * TLEAD / 2 - 4
        for ln in l2:
            text_line(c, TX[1] + 11.6, yy, ln, "Gothic", TSZ, INK)
            yy -= TLEAD
        yy = y_top - h / 2 + (len(cc) - 1) * TLEAD / 2 - 4
        for ln in cc:
            w = pdfmetrics.stringWidth(ln, "Gothic", TSZ)
            text_line(c, (TX[2] + TX[3]) / 2 - w / 2, yy, ln, "Gothic", TSZ, INK)
            yy -= TLEAD
        y_top -= h

y = 307.0
text_line(c, 59.5, y, "備考：", "Gothic", 11, INK)
y -= 15
notes = [
    ("1. ", "当方は現在GST（豪州の物品サービス税）の登録事業者ではないため、本見積の金額にGSTは含まれておらず、"
            "お支払いも発生しません。本契約の期間中に当方がGST登録を要することとなった場合は、"
            "登録日以降の請求書にGSTを加算いたします。"),
    ("2. ", "追加業務および時間単価：記載の業務範囲外でご依頼いただいた作業、または必要となった作業については、"
            "以下の標準時間単価にてご請求いたします。"),
    ("＊ ", "時間単価 @ $150"),
    ("3. ", "各フェーズの開始時に当該金額の25%をお支払いいただき、残額はその時点までの出来高（進捗率）に応じて、"
            "毎月分割してご請求いたします。"),
    ("4. ", "本見積書の有効期限は、発行日より90日間です。"),
]
for num, txt in notes:
    x = 97.0 if num.startswith("＊") else 68.8
    y = numbered(c, x, y, 476 - (x - 59.5), num, txt, size=11, leading=15)
footer(c)
c.showPage()

# ──────────────────────────── P5 ご承諾 ────────────────────────────
bg(c, CREAM)
page_title(c, "ご承諾")

y = 669.8
y = para(c, M, y, CW, "見積内容のご承諾", size=12, leading=15)
y -= 15
y = para(c, M, y, CW, "私は、本見積書の内容を確認し、記載された条件に同意します。", size=12, leading=15)
y -= 15
y = para(c, M, y, CW, "以下に署名することにより、私は次の事項を確認します。", size=12, leading=15)
for num, txt in [
    ("1. ", "本見積書の内容をすべて読み、理解しました。"),
    ("2. ", "記載されている業務範囲および報酬金額に同意します。"),
    ("3. ", "合意した業務範囲に変更が生じた場合、追加費用が発生する可能性があること、"
            "および、その内容が事前に私に伝えられ、承認を求められることを了承します。"),
    ("4. ", "さらに、私が書面によりその追加費用を承認するまで、当該変更は実施されないことを理解しています。"),
    ("5. ", "本見積書に記載された支払条件を理解し、これを遵守することに同意します。"),
]:
    y = numbered(c, M, y, CW, num, txt, size=12, leading=15)

c.setStrokeColor(HexColor("#8A8178"))
c.setLineWidth(0.6)
for label, ly in [("お客様氏名／会社名：", 444.8), ("日　付：", 354.7), ("ご署名：", 264.7)]:
    text_line(c, 59.5, ly, label, "Gothic", 12, INK)
    lw = pdfmetrics.stringWidth(label, "Gothic", 12)
    c.line(59.5 + lw + 8, ly - 3, 520, ly - 3)
c.showPage()

# ──────────────────────────── P6 契約条件 ────────────────────────────
TERMS = [
    ("h", "1. 報酬、支払条件およびGST"),
    ("p", "1.1　報酬は各段階の完了時にご請求いたします。1か月を超える段階については、"
          "出来高に応じた中間請求書を発行する場合があります。"),
    ("p", "1.2　ASTOは現在GSTの登録事業者ではないため、提示の報酬にGSTは含まれておりません。"
          "本業務の期間中にASTOが法定基準額に達し、GSTの登録事業者となった場合、"
          "登録日以降に発行される請求書には、その時点の税率（現行10%）によるGSTが加算されます。"
          "お客様は、該当する場合に、以後の請求書においてこの追加額をお支払いいただくことに同意するものとします。"),
    ("p", "1.3　費用のまとめに別段の記載がない限り、本見積の報酬には、現場および打合せへの往復移動時間は"
          "含まれません。現場、打合せ、または行政機関（カウンシル）への訪問に要する移動については、"
          "標準単価 $75/時 に加え、該当する有料道路料金および駐車料金を実費として別途ご請求いたします。"),
    ("p", "1.4　ご請求する報酬には、請求日の前日までに提供した業務に対する対価、および立替費用の精算額が"
          "含まれます（ただしこれらに限られません）。"),
    ("p", "1.5　お客様は、請求書が送達された日から10営業日以内に、次のいずれかを行わなければなりません。"),
    ("p2", "a) 請求金額の全額を支払う。"),
    ("p2", "b) ASTOに対して支払明細書を発行し、支払う予定の金額を示したうえで支払う。"
           "その金額が請求額を下回る場合には、支払を留保する理由を示さなければならない。"),
    ("p2", "c) 支払わない理由が示されない場合、ASTOは未払分を、お客様に対する債務として、"
           "管轄権を有する裁判所または債権回収手続を通じて回収することができます。"
           "回収にあたりASTOに生じた費用は、全額お客様のご負担となります。"),
    ("p", "1.6　支払期日を10日超えて報酬が未払いのままである場合、ASTOはお客様に対し、"
          "2営業日前の書面による通知をもって次のとおり通知することができます。"
          "「本通知期間の満了時においてなお未払いである場合、ASTOは全額の支払いがなされるまで"
          "業務を中断することができる。」"),
    ("p", "1.7　各段階の最終成果物は、ASTOに支払われるべき報酬が支払われるまで引き渡されません。"),
    ("gap", 6),
    ("h", "2. 提供する図書"),
    ("p", "2.1　すべての図面および書類は、Adobe Acrobat（.pdf）形式で、お客様が改変することなく"
          "複製できる状態で提供いたします。"),
    ("p", "2.2　.IFC（3D）および .dwg（2D）形式のファイルは、当方が本プロジェクトに関与している期間中、"
          "設計・施工チームに対してのみ提供します。"),
    ("p", "2.3　ご要望に応じて、印刷物を1部お渡しします。追加の印刷物については、"
          "実費（立替費用）としてご請求いたします。"),
    ("p", "2.4　ASTOは、図書に発見された不一致または不明確な点を速やかに明確化・解決し、"
          "必要に応じて図書を修正しなければなりません。当該修正が、ASTOが先に対象事項を十分かつ正確に"
          "解決または記載しなかったことに起因する場合、その作業はお客様への追加請求なしに行います。"
          "それ以外の場合、ASTOは当該作業について時間単価に基づく追加報酬を請求する権利を有します。"),
    ("gap", 6),
    ("h", "3. 知的財産権および著作者人格権"),
    ("p", "3.1　ASTOは、ASTOが提供するすべての図書および図面について、"
          "その対象となる工事が実施されるか否かにかかわらず、知的財産権を保持します。"),
    ("p", "3.2　ASTOは、お客様に対し、当該図書を本来の用途で使用するための明示的なライセンスを付与します。"
          "ただし、これは撤回可能なものであり、次の条件に従います。"
          "a. 支払期日の到来した請求書が未払いの場合、ASTOはライセンスを撤回することができます。"
          "b. お客様または第三者による、当該敷地に対するお客様の所有権もしくは法的権利を"
          "何らかの形で変更する事象または行為があった場合、ライセンスは自動的に撤回されます。"
          "お客様は書面によりライセンスの回復について同意を求めることができ、"
          "当該同意が不合理に留保されることはありません。"),
    ("p", "3.3　お客様が作成する、またはお客様のために作成される一切の公開情報"
          "（デジタル、印刷物、ソーシャルメディアを含みます）において、ASTOのクレジットを明記しなければなりません。"),
    ("p", "3.4　ASTOは、当方自身の利用、ならびに展示会、アワードへの応募、出版のために、"
          "本プロジェクトを施工中および完成時に写真撮影その他の方法で記録することができます。"
          "お客様は、公開にあたりご自身が特定されないよう求めることができます。"),
    ("gap", 6),
    ("h", "4. 紛争"),
    ("p", "4.1　紛争が生じた場合、両当事者は、正式な調停または法的手続へ進む前に、"
          "誠実に協議の場を持ち、問題の解決に努めることに同意します。"),
    ("gap", 6),
    ("h", "5. 契約の終了"),
    ("p", "5.1　いずれの当事者も、次の場合に本契約を終了することができます。"
          "a. 相互の合意によりいつでも。b. 相手方に対し14日前に書面で通知することにより"
          "（理由を示す必要はありません）。c. ASTOの専門的判断において、業務の提供が非倫理的な行為"
          "または法令違反を伴うと認められる場合、ASTOは直ちに終了することができます。"),
    ("p", "5.2　本契約の終了時、書面による別段の合意がない限り、次のとおりとします。"
          "a. お客様は、通知前に適正に提出されたすべての請求書の未払残高を支払い、"
          "かつ通知の到達前までに合理的に実施された業務および立替費用の全額をASTOに支払わなければなりません。"
          "b. ASTOは、支払いを受領したのち、終了日時点で存在する図書の .pdf 形式の写しをお客様に発行します。"
          "CADのネイティブファイルは提供いたしません。"),
]

TSZ6, TLEAD6 = 8.0, 11.2
COLS = [(59.5, 232.0), (296.7, 239.5)]
Y_TOP, Y_BOT = 714.7, 50.0

bg(c, Color(1, 1, 1))
text_line(c, 59.5, 757.9, "契約条件", "Mincho", 20, INK, bold=True, tracking=1)
col, y = 0, Y_TOP


def measure(kind, txt, ci):
    if kind == "gap":
        return txt
    x_off = 12 if kind == "p2" else 0
    size = TSZ6 + 0.5 if kind == "h" else TSZ6
    lead = TLEAD6 + 1.5 if kind == "h" else TLEAD6
    return len(wrap(txt, "Gothic", size, COLS[ci][1] - x_off)) * lead


# 段の分量が偏らないよう、全体の高さから左段の折り返し位置を決める
heights = [measure(k, t, 0) for k, t in TERMS]
target = sum(heights) / len(COLS)
acc, split = 0.0, len(TERMS)
for i, h in enumerate(heights):
    if acc + h > target:
        # 見出しが段末に取り残される場合は、見出しごと次段へ送る
        split = i - 1 if TERMS[i - 1][0] == "h" else i
        break
    acc += h

for idx, (kind, txt) in enumerate(TERMS):
    need = measure(kind, txt, col)
    if kind != "gap" and (idx == split or y - need < Y_BOT):
        col += 1
        if col >= len(COLS):
            c.showPage()
            bg(c, Color(1, 1, 1))
            col = 0
        y = Y_TOP
    x, wcol = COLS[col]
    if kind == "gap":
        y -= txt
    elif kind == "h":
        y = para(c, x, y, wcol, txt, size=TSZ6 + 0.5, leading=TLEAD6 + 1.5, bold=True)
    elif kind == "p2":
        y = para(c, x + 12, y, wcol - 12, txt, size=TSZ6, leading=TLEAD6)
    else:
        y = para(c, x, y, wcol, txt, size=TSZ6, leading=TLEAD6)
c.showPage()

# ──────────────────────────── P7 ありがとうございました ────────────────────────────
bg(c, DARK)
c.drawImage(LOGO_LIGHT, 9.3, H - 766.3, width=255.9, height=255.9, mask="auto")
text_line(c, 59.5, 373.1, "ありがとうございました", "Mincho", 36, TAN, bold=True, tracking=8)

info = [
    "ASTO Studio",
    "73A Essex Street, Epping, NSW 2121 Australia",
    "E：mailbox@astostudio.com",
    "T：0426 273 123",
    "W：www.astostudio.com",
    "佐藤 正樹（Masaki Sato）／ NSW州建築家登録番号 12634",
]
yy = 223.4
for ln in info:
    text_line(c, 276.8, yy, ln, "Gothic", 9.1, TAN, tracking=0.6)
    yy -= 12.7
c.showPage()

c.save()
print("written:", OUT)
