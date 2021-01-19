## rememo

---
「効率的な記憶定着を！」

忘却曲線に合わせた学習で、高い記憶定着率を実現する学習ツールです。

## URL
https://cork03.github.io/rememo/

[ログイン] -> [ゲストユーザー]ボタンからテストユーザーとしてログインできます。

## 概要

### 忘却曲線

![curve11](https://user-images.githubusercontent.com/64002008/104857520-687fc780-595c-11eb-8927-42c43b64fade.jpg)

上図のように、復習をしなかった学習内容は２ヶ月後には覚えている割合が20%にまで下がってしまいます。

ですが、脳科学の研究による最適なタイミングでの復習により、記憶への定着率を大幅に上げることが出来ます。

rememoではそのタイミングに合わせて、２日後、１週間後、１ヶ月後と復習することにより２ヶ月後の記憶定着率を20%から80%にまで引き上げます。

### アプリの利用

1.カードを作成

![Blank-Template-Reports](https://user-images.githubusercontent.com/64002008/104951378-bac8f300-5a05-11eb-98a8-022f57d716c0.jpg)

- [カードを追加する]ボタンを押すと、入力画面が現れます。
- タイトル、内容を入力し、参考にしたサイトなどあればURLを登録しましょう。
- 学習する回数も選択でき、回数が少ないほど定着率は下がり、多いほど上昇します。
- カテゴリは自身で固有のカテゴリを追加し、それを活用します。
- [カードを作成]を押すと、リスト内にカードが作成されます。

2.学習

![Blank-Template-Reports (1)](https://user-images.githubusercontent.com/64002008/104961098-ffaa5500-5a18-11eb-9c35-a611eeabc386.jpg)


- カードを開き内容を覚えたら、学習完了ボタンを押します。
- 学習済みの欄にカードが移動し、 移動したカードは２４時間後に欄から消えます。（完了した学習を一定時間可視化しておくことはユーザーに達成感を感じてもらうためです。）
- 消えたカードは再復習に最適なタイミングで[今日の学習]の欄に再表示されます。

## アプリの機能

- カードの再表示機能
- ユーザーの各種設定
  - デフォルトでのソートの種類、カード作成時の学習回数の設定
  - カードを削除する際の、削除の再確認の有無の設定
- jwtによる認証
  - ログインの際に認証が通れば、サーバ側からjwtが送られてくる
  - そのjwtをローカルストレージにセットし、認証が必要な通信の場合そのjwtを使い認証を行います
- カードのCRUD機能
- ソート機能
   

## 制作の背景
元々勉強が好きだということもあり、多い月だと１０冊ほどの本を読んでます。

ですが、量はそこそこあるものの、内容を人に教えれるほど理解度が高いわけでも記憶にしっかり定着しているわけでもないことに気がつきました。

そこで、理解度、記憶定着率の最大化を図るため、内容の文章化と忘却曲線に合わせた再学習を備えたrememoの開発に至りました。

## 使用した技術

### フロントエンド
- typescript
#### フレームワーク
- react

#### 状態管理
- redux,react-redux
#### 非同期通信
- redux-saga 
- redux-thunk
- axios

#### その他
- react-router
- react-modal
- react-toastify
- eslint+prettier
- styled-components

### バックエンド
- typescript
#### フレームワーク
- express
#### ORM
- sequelize
#### その他
- sequelize
- bcrypt
- passport
- passport-jwt
- passport-local
- mysql2


### インフラ

- AWS(EC2、RDS for MySQL、Route53、ALB
- Nginx

## 設計

### 全体構成

![rememo構成図](https://user-images.githubusercontent.com/64002008/104777928-df338e00-57bf-11eb-9f1b-06078b1c7979.png)

### インフラ構成図

![rememoapi](https://user-images.githubusercontent.com/64002008/104776738-e0fc5200-57bd-11eb-9c32-e73d573be076.png)
