# Zen Japanese Massage 見積書 — 日本語版

ASTO ARCHITECTURE の Fee Proposal（214 Enmore Rd, Enmore NSW 2042／2026年8月1日発行）を、
原本のレイアウト・配色・写真・ロゴをそのまま保った状態で日本語化したものです。

## 収録物

| ファイル | 内容 |
|---|---|
| `Zen_Japanese_Massage_見積書_日本語版.pdf` | 日本語版PDF（A4・全7ページ、原本と同じ構成） |
| `見積書_日本語訳.md` | 全文の日本語訳（テキスト版） |
| `scripts/build_ja.py` | PDFを生成するスクリプト |
| `scripts/ext_*.{jpg,png}` | 原本から取り出した写真・ロゴ素材 |

## 翻訳の方針

- 本文・見出し・表・契約条件はすべて日本語に訳しています。
- 社名（ASTO ARCHITECTURE / ASTO Studio）、住所、メールアドレス、URL、建築家登録番号などの
  固有名詞は、実務上そのまま使う情報のため原文表記を残しています。
- 金額は原本どおり豪ドル（AUD）表記です。
- 承諾ページには、原本にはなかった記入用の罫線を追加しています。

## 再生成の手順

```bash
pip install reportlab
sudo apt-get install -y fonts-ipafont-gothic fonts-ipafont-mincho
python3 scripts/build_ja.py
```

見出しにはIPA明朝、本文にはIPAゴシックを使用しています
（原本の Playfair Display / Calibri に対応させたもの）。
