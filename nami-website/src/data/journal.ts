import type { JournalArticle } from "@/lib/types";

/**
 * Journal articles. This file is the single content source for now; swap the
 * functions at the bottom for a CMS (Sanity, Contentful, MDX…) later without
 * touching the components.
 *
 * Body paragraphs that start with "## " are rendered as subheadings. The
 * Japanese and English lists are written separately (not line-by-line
 * translations), so they may differ in length.
 */
// Covers are the woodblock-style illustrations from the NAMI Instagram posts.
const cover = (file: string, alt: string) => ({
  src: `/images/washi/${file}`,
  alt,
});

export const articles: JournalArticle[] = [
  {
    slug: "what-is-japandi",
    title: "What is Japandi?",
    titleJa: "ジャパンディとは？",
    category: "DESIGN",
    excerpt: {
      ja: "日本と北欧、ふたつの美意識が出会うスタイル。見た目だけを真似しないために知っておきたいこと。",
      en: "Where Japanese and Scandinavian design meet, and what matters beyond the look.",
    },
    date: "2026-10-12",
    readingTime: "5 min",
    cover: cover("byobu.jpg", "A timber lounge chair beside a gold folding screen of pines and a bonsai"),
    published: true,
    body: {
      ja: [
        "ジャパンディ（Japandi）は、Japan と Scandinavian を合わせた言葉です。2010年代の終わりごろから、ヨーロッパやオーストラリアのインテリアでよく使われるようになりました。",
        "## 遠く離れた、よく似た感覚",
        "長く暗い冬を室内で過ごす北欧と、四季と湿気の中で暮らしてきた日本。距離は遠くても、木や紙、布といった自然素材を大切にし、飾りすぎない暮らしをよしとする点はよく似ています。",
        "## 違いを知ると、バランスがとれる",
        "北欧は、オークやアッシュなど明るい色の木、やわらかな曲線、「ヒュッゲ」と呼ばれる居心地のよさ。日本は、ヒノキのような白木から濃い色の木まで素材の色をそのまま生かす木づかい、墨色のアクセント、低い目線、余白、そして不完全さや時間の跡を美しいと感じる「わびさび」の感覚。ジャパンディは、どちらかに寄せるのではなく、その間のバランスを探すスタイルです。",
        "## 取り入れるときのコツ",
        "素材は3〜4種類に絞る。家具は少し低めにして、視線を下げる。色はベージュ・木の色・墨色を基本に、差し色はひとつだけ。手仕事を感じる器や照明をひとつ置く。そして収納を工夫して、床と棚に余白を残す。それだけで、空間は落ち着いて見えるようになります。",
        "## NAMIの視点",
        "オーストラリアでもジャパンディはよく見かけるようになりました。色や家具の形だけをまねるのではなく、その背景にある考え方まで取り入れると、ぐっと暮らしになじみます。素材を大切にし、余白を残し、住む人の暮らしに合わせること。オーストラリアの強い光や、外とつながる暮らしの中で、日本の感覚をどう生かすかをNAMIは考えます。",
      ],
      en: [
        "Japandi joins two words, Japan and Scandinavian. It came into wide use in European and Australian interiors towards the end of the 2010s.",
        "## Far apart, surprisingly alike",
        "Scandinavians spend long, dark winters indoors; the Japanese have lived through four distinct seasons and humid summers. Despite the distance, both cultures value natural materials such as timber, paper and textiles, and both prefer homes that are not over-decorated.",
        "## Knowing the differences helps you balance them",
        "Scandinavian design leans towards pale timbers like oak and ash, soft curves and hygge, a sense of cosiness. Japanese design leans towards timber left close to its natural colour, from pale hinoki to darker woods, with ink-black accents, a lower eye line, empty space, and wabi-sabi: finding beauty in imperfection and the marks of time. Japandi is not about choosing one side; it is about finding the balance between them.",
        "## How to bring it into your home",
        "Limit yourself to three or four materials. Choose slightly lower furniture to bring the eye line down. Keep to a base of natural timber, warm neutrals and charcoal, with a single accent colour. Add one handmade piece, a ceramic bowl or a paper lamp. Then use storage to keep floors and shelves clear. Those few steps alone make a room feel calmer.",
        "## The NAMI view",
        "Japandi is now common in Australia. It sits best in a home when the thinking behind it comes too, not just the colours and furniture shapes: respect for materials, room to breathe, and a home shaped around the people who live in it. NAMI asks how that Japanese sensibility can work with Australia’s strong light and its outdoor way of life.",
      ],
    },
  },
  {
    slug: "japanese-vs-australian-homes",
    title: "Japanese vs Australian Homes",
    titleJa: "日本とオーストラリアの住宅の違い",
    category: "ARCHITECTURE",
    excerpt: {
      ja: "玄関、寸法、縁側、方角、地震。気候と暮らし方の違いが、家のかたちをどう変えるのか。",
      en: "Entryways, measurements, verandas, orientation and earthquakes: how climate and lifestyle shape a home.",
    },
    date: "2026-10-12",
    readingTime: "8 min",
    cover: cover("shoji.jpg", "A room with shoji screens and a low table opening onto trees and grasses"),
    published: true,
    body: {
      ja: [
        "日本もオーストラリアも、木造の住宅が多い国です。それでも、気候と暮らし方の違いが、家のかたちを大きく変えています。",
        "## 玄関 — 外と内の境目",
        "日本の家では、玄関で靴を脱ぎ、一段上がって室内に入ります。この段差（上がり框）が、外と内をはっきり分ける境目です。オーストラリアでは室内でも靴のまま過ごす家が多いですが、玄関近くに靴や鍵、バッグを置く場所をつくるだけで、家の中はずっと整います。",
        "## 寸法の考え方 — 910mmのグリッド",
        "日本の木造住宅の多くは、約910mm（3尺）を基本の単位にした格子の上で設計されます。部屋の広さは畳の枚数（帖）で表し、6帖はおよそ10㎡。柱の位置、建具の幅、収納の奥行きまでがこの単位にそろうため、家全体に落ち着いたリズムが生まれます。オーストラリアの住宅は一般に日本よりずっと広く、メートル法で自由に計画されます。",
        "## 縁側とアルフレスコ",
        "日本の縁側は、室内と庭の間にある細長い板張りの空間です。家の中でも外でもない場所で、お茶を飲んだり、季節を眺めたりします。オーストラリアでは、ベランダやアルフレスコ（屋根付きの屋外ダイニング）がその役割を担います。どちらも「内と外の間」を大切にしているのは同じです。",
        "## 光と方角",
        "北半球の日本では、日当たりのよい南向きの部屋が好まれます。南半球のオーストラリアでは逆に、リビングを北向きにするのが基本です。どちらの国でも深い軒が役に立ちます。高い夏の日差しを遮り、低い冬の日差しは部屋の奥まで届けてくれるからです。",
        "## 夏をむねとすべし",
        "鎌倉時代の随筆『徒然草』には「家の作りやうは、夏をむねとすべし」という一節があります。風が通り、湿気がこもらない家。現代の日本では、それに加えて断熱と気密を高めた家づくりが進んでいます。オーストラリアでも古い住宅は断熱が弱いことが多く、窓まわりの工夫やカーテン、ラグで快適さは大きく変わります。",
        "## 地震と自然災害",
        "地震の多い日本では、柱と梁に筋かいや耐力壁を組み合わせて揺れに耐える木造の工法が発達しました。1981年の建築基準法の改正（いわゆる新耐震基準）以降、基準はさらに厳しくなっています。柱や梁を工場で正確に加工する「プレカット」も一般的です。オーストラリアでは地震よりも、地域によって森林火災やサイクロン、シロアリへの備えが重視されます。",
        "## NAMIの視点",
        "どちらが優れているかではなく、それぞれの家が何を大切にしてきたかを知ること。日本の精度や細やかさと、オーストラリアのおおらかで外に開いた暮らし。そのふたつを並べて、その土地とその人に合った空間を考えます。",
      ],
      en: [
        "Japan and Australia both build mostly in timber. Yet their climates and ways of living have shaped very different homes.",
        "## The genkan: where outside ends",
        "In a Japanese home you take your shoes off in the genkan, the entrance hall, then step up into the house. That small step, the agarikamachi, marks a clear line between outside and in. Many Australians wear shoes indoors, but simply creating a spot by the door for shoes, keys and bags keeps the rest of the house noticeably calmer.",
        "## Measuring by the grid: 910 mm",
        "Most Japanese timber houses are planned on a grid of about 910 mm, three shaku in the traditional measure. Room sizes are given in tatami mats (jō): a six-mat room is roughly 10 square metres. Because posts, door widths and even cupboard depths follow the same module, the whole house has a calm, steady rhythm. Australian homes are generally much larger, and are planned freely in metric.",
        "## Engawa and alfresco",
        "The engawa is a narrow timber platform running between the rooms and the garden: neither fully inside nor outside, a place to sit with tea and watch the seasons. In Australia the veranda and the alfresco, a covered outdoor dining area, play the same part. Both cultures value the space in between.",
        "## Light and orientation",
        "In the northern hemisphere, Japanese homes favour south-facing rooms for sun. In Australia it is the opposite: living areas ideally face north. In both countries deep eaves help, blocking the high summer sun while letting the low winter sun reach deep into the room.",
        "## Build for summer",
        "Tsurezuregusa, a collection of essays written in the 14th century, advises that “a house should be built with summer in mind”: cool breezes, and no trapped damp. Today Japanese builders add strong insulation and airtightness to that old wisdom. Many older Australian homes are poorly insulated, and thoughtful window treatments, curtains and rugs can make a real difference to comfort.",
        "## Earthquakes and natural hazards",
        "Earthquakes shaped Japanese building. Timber post-and-beam frames are strengthened with diagonal braces and shear walls, and the rules were tightened with the 1981 revision of the Building Standard Law. Precut framing, where posts and beams are machined accurately in a factory before reaching the site, is now standard. In Australia the main concerns are different and depend on the region: bushfire, cyclones and termites.",
        "## The NAMI view",
        "The question is not which is better, but what each kind of home has learned to value. Japanese precision and care; Australia’s relaxed, outward-looking way of life. NAMI places the two side by side to find what suits each site and each person.",
      ],
    },
  },
  {
    slug: "why-natural-materials-matter",
    title: "Why Natural Materials Matter",
    titleJa: "自然素材がもたらす心地よさ",
    category: "MATERIAL",
    excerpt: {
      ja: "木、土、紙、石、リネン。時間とともに深まる素材を、日本とオーストラリアの両方から。",
      en: "Timber, clay, paper, stone and linen: materials that grow better with time, from Japan and Australia.",
    },
    date: "2026-10-12",
    readingTime: "6 min",
    cover: cover("tea.jpg", "A navy tea bowl mended with gold, a whisk and a vase with a red camellia"),
    published: true,
    body: {
      ja: [
        "自然素材の魅力は、見た目のやさしさだけではありません。触れたときの温度、音の響き、空気の湿り気。毎日の小さな感覚が、空間の心地よさをつくります。",
        "## 木 — 呼吸する素材",
        "木は空気中の湿気を吸ったり吐いたりする性質があり、室内の湿度の変化をやわらげます。日本ではヒノキやスギが住まいに使われてきました。オーストラリアには、ブラックバット、スポッテッドガム、タスマニアンオークなど、硬く丈夫で美しい木があります。オイル仕上げにすると、手入れをしながら長く使え、時間とともに色が深まります。",
        "## 土と漆喰",
        "日本の伝統的な壁には、土壁や漆喰が使われてきました。漆喰は石灰を主な原料とする塗り壁で、湿気を調整し、やわらかく光を反射します。オーストラリアでも、ライムプラスターや版築（ラムドアース）の壁が、温かみのある素材として使われています。",
        "## 紙 — 光をやわらげる",
        "障子に貼られた和紙は、直接の日差しをやわらかな光に変えます。オーストラリアの強い日差しの中では、この「光をやわらげる」考え方がとても役に立ちます。和紙の照明や、薄い布のカーテンでも同じ効果が得られます。",
        "## 石と布",
        "石は夏に足元をひんやりと保ち、リネンやウールは季節に合わせて肌ざわりを変えてくれます。素材の組み合わせを3〜4種類に絞ると、空間に統一感が生まれます。",
        "## 変化を楽しむ",
        "自然素材は、傷や色の変化を避けられません。でもそれは劣化ではなく、暮らしの記録です。日本の「経年変化」を味わう感覚は、NAMIが大切にしている「記憶が積み重なる空間」そのものでもあります。",
      ],
      en: [
        "Natural materials are about more than looks. How warm a surface feels to the touch, how sound carries, how the air feels: these small daily sensations are what make a space comfortable.",
        "## Timber: a material that breathes",
        "Timber absorbs and releases moisture, which helps even out changes in indoor humidity. Japanese homes have long used hinoki cypress and sugi cedar. Australia has its own beautiful, hard-wearing timbers, such as blackbutt, spotted gum and Tasmanian oak. With an oil finish, timber can be cared for over many years and deepens in colour as it ages.",
        "## Clay and lime plaster",
        "Traditional Japanese walls are made of clay or shikkui, a lime plaster that helps regulate humidity and reflects light softly. In Australia, lime plaster and rammed earth walls bring the same warmth.",
        "## Paper: softening the light",
        "The washi paper in a shoji screen turns direct sun into a soft, even glow. Under Australia’s strong sun this idea of softening light is especially useful, and paper lamps or sheer linen curtains achieve the same effect.",
        "## Stone and textiles",
        "Stone keeps floors cool in summer, while linen and wool change how a room feels through the seasons. Keeping to three or four materials gives a space a sense of calm and unity.",
        "## Enjoying the change",
        "Natural materials will mark and change colour over time. That is not damage but a record of life lived. The Japanese appreciation of materials that age gracefully is close to the heart of NAMI: spaces where memories build up.",
      ],
    },
  },
  {
    slug: "the-japanese-concept-of-ma",
    title: "The Japanese Concept of Ma",
    titleJa: "「間」という考え方",
    category: "PHILOSOPHY",
    excerpt: {
      ja: "何もない場所が、空間に呼吸を与える。間取り、床の間、そして余白のつくり方。",
      en: "Ma (間) is the Japanese idea of meaningful empty space: room that lets a home breathe.",
    },
    date: "2026-10-12",
    readingTime: "5 min",
    cover: cover("moon-window.jpg", "A round moon window looking onto a pine and a small stone garden"),
    published: true,
    body: {
      ja: [
        "「間（ま）」は、ものとものの間、時間と時間の間を意味する言葉です。日本では、何もない場所や沈黙にも意味があると考えてきました。",
        "## 間取りと「間」",
        "家の平面計画を「間取り」と呼ぶのは、まさに「間をどう取るか」を考えることだからです。また「間（けん）」は長さの単位でもあり、1間は約1.82m。日本の家は、言葉の上でも寸法の上でも「間」でできています。",
        "## 床の間 — ひとつだけ飾る",
        "床の間は、掛け軸や花をひとつだけ飾るための小さな空間です。たくさん並べるのではなく、季節に合わせてひとつを選ぶ。その周りの何もない壁が、選んだものを引き立てます。",
        "## 暮らしの中の「間」",
        "壁を一面だけ何も飾らずに残す。玄関から部屋までの視線の抜けをつくる。家具と家具の間に人が自然に通れる幅をとる。収納を工夫して、テーブルの上を空けておく。どれも小さなことですが、空間に呼吸が生まれます。",
        "## NAMIの視点",
        "余白は「足りない」のではなく、そこで暮らす人のための場所です。光が動き、季節が入り、思い出が置かれていく。NAMIは、余白も空間の一部としてデザインします。",
      ],
      en: [
        "Ma (間) means the space between things, or the pause between moments. In Japan, empty space and silence have long been seen as meaningful in themselves.",
        "## Ma in the floor plan",
        "The Japanese word for a floor plan is madori, literally “taking ma”: deciding how the spaces between will work. Ma, read as ken, is also a traditional unit of length, about 1.82 metres. Both in language and in measurement, the Japanese house is built from ma.",
        "## The tokonoma: one thing at a time",
        "The tokonoma is a small alcove for displaying a single scroll or a flower arrangement, changed with the seasons. Rather than showing many things, you choose one, and the empty wall around it lets that one thing stand out.",
        "## Ma in everyday life",
        "Leave one wall bare. Create a clear line of sight from the entrance into the home. Give people room to move easily between pieces of furniture. Use storage so the table can stay clear. Each is a small step, but together they let a space breathe.",
        "## The NAMI view",
        "Empty space is not something missing; it is room for the people who live there. Light moves across it, the seasons come in, and memories find a place. NAMI designs empty space as part of the room.",
      ],
    },
  },
  {
    slug: "indoor-outdoor-living",
    title: "Indoor–Outdoor Living",
    titleJa: "内と外をつなぐ暮らし",
    category: "LIFESTYLE",
    excerpt: {
      ja: "縁側、借景、アルフレスコ。日本とオーストラリア、それぞれの「外とつながる」知恵。",
      en: "Engawa, borrowed scenery and the alfresco: two cultures’ ways of living with the outdoors.",
    },
    date: "2026-10-12",
    readingTime: "6 min",
    cover: cover("pavilion.jpg", "A timber pavilion with a stone lantern and a red maple by the water"),
    published: true,
    body: {
      ja: [
        "外とつながる暮らしは、オーストラリアの家の大きな魅力です。そして日本の家にも、外と内をゆるやかにつなぐ知恵がたくさんあります。",
        "## 縁側と建具",
        "日本の家では、障子や雨戸などの引き戸を開け放つと、部屋と縁側と庭がひと続きになります。開き戸と違って扉が場所をとらないため、開け閉めで空間の広さを自在に変えられます。",
        "## 借景 — 景色を借りる",
        "庭の外にある山や木々を、庭の一部のように取り込む手法を「借景」と呼びます。窓の位置や大きさを工夫して、外の景色を額縁のように切り取る。オーストラリアの海や空、ユーカリの木々も、立派な借景になります。",
        "## オーストラリアのアルフレスコ",
        "オーストラリアでは、屋根付きの屋外ダイニング「アルフレスコ」や、大きく開く引き戸・折れ戸で、室内と屋外をひと続きに使う家が一般的です。バーベキューや友人との食事が、家の暮らしの中心にあります。",
        "## つなぐためのコツ",
        "室内と屋外の床の高さや色・素材をそろえる。軒やパーゴラで日陰をつくる。窓の外に見せたい景色を決める。境目に植物を置いて、緑をグラデーションのようにつなぐ。オーストラリアでは、網戸や虫対策、地域によっては森林火災への備えも忘れずに。",
        "## NAMIの視点",
        "外とつながることは、ただ開放的にすることではありません。光や風、季節の移ろいを、暮らしの中に招き入れること。日本の縁側とオーストラリアのアルフレスコ、両方の考え方を並べて、その家らしい「内と外」をつくります。",
      ],
      en: [
        "Living with the outdoors is one of the great pleasures of an Australian home, and Japanese houses are full of ideas for gently joining inside and out.",
        "## The engawa and sliding doors",
        "In a Japanese house, sliding shoji screens and storm shutters can be opened right up so that room, engawa and garden become one space. Unlike hinged doors, sliding doors take up no floor space, so you can change the size of a room simply by opening or closing them.",
        "## Shakkei: borrowed scenery",
        "Shakkei means “borrowed scenery”: drawing distant hills or trees into a garden as if they belonged to it. Careful placing and sizing of windows frames the view like a picture. Australia’s ocean, sky and gum trees make wonderful borrowed scenery.",
        "## The Australian alfresco",
        "Many Australian homes have an alfresco, a covered outdoor dining area, with large sliding or bi-fold doors that open the living room straight onto it. Barbecues and meals with friends are at the heart of home life.",
        "## Making the connection work",
        "Match the floor level, colour and material inside and out. Use eaves or a pergola for shade. Decide which view each window should frame. Place plants at the threshold so greenery flows from one side to the other. In Australia, remember fly screens and, in some areas, bushfire safety.",
        "## The NAMI view",
        "Connecting with the outdoors is not just about opening up. It is about inviting light, breeze and the changing seasons into daily life. NAMI sets the Japanese engawa beside the Australian alfresco to create an inside–outside connection that suits each home.",
      ],
    },
  },
  {
    slug: "small-space-living-in-japan",
    title: "Small Space Living in Japan",
    titleJa: "日本の小さな暮らしの知恵",
    category: "LIFESTYLE",
    excerpt: {
      ja: "ひと部屋を何通りにも使う。押入れ、引き戸、低い家具。限られた空間を豊かにする工夫。",
      en: "One room, many uses: cupboards, sliding doors and low furniture that make small spaces generous.",
    },
    date: "2026-10-12",
    readingTime: "5 min",
    cover: cover("maple-window.jpg", "Red maple leaves outside a paper window, cushions and an open book on the sill"),
    published: true,
    body: {
      ja: [
        "東京をはじめとする日本の都市では、限られた敷地に家を建てることが珍しくありません。小さな空間を豊かに使う知恵は、シドニーのアパートメントにもそのまま生かせます。",
        "## ひと部屋を何通りにも",
        "伝統的な和室は、昼は居間、夜は布団を敷いて寝室になります。部屋の役割を決めすぎないことで、小さな家でも暮らしの変化に対応できます。",
        "## 押入れと「しまう」文化",
        "布団をしまう押入れのように、使わないものをきちんとしまう場所があると、部屋は広く使えます。壁一面の収納、ベッド下や階段下の収納。見せる収納と隠す収納を分けることがポイントです。",
        "## 引き戸と低い家具",
        "引き戸は開き戸のように扉が回るスペースがいりません。家具を低めにすると、天井が高く感じられ、部屋が広く見えます。",
        "## 光を奥まで届ける",
        "障子のように光を通す建具や、室内窓、明るい色の壁で、窓から遠い場所まで光を届ける。小さな家ほど、光の通り道が大切です。",
        "## NAMIの視点",
        "小さいことは、制約ではなく選ぶきっかけです。本当に必要なもの、好きなものを選んでいくと、空間はその人らしくなっていきます。",
      ],
      en: [
        "In Tokyo and other Japanese cities, building on a small plot is common. The ideas that make small Japanese homes feel generous translate directly to a Sydney apartment.",
        "## One room, many uses",
        "A traditional tatami room is a living room by day and, once the futon is rolled out, a bedroom by night. By not fixing each room to a single purpose, even a small home can adapt as life changes.",
        "## The oshiire: a culture of putting away",
        "Like the oshiire cupboard where futons are stored during the day, having a proper place to put things away lets you use a room fully. Think full-height wall storage, under-bed and under-stair storage, and a clear split between what you display and what you hide.",
        "## Sliding doors and low furniture",
        "Sliding doors need no swing space, unlike hinged doors. Lower furniture makes the ceiling feel higher and the room larger.",
        "## Bringing light deep inside",
        "Light-filtering screens like shoji, internal windows and pale walls carry daylight to the parts of a home furthest from the windows. The smaller the home, the more important the path of light.",
        "## The NAMI view",
        "A small home is not a limitation but a reason to choose carefully. Keep what you truly need and love, and the space becomes more and more your own.",
      ],
    },
  },
];

export function getArticles() {
  return articles;
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
