// Source: profile_notifier.dart

import { Portfolio } from '@/types/portfolio';

export function calculateAge(birthday: string): number {
  const now = new Date();
  const parts = birthday.split('/');
  const birth = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  let age = now.getFullYear() - birth.getFullYear();
  if (now.getMonth() < birth.getMonth()) {
    age--;
  } else if (now.getMonth() === birth.getMonth()) {
    if (now.getDate() < birth.getDate()) {
      age--;
    }
  }
  return age;
}

export const profileData: Portfolio = {
  overview: {
    name: '豊田真吾',
    eName: 'Shingo Toyoda',
    hello: "Hi, I'm Shingo Toyoda. \nI like Swift, Flutter, Cooking & Gaming.",
    birthday: '2002/03/22',
    imageUrl: 'https://avatars.githubusercontent.com/u/43494392?v=4',
    position: 'Mobile App Development',
    introduction: 'こんにちは、北海道大学情報科学院に所属しています。\nSwiftとFlutterを使ってアプリ開発をすることが好きです。\n\nここでは小さなものから大きなものまで、私がやってきたことについて紹介してます。\nこのサイトを通して、私のことについてちょっとでも知ってもらえたらうれしいです。\n\nそういえば、ダークモードのテーマも用意しています。眩しいのがイヤなときは端末のダークモードをONにしてご覧くださいね。',
    links: [
      { url: 'https://maps.app.goo.gl/BjNmZUzCCMNrpSGx7', faIconName: 'locationDot', text: 'Hokkaido' },
      { url: 'https://github.com/toyoshin5', faIconName: 'github', text: 'GitHub' },
      { url: 'https://x.com/10yo4n', faIconName: 'x-twitter', text: 'X' },
      { url: 'https://apps.apple.com/jp/developer/toyoda-shingo/id1583565951', faIconName: 'appStore', text: 'AppStore' },
      { url: 'https://www.facebook.com/profile.php?id=100009908073150&locale=ja_JP', faIconName: 'facebook', text: 'Facebook' },
      { url: 'https://www.instagram.com/toyoshin_', faIconName: 'instagram', text: 'Instagram' },
      { url: 'https://atcoder.jp/users/Toyoshin', faIconName: 'laptopCode', text: 'AtCoder' },
    ],
  },
  news: [
    { date: '2025/10', text: 'JPHACKS2025に参加しました' },
    { date: '2025/04', text: 'try! Swift Tokyo 2025のスタッフとして参加しました' },
    { date: '2025/03', text: '外資就活ドットコムのEngineer Guild Hackathonに参加しました' },
    { date: '2024/11', text: 'クックパッドのインターンシップに参加しました' },
    { date: '2024/10', text: 'DeNAオータムハッカソンに参加しました' },
    { date: '2024/10', text: 'MoneyForwardのインターンシップに参加しました' },
    { date: '2024/08', text: 'LINEヤフーのインターンシップに参加しました' },
    { date: '2024/08', text: 'mybestのインターンシップに参加しました' },
  ],
  projects: [
    {
      title: 'TwiNotes',
      date: '2021/08',
      description: 'X風のUIのメモ&リマインダーアプリです。すべてのメモには木構造のようにリプライを繋げられることが特徴です。日本語と英語に対応しています。',
      imagePath: 'twinotes.jpeg',
      url: 'https://apps.apple.com/jp/app/twinotes-sns%E9%A2%A8%E3%83%A1%E3%83%A2/id1583565949',
      budges: ['swift', 'swiftui', 'personal'],
    },
    {
      title: 'Ashiart',
      date: '2025/10',
      description: '一筆書きの絵から簡単にランニングコースを作成できるアプリです。JPHACKS 2025にて作成し、Best Hack Award を受賞しました。',
      imagePath: 'ashiart.png',
      url: 'https://github.com/jphacks/sp_2509',
      budges: ['react', 'team', 'hackerson'],
    },
    {
      title: 'mesh',
      date: '2025/03',
      description: '1つの招待リンクでグループで一時的な位置情報を行い、スムーズな待ち合わせを促すアプリです。Engineer Guild Hackathonにて作成しました。gRPCを使ったリアルタイムデータ通信やバックグラウンドでの位置情報取得を初めて活用しました。',
      imagePath: 'mesh.jpg',
      budges: ['flutter', 'team', 'hackerson'],
    },
    {
      title: 'ARメジャー',
      date: '2018/04',
      description: 'カメラを用いて2点間の距離を測るアプリです。一見iPhoneの計測アプリと同じ機能のように見えますが、実はAppleが計測アプリを公開する前に作成しました。',
      imagePath: 'armeasure.png',
      url: 'https://github.com/toyoshin5/AR-Measure',
      budges: ['swift', 'uikit', 'personal'],
    },
    {
      title: 'Rakupe',
      date: '2019/03',
      description: '頭の動きでページをめくるPDFリーダーです。電車のつり革などで片手が封じられている状況でも頭を使ってメージをめくることができます。学内ハッカソンで作成しました。',
      imagePath: 'rakupe.png',
      url: 'https://github.com/toyoshin5/Rakupe',
      budges: ['swift', 'uikit', 'team', 'hackerson'],
    },
    {
      title: 'COINs!',
      date: '2019/11',
      description: '外国人観光客向けに日本での現金の最適な払い方を提案するアプリです。レジなどで店員の会計金額の声をマイクで録音し、財布が最も軽くなる支払い方を指南します。初めてのチーム開発経験として教授やメンバー相談しながら開発を進めました。',
      imagePath: 'coins.png',
      url: 'https://web-ext.u-aizu.ac.jp/pc-concours/2019/final/f_photo_mobile.html',
      budges: ['kotlin', 'team', 'contest'],
    },
    {
      title: 'PhantomTale',
      date: '2021/01',
      description: 'UnrealEngine5を使って作成したVRアクションゲームです。高専の創造工学の授業で友達と6人で制作しました。操作キャラ周りを担当し、リアルな弓の射撃体験を実装に落とし込んでみました。',
      imagePath: 'phantomtale.png',
      url: 'https://youtu.be/0Zpa3UZzZDk',
      budges: ['unrealengine', 'team'],
    },
    {
      title: 'プロ棋士サーバ',
      date: '2022/09',
      description: '対面で行う囲碁の対局で、対局時計と棋譜の管理を自動化してくれるアプリです。ノートパソコンの内カメラを使って盤面を映すことで、現在の盤面の様子を自動で記録することができます。技育展2022に出展。',
      imagePath: 'proxy.png',
      url: 'https://spice-test-project-d3472.web.app/',
      budges: ['react', 'team', 'hackerson'],
    },
    {
      title: 'RSSimply',
      date: '2023/04',
      description: 'iPadのPlaygroundsだけを使って開発してみました。登録したRSSフィードを取得して記事を表示するアプリです。',
      imagePath: 'rssimply.png',
      url: 'https://apps.apple.com/jp/app/rssimply/id6448121530',
      budges: ['swift', 'swiftui', 'personal'],
    },
    {
      title: 'Umap(うまっぷ)',
      date: '2023/08',
      description: 'これから行ってみたい飲食店や行った外食の思い出を残して自分だけの"ごはんマップ"を作れるアプリです。JPHACKSというハッカソンで作成し、4人チームのリーダを努めました。GitHubを使ったissue管理やCI/CDを初めて活用しました。',
      imagePath: 'umap.jpeg',
      url: 'https://apps.apple.com/jp/app/umap-%E3%81%86%E3%81%BE%E3%81%A3%E3%81%B7/id6471849198',
      budges: ['flutter', 'team', 'hackerson'],
    },
    {
      title: 'AppleMusicClone',
      date: '2023/12',
      description: 'AppleMusicのアルバム画面のUIを、様々なプラットフォームで再現して開発体験やアプリの操作性などを比較してみました。NavigationBarのブラーやスクロールの感覚など、細かい違いを実感できておもしろかったです。',
      imagePath: 'applemusicclone.png',
      url: 'https://github.com/toyoshin5/AppleMusicClone-with-SwiftUI',
      budges: ['swift', 'uikit', 'swiftui', 'flutter', 'reactNative', 'personal'],
    },
    {
      title: 'ミラーサイネージを用いた歯磨き支援システム',
      date: '2024/2',
      description: 'AKATSUKIプロジェクトにて提案した作品です。鏡の前に立って歯磨きを行うことで適切な歯磨きを指南し、カメラを通して歯磨きのチェックを行うアプリケーションを作成しました。鏡の画面上に歯磨きの14手順が左下、左下裏、左上...のように順番に表示されます。利用者は鏡の前で各手順15秒ずつ歯を磨きます。磨いている間、鏡内蔵のカメラを用いて利用者が歯磨きをしているか監視し、途中で歯磨きを止めるとタイマーが止まり、歯磨きの再開を促します。口内のあらゆる歯を磨けるようにサポートすることで、将来の虫歯や歯周病予防に役立ちます。',
      imagePath: 'brashmirror.jpeg',
      budges: ['kotlin', 'team'],
    },
    {
      title: '通貨換算カメラ',
      date: '2024/03',
      description: 'カメラを値札にかざすだけで39カ国の通貨を換算してくれるアプリです。UXやアニメーションにこだわりました。MVVMアーキテクチャを採用してみたりもしました。',
      imagePath: 'photocurrency.jpeg',
      url: 'https://apps.apple.com/jp/app/photocurrency-%E9%80%9A%E8%B2%A8%E5%A4%89%E6%8F%9B%E3%82%AB%E3%83%A1%E3%83%A9/id6479285476',
      budges: ['swift', 'swiftui', 'personal'],
    },
  ],
  skills: [
    { language: 'Swift', languageFull: 'Swift', level: 5 },
    { language: 'Flutter', languageFull: 'Flutter (Dart)', level: 5 },
    { language: 'Python', languageFull: 'Python', level: 4 },
    { language: 'C++', languageFull: 'C/C++', level: 4 },
    { language: 'Kotlin', languageFull: 'Kotlin', level: 3 },
    { language: 'C#', languageFull: 'C#', level: 3 },
    { language: 'JS', languageFull: 'JavaScript', level: 2 },
    { language: 'Arduino', languageFull: 'Arduino', level: 2 },
    { language: 'Ruby', languageFull: 'Ruby', level: 1 },
    { language: 'lua', languageFull: 'lua', level: 1 },
    { language: 'Go', languageFull: 'Go', level: 1 },
  ],
  awards: [
    { date: '2019/05', text: '基本情報技術者試験 合格' },
    { date: '2019/11', text: 'パソコン甲子園2019 モバイル部門 グランプリ' },
    { date: '2021/01', text: 'TOEIC Listening & Reading 750点 取得' },
    { date: '2022/03', text: '鈴鹿高専電子情報工学科 卒業研究発表会 ベストプレゼンテーション賞' },
    { date: '2022/09', text: '技育展2022 優秀賞' },
    { date: '2023/11', text: 'JPHACKS2023, Finalist Award, イノベータ認定,企業賞' },
    { date: '2024/03', text: '北海道大学工学部情報エレクトロニクス学科 コース長賞' },
    { date: '2025/03', text: 'Engineer Guild Hackathon 優勝' },
    { date: '2025/11', text: 'JPHACKS2025, Best Hack Award, Best Audience Award, Finalist Award, イノベータ認定, dip賞, 三菱重工賞, ROHTO賞' },
  ],
  profile: [
    { date: '2002/3', text: '愛知県小牧市で生まれる', faIconName: 'person' },
    { date: '2017/3', text: '三重県内の公立中学校を卒業', faIconName: 'graduationCap' },
    { date: '2017/4', text: '鈴鹿工業高等専門学校 電子情報工学科 入学', faIconName: 'person' },
    { date: '2022/3', text: '鈴鹿工業高等専門学校 電子情報工学科 卒業', faIconName: 'graduationCap' },
    { date: '2022/4', text: '北海道大学 工学部 情報エレクトロニクス学科 入学', faIconName: 'person' },
    { date: '2024/3', text: '北海道大学 工学部 情報エレクトロニクス学科 卒業', faIconName: 'graduationCap' },
    { date: '2024/4', text: '北海道大学 情報科学院 修士課程 入学', faIconName: 'person' },
  ],
};

