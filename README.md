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

rememoではそのタイミングに合わせて、復習することにより２ヶ月後の記憶定着率を20%から80%にまで引き上げます。

### 使い方 

1カードを作成
２学習が終われば、完了を押す　２４時間で消える
３最適な復習タイミングに合わせてカードが左側に再表示　２に戻る

1.カードを作成しましょう。

![Blank-Template-Reports](https://user-images.githubusercontent.com/64002008/104951378-bac8f300-5a05-11eb-98a8-022f57d716c0.jpg)

- [カードを追加する]ボタンを押すと、入力画面が現れます。
- タイトル、内容を入力し、参考にしたサイトなどあればURLを登録しましょう。
- 学習する回数も選択できます。回数が少ないほど定着率は下がり、多いほど上昇します。
- カテゴリは自身で固有のカテゴリを追加し、それを活用しましょう。
   

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
