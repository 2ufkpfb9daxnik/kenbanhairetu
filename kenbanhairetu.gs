//https://script.google.com/home/projects/1QiJjgUlCSzRr7oYsNhezjxFTk-6mGUU0WNUJf8QjIJqN4RaJ2F21Mx6T/edit
function main() {
  const messages = [
    '【新配列を使うには】アルファベットをそのまま(レジストリから)入れ替えるなら、KeySwapやChangeKeyといったソフトが使えます。IMEのローマ字テーブルを変更すれば、ローマ字入力のときだけその配列が使えます。PowerToysを使うという手もあります。プログラムが読み書きできるならAutoHotKeyがいいでしょう。おすすめは紅皿というソフト。他にも漢直WSなどが使えます。MacならKarabiner-Elements。自作キーボードならQMKでもできます。',
    '【新配列とは】QWERTYやJISかななどではない、キーボードで文字を入力するときの新しい配列です。もっぱら効率や速度などの面で優位を謳います。Dvorakや親指シフトなどは(比較的)古いので、人によっては新配列には入らないこともあります。'
    '【英字配列、ローマ字(行段)配列、かな配列、漢直】英字配列とは英語を入力するための、そのためだけの配列。ローマ字配列とはローマ字入力に特化した配列。かな配列とは、キーを押すとローマ字ではなくていきなりひらがなが出力される配列。漢直とはキーを押すといきなり漢字が出力される配列。',
    '【もっと知りたい！】薙刀式の作者である大岡俊彦さんのブログ( http://oookaworks.seesaa.net/category/26418930-1.html )を見ましょう。それでも足りない！という方は http://anomy.jp.land.to/layouts/key_layout_links.html を見ましょう。',
    '【ショートカット問題】英字配列やローマ字配列でよくある問題として、これまで使っていたショートカットが使えないという問題が起こります。対策として、「Ctrlが押されているときだけはQWERTYの出力をする」とかが考えられますが、Vimなどはそれでも難しいです。一応、Eucalyn配列などはそれにも配慮されているようです。',
    '【混ざらないの?】よく言われる経験則ではありますが、違う言語だと混ざりにくいようです。例えば、英語はDvorakで日本語は月配列とか。',
    '【シフト】キーボード左下・右下のShiftキーの概念の一般化。同時、もしくは前、後に押すことで、普通に押したときと比べて、出力を変化させる方法。キーの数が足りないときなどに使われる。シフトキーがスペースだとセンターシフト、左右の親指キーだと親指シフト、DやKだと中指シフト、などと呼ばれる。シフトキーと対比して、普通のJとかFとかのキーを「文字キー」ということもある。',
    '【orzレイアウト】https://www.orz-layout.com もとは親指シフトをするために考えられた、JISキーボードで右手のホームポジションを一つ右のキーにずらすことで右親指シフトをやりやすくなる方法。',
    '【Plover】https://www.openstenoproject.org/plover/ ',
    '【ステノワード】https://www.speed-wp.co.jp/speed-wp-stenoword/ ',
    '【Colemak】https://colemak.com 英語入力用。Macでは標準で使える。Mod-DHなどいろいろな版の元祖。',
    '【Workman】https://workmanlayout.org 英語入力用。Colemakの"D"および"H"に疑問を持ち作成。指の横の動きより縦の動き(折りたたみなど)のほうが楽であるとして作られた。',
    '【Norman】https://normanlayout.info/ 英語入力用。他の様々な英字配列より優れていると謳う。',\
    '【MTGAP】https://mathematicalmulticore.wordpress.com/the-keyboard-layout-project/ 英語入力用。広く入力データを募り計算によって作成された。',
    '【QGMLWB】https://mk.bcgsc.ca/carpalx/ 英語入力用。Carpalxプロジェクトで作成。計算によって作られた。',
    '【Arensito】https://www.pvv.org/~hakonhal/main.cgi/keyboard 英語入力用。Kinesisでの使用を想定。',
    '【Astarte】https://neinvalli.hatenablog.com/entry/2018/07/21/185448 日英両用。プログラミングのキーワードやサーバーのコマンドなどの文字列も考慮。,
    '【大西配列】https://o24.works/layout/ 日英両用。有名なので、検索してみるといろんな言及を見ることができます。',
    '【Tomisuke配列】https://tomisuke.com/tomisuke-keyboard-layout/ 日英両用。yahooニュースにもなった。',
    '【とかげ配列】https://menmentsu.hateblo.jp/entry/2020/06/27/204618 ローマ字入力用。QWERTYローマ字入力のような打鍵スタイルを目指して意図的に母音が片手に分離されていない。',
    '【mato式】https://note.com/mato_kb/n/nf57efe5d6ca0 ローマ字入力用。2段配列。',
    '【AZIK】https://web.archive.org/web/20241217165614/http://hp.vector.co.jp/authors/VA002116/azik/azikinfo.htm ローマ字入力用。QWERTYの拡張。',
    '【SKY】https://ja.wikipedia.org/wiki/SKY%E9%85%8D%E5%88%97 ローマ字入力用。母音としてOUやAIなど二重母音を含む。',
    '【ACT】http://www1.vecceed.ne.jp/~bemu/act/act_index.html ローマ字入力用。Dvorakの拡張。',
    '【きゅうり】https://web.archive.org/web/20070820200045/http://khdd.net/kanou/im/kyuuri.html ローマ字入力用。拗音母音、独立した「っ」「ん」を含む。',
    '【かわせみ配列】https://github.com/semialt/kawasemi ローマ字入力用。行と段を同時押しすることで入力。',
    '【Eucalyn配列】https://eucalyn.hatenadiary.jp/entry/about-eucalyn-layout ローマ字入力用。Vimに配慮したHJKLの配置になっている。',
    '【abj配列】https://takahata-shin.hatenadiary.org/entry/20110211/1297415692 ローマ字入力用。優先度の高いかなは母音を省略できるabjシステムを搭載。',
    '【カナガワ配列】http://iroirokenkyu.web.fc2.com/keyboard/Kanagawa/Kanagawa1.html 標準でア段を補完し、また同時連続シフトに段キーが対応している。',
    '【Effive配列/EffiveRoman】https://3kyoson.hatenablog.com/entry/effive/1 日英両用。EffiveRomanというローマ字テーブルで打つことを想定されれている。',
    '【BÉPO】https://bepo.fr/wiki/Accueil フランス語入力用。AFNORによって標準化されている。',
    '【倉頡輸入法】http://www.cbflabs.com/book/ocj5/ocj5/ 中国語入力用。独自の方法で字を分解し、それを組み合わせて入力する。',
    '【薙刀式】http://oookaworks.seesaa.net/article/456099128.html#gsc.tab=0 センターシフトかな入力用。有名。濁音・半濁音・拗音・外来音がすべて同時押しで入力可能。',
    '【新JIS】https://ja.wikipedia.org/wiki/%E6%96%B0JIS%E9%85%8D%E5%88%97 https://jisx6004.client.jp/jisx6004.html センターシフトかな入力用。教科書などからデータを集計し、指の運動特性調査を行って作成されたが、使われなかったためJIS規格としては廃止。',
    '【New Stickney】https://github.com/esrille/new-stickney センターシフトかな入力用。かなが行ごとにまとまっている。',
    '【飛鳥配列】https://ameblo.jp/asuka-layout/entry-10589277915.html https://web.archive.org/web/20090429102833/http://shizuoka.cool.ne.jp/izubekkan/asuka.htm 親指シフトかな入力用。右手、ホームポジション偏重。独自の飛鳥理論と呼ばれる重厚長大な文章が存在するが、ホームページなどは魚拓にしか残っていない。',
    '【シン蜂蜜小梅配列】http://8x3koume.na.coocan.jp 親指シフトかな入力用。濁音・半濁音・拗音・外来音がすべて同時押しで入力可能。',
    '【TRON配列】https://www.personal-media.co.jp/utronkb/tron-layout.html 親指シフトかな入力用。TRONキーボードで入力することを想定された配列。',
    '【あまのあすか配列】http://fume00001.blog96.fc2.com/blog-entry-295.html 親指シフトかな入力用。飛鳥配列の拗音・外来音拡張。',
    '【T-Code】http://openlab.ring.gr.jp/tcode/index.html 無連想漢直。東京大学理学部情報科学科山田研究室で開発された。',
    '【TUT-Code】https://crew-lab.sfc.keio.ac.jp/projects/tut/ 無連想漢直。かな漢字変換と共存を目指した。1982年に豊橋技術科学大学情報工学系大岩研究室で、大岩 元、高嶋孝明によって開発された。',
    '【G-Code】https://web.archive.org/web/20020813184038/http://www.asahi-net.or.jp:80/~QX5S-MSMR/renkin/gcode/index.html 無連想漢直。入力文字によって仮想鍵盤が変化し、シフト入力で補完が確定する。',
    '【phoenix】https://web.archive.org/web/20201125040422/http://phoenixrt.kachoufuugetu.net/ 無連想漢直。JISコード順に文字が並べられている。',
    '【葦手入力】https://ashide.otodo.net 連想漢直。漢字を平仮名に分解して入力する。',
    '【和音漢直】https://210-203-213-118.ppps.bbiq.jp/wp/?page_id=182 無連想漢直。同時押しで、漢字どころかよく使う熟語まで入力できる。',
    '【ブリ中トロ配列】https://mobitan.hateblo.jp/entry/2021/10/23/144559 中指前置シフトかな入力用。清濁同置。左右対称キーボードで使われることを想定。TRONかな配列を句読点キー共有の中指シフト化し、拗音を後置シフトとすることで現代日本語書き言葉のすべてのモーラを2打以内で入力できる。',
    '【月林檎配列】https://menmentsu.hateblo.jp/entry/2021/01/12/230614 中指後置シフトかな入力用。清濁同置。シフト面の濁音を打つときシフトキーを省略できる。',
    '【月見草配列】https://mentaiko.syoyu.net/tsukimisou https://w.atwiki.jp/keylay/ https://twitter.com/mentaik92877176/status/1448633456192208898 文字キーシフトかな入力用。1795万字の文章サンプルを元に計算によって作成された。',
    '【ハイブリッド月配列】https://takahata-shin.hatenadiary.org/entry/20150505/1430818677 中指前置シフトかな入力用。清濁別置(一部同置)。日本語としてあり得ない組み合わせに別の出力をもたせるキー共有や、使用頻度の低い行に対して行段的なアプローチを取ることで覚えやすく早く入力できる。',
    '【月配列Yx】https://panathenaia.halfmoon.jp/key/tsuki-yx.html 中指前置シフトかな入力用。清濁同置。"D", "K"ではなく"E", "I"と上段をシフトキーとする。',
    '【月配列(月2-263)】https://jisx6004.client.jp/tsuki.html 中指前置シフトかな入力用。清濁同置。花配列の中指シフトと、新JISを組み合わせて2chでの議論のもと作られた。派生が非常に多い。',
    '【朧月配列】https://tomkosaka.hatenadiary.org/entry/20110914/1315951201 中指前置シフトかな入力用。清濁別置。',
    '【月配列E】http://blog.livedoor.jp/eninlog/archives/4775068.html 中指・薬指前置シフトかな入力用。清濁別置。',
    '【月配列U】http://yellow.ribbon.to/~ujiro/ 中指・薬指前置シフトかな入力用。清濁同置。薬指のシフトキーで濁音を入力する。また、シフト+スペースで句読点を入力する。',
    '【新下駄配列】https://kouy.exblog.jp/13627994/ 中指・薬指同時シフトかな入力用。清濁別置。制作記は一見の価値あり。',
    '【水草配列】https://omonomo.github.io/Mizukusa/ 中指前置シフトかな入力用。清濁同置。',
    '【香月配列】https://layout.kachoufuugetu.net/tsuki/qwerty/index.html 日本語入力用。QWERTYの母音を省略したときに独自配列が出力される。',
    '【月配列6-070】https://layout.kachoufuugetu.net/tsuki/6x/download/ 中指・薬指・小指前置シフトかな入力用。清濁別置。ホームポジション率が高い。',
    '【月5-315】http://keybor.web.fc2.com/tsuki5-315.html 中指前置シフトかな入力用。清濁別置。',
    '【下駄配列】http://web1.nazca.co.jp/kouy/geta.html 中指・薬指同時シフトかな入力用。清濁同置。',
    '【ぶな配列】http://keybor.blog96.fc2.com/blog-entry-107.html 中指前置シフトかな入力用。清濁別置。',
    '【すずめ配列】http://keybor.blog96.fc2.com/blog-entry-107.html ローマ字入力用。ホームポジション重視',
    '【月配列K】https://kojion.com/posts/1043 中指前置シフトかな入力用。清濁同置。',
    '【DHSBことのは配列】https://kojion.com/posts/1043 かな入力用。Svalboardでの使用を想定。',
    '【いろは坂配列】https://web.archive.org/web/20200919025744/https://ch.nicovideo.jp/chidauyu/blomaga/ar1778989 かな入力用。清濁同置。単打が最も多い。',
    '【中指シフト月光】https://twitter.com/fsktakahasi 中指前置シフトかな入力用。清濁同置。',
    '【◯配列】http://rage2050.g1.xrea.com/GeneKana/_ReadMe.html 中指前置シフトかな入力用。清濁同置。遺伝的アルゴリズムによって求められた。',
    '【ミズナラ配列】http://keybor.web.fc2.com/mizunara-v1.0.html 中指・薬指前置シフトかな入力用。清濁別置。',
    '【弓配列】https://sleepwlk.hatenadiary.org 中指・薬指前置シフトかな入力用。清濁別置。',
    '【三日月配列】https://ameblo.jp/katsu-wo/entry-12136314670.html 中指前置シフトかな入力用。清濁同置。',
    '【さざんか配列】https://kokagem.sakura.ne.jp/doc/keyboard-sazanka/ 前置シフトかな入力用。清濁同置。',
    '【OEA配列】https://web.archive.org/web/20241218053344/http://hp.vector.co.jp/authors/VA011700/moji/keyboard.htm 日英両用。',
    '【コンポジション#3.1】https://qiita.com/harsi/items/5937c1520a79af6ee639 後置シフト。清濁同置。4段配列',
    '【黒塗り下駄配列】https://web.archive.org/web/20230201125818/https://blechmusik.hatenablog.jp/entry/2014/03/22/014249 同時シフト。清濁同置',
    '【龍配列】https://web.archive.org/web/20060318060709/http://aumtyper.hp.infoseek.co.jp/Ryuu.html https://jisx6004.client.jp/layout-kana.html#ryu 中指同時シフトかな入力用。清濁別置。4段配列。' ,
    '【蛇配列】https://jitankeyboard.blog.fc2.com/blog-entry-206.html 中指前置シフトかな入力用。清濁別置。4段配列。',
    '【翡翠配列】https://nyunew.exblog.jp/4888685/ 親指シフトかな入力用。清濁別置。',
    '【かえであすか】http://www.eurus.dti.ne.jp/yfi/kaede-asuka-layout/index.html 親指シフトかな入力用。',
    '【蜩配列】https://altocicada.hatenablog.com/entry/2017/11/26/223001 親指シフト歴史的仮名遣い用の配列。',
    '【姫踊子草かな配列】https://web.archive.org/web/20241128202215/http://hp.vector.co.jp/authors/VA011751/software/himeodorikosou/overview.html 中指・親指同時シフト。',
    '【コノシロ配列】https://kasa92.hatenablog.com/entry/2022/02/21/013228 中指前置シフトかな入力用。清濁別置。',
    '【フラワータッチ】https://www.atok.com/android/ フリック入力の一種。濁音などを簡単に入力できる。',
    '【ターンフリック】https://uminekokobo.blogspot.com/2020/02/tfbi.html フリック入力の一種。拗音・濁音・連母音などを簡単に入力できる。',
  ];
  
  // 配列からランダムにメッセージを選択
  const randomIndex = Math.floor(Math.random() * messages.length);
  const selectedMessage = messages[randomIndex];
  
  // 選択されたメッセージで投稿を作成
  createRecord(selectedMessage);
}

// https://www.docs.bsky.app/docs/api/com-atproto-server-create-session
function createSession() {
  const url = 'https://bsky.social/xrpc/com.atproto.server.createSession'

  const payload = {
    identifier: '',
    password: '',
  }

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    payload: JSON.stringify(payload),
  }

  const response = UrlFetchApp.fetch(url, options)
  return JSON.parse(response.getContentText())
}

// https://www.docs.bsky.app/docs/api/com-atproto-repo-create-record
function createRecord(msg) {
  const url = 'https://bsky.social/xrpc/com.atproto.repo.createRecord'

  const payload = {
    repo: createSession().handle,
    collection: 'app.bsky.feed.post',
    record: {
      text: msg,
      createdAt: new Date().toISOString(),
    },
  }

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + createSession().accessJwt,
    },
    payload: JSON.stringify(payload),
  }

  UrlFetchApp.fetch(url, options)
}
