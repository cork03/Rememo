## rememo

---
「効率的な記憶定着を！」

忘却曲線に合わせた学習で、高い記憶定着率を実現する学習ツールです。

## URL
https://cork03.github.io/rememo/

[ログイン] -> [ゲストユーザー]ボタンからテストユーザーとしてログインできます。

## 概要

### 忘却曲線

![curveImage2](https://user-images.githubusercontent.com/64002008/104856425-eee4db00-5955-11eb-9202-614668458c69.jpg)

一回学んだだけでは定着率が２０％

忘却曲線に基づき忘れてきた頃合いで再学習して定着率を大幅に上げる


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
