---
sidebar: false
---
[中文](quickstart.md) | [English](quickstart_en.md)
# ダウンロードアドレス
[![Steam](https://custom-icon-badges.demolab.com/badge/Steam-Link-4169E1?style=flat&logo=steam)](https://store.steampowered.com/app/4099310/__NEKO/)
[![GitHub](https://img.shields.io/badge/GitHub-Project%20N.E.K.O.-181717?style=flat&logo=github)](https://github.com/wehos/N.E.K.O)
[![百度云](https://custom-icon-badges.demolab.com/badge/百度云-Link-4169E1?style=flat&logo=baidunetdisk)](https://pan.baidu.com/s/1qb9XVV94c2FwhIeQO2De5A?pwd=kuro)

# クイックスタート

1. *ワンクリックパッケージユーザー*の場合、`新版启动器.exe`（新バージョンランチャー）を実行してメインコントロールパネルを開きます。

1. `启动对话服务器`（対話サーバー起動）と`开始聊天`（チャット開始）をクリックします。

**Multi-language support is planned in 2026 Spring.**

# 上級使用

#### API Keyの設定

追加機能を得るために独自のAPIを設定したい場合、サードパーティのAIサービスを設定できます。本プロジェクトは現在 *StepFun* または *Alibaba Cloud* の使用を推奨しています。*開発者*は`config/api.py`の内容を直接修正できます（初回設定は`config/api_template.py`を参照してください）。 **We will adapt to more international service provider in 2026 Spring.**

> *Alibaba Cloud API*の取得：Alibaba CloudのBailian Platform[公式サイト](https://bailian.console.aliyun.com/)でアカウント登録します。新規ユーザーは実名認証後に大量の無料クレジットを取得できます。登録完了後、[コンソール](https://bailian.console.aliyun.com/api-key?tab=model#/api-key)にアクセスしてAPI Keyを取得してください。

> *開発者の場合：本プロジェクトをクローン後、(1)新しい`python3.11`環境を作成。(2)`pip install -r requirements.txt`を実行して依存関係をインストール。(3)`config/api_template.py`を`config/api.py`にコピーして必要な設定を行う。(4)`python memory_server.py`と`python main_server.py`を実行。(5)main serverで指定されたポート（デフォルトは`http://localhost:48911`）からウェブ版にアクセス。*

#### キャラクター設定の変更

- ウェブ版で`http://localhost:48911/chara_manager`にアクセスするとキャラクター編集ページに入れます。初期の~~猫娘~~伴侶のプリセット名は`小天`（XiaoTian）です。名前を直接変更し、基本設定を一つずつ追加または変更することをお勧めしますが、数量は制限してください。

- 上級設定には主に**Live2Dモデル設定(live2d)**と**音声設定(voice_id)**が含まれます。**Live2Dモデル**を変更したい場合は、まずモデルディレクトリを本プロジェクトの`static`フォルダにコピーしてください。上級設定からLive2Dモデル管理画面に入り、モデルを切り替え、ドラッグとマウスホイールでモデルの位置とサイズを調整できます。**キャラクター音声**を変更したい場合は、約15秒の連続したクリーンな音声録音を準備してください。上級設定から音声設定ページに入り、録音をアップロードするとカスタム音声の設定が完了します。

- 上級設定にはさらに`system_prompt`があり、システム命令を完全にカスタマイズできますが、変更は推奨されません。

#### APIプロバイダーの変更

- `http://localhost:48911/api_key`にアクセスすると、コアAPIと補助API（記憶/音声）のサービスプロバイダーを切り替えられます。Qwenは機能が充実しており、GLMは完全無料です。

#### 記憶整理

- `http://localhost:48911/memory_browser`にアクセスすると、最近の記憶と要約を閲覧および校正でき、モデルの繰り返しや認知エラーなどの問題をある程度緩和できます。