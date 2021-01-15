## 概要

---
「効率的な記憶定着を！」

忘却曲線に合わせた学習で、高い記憶定着率を実現する学習ツールです。

## URL
https://cork03.github.io/rememo/

[ログイン] -> [ゲストユーザー]ボタンからテストユーザーとしてログインできます。

## 制作の背景
元々勉強が好きだということもあり、多い月だと１０冊ほどの本を読んでます。

ですが、量はそこそこあるものの、内容を人に教えれるほど理解度が高いわけでも記憶にしっかり定着しているわけでもないことに気がつきました。

そこで、理解度、記憶定着率の最大化を図るため、内容の文章化と忘却曲線に合わせた再学習を備えたrememoの開発に至りました。

## 使用した技術

### フロントエンド

- react
- react-router
- react-modal
- react-toastify
- redux,react-redux
- redux-saga,redux-thunk
- axios
- typescript
- eslint+prettier
- styled-components

### バックエンド

- express
- bcrypt
- passport
- passport-jwt
- passport-local
- sequelize
- mysql2
- typescript

### インフラ

- AWS(EC2、RDS for MySQL、Route53、ALB
- Nginx

構成図

![rememoapi](https://user-images.githubusercontent.com/64002008/104776738-e0fc5200-57bd-11eb-9c32-e73d573be076.png)



## 設計

### 全体構成