const cookImageNames = [
  '1663894279673.jpg',
  'IMG_0000.jpg',
  'IMG_0055.jpg',
  'IMG_0649.jpg',
  'IMG_0799.jpg',
  'IMG_0825.jpg',
  'IMG_0948.jpg',
  'IMG_1065.jpg',
  'IMG_1066.jpg',
  'IMG_1070.jpg',
  'IMG_1111.jpg',
  'IMG_1195.jpg',
  'IMG_1272.jpg',
  'IMG_1416.jpg',
  'IMG_1417.jpg',
  'IMG_1421.jpg',
  'IMG_1490.jpg',
  'IMG_1496.jpg',
  'IMG_1504.jpg',
  'IMG_1514.jpg',
  'IMG_1537.jpg',
  'IMG_1559.jpg',
  'IMG_1612.jpg',
  'IMG_1654.jpg',
  'IMG_1684.jpg',
  'IMG_1685.jpg',
  'IMG_1711.jpg',
  'IMG_1731.jpg',
  'IMG_1745.jpg',
  'IMG_1749.jpg',
  'IMG_1783.jpg',
  'IMG_1794.jpg',
  'IMG_1800.jpg',
  'IMG_1810.jpg',
  'IMG_1811.jpg',
  'IMG_1836.jpg',
  'IMG_2020.jpg',
  'IMG_2048.jpg',
  'IMG_2050.jpg',
  'IMG_2083.jpg',
  'IMG_2113.jpg',
  'IMG_2283.jpg',
  'IMG_2291.jpg',
  'IMG_2320.jpg',
  'IMG_2328.jpg',
  'IMG_2350.jpg',
  'IMG_2362.jpg',
  'IMG_2477.jpg',
];

export const cookImages: string[] = cookImageNames.map(name => `/images/cook/${name}`);

export const cookThumbnails: string[] = cookImageNames.map(name => `/images/s_cook/${name}`);

