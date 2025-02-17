# chromeTaskManager
#　product by タカミ,石井大翔


ディレクトリ構成(予定)を以下に示す
📦 project-root
├── 📂 backend/              # Node.js (Express + Socket.IO + Firebase) のバックエンド
│   ├── 📂 config/           # 設定ファイル（Firebase、OAuth）
│   │   ├── firebase.js     # Firebase Firestore 設定
│   │   ├── googleAuth.js   # Google OAuth 設定
│   ├── 📂 controllers/      # 各種APIのロジック（MVCモデル）
│   │   ├── authController.js   # OAuth認証関連の処理
│   │   ├── scheduleController.js  # 予定管理の処理
│   │   ├── studyController.js     # 勉強記録の処理
│   ├── 📂 models/          # Firestoreデータ構造定義（DBのスキーマ設計）
│   │   ├── userModel.js    # ユーザーデータの定義
│   │   ├── scheduleModel.js # スケジュールデータの定義
│   ├── 📂 routes/          # ルーティング（APIのエンドポイント定義）
│   │   ├── authRoutes.js   # 認証関連のルート
│   │   ├── scheduleRoutes.js # スケジュール関連のルート
│   │   ├── studyRoutes.js  # 勉強記録関連のルート
│   ├── 📂 services/        # サービス層（複数のコントローラーで共通する処理）
│   │   ├── authService.js  # 認証関連の共通処理
│   │   ├── studyService.js # 勉強データの処理
│   ├── 📂 utils/           # ユーティリティ（汎用的な処理）
│   │   ├── socket.js       # Socket.IO の処理
│   ├── server.js           # Expressサーバーのエントリーポイント
│   ├── package.json        # Node.jsのパッケージ管理
│   ├── .env                # 環境変数（APIキーなど）
│   ├── README.md           # バックエンドの説明
│
├── 📂 frontend/             # Chrome拡張機能（フロントエンド）
│   ├── 📂 src/             # ソースコード
│   │   ├── 📂 assets/      # アイコンや画像
│   │   ├── 📂 styles/      # CSSファイル
│   │   │   ├── popup.css  # ポップアップのスタイル
│   │   │   ├── newtab.css # カスタムホーム画面のスタイル
│   │   ├── 📂 scripts/    # JavaScript（API通信、UI操作）
│   │   │   ├── script.js  # とりあえずで作ってるJSです。変更削除してもらって大丈夫です。 
│   │   │   ├── popup.js   # ポップアップ画面のスクリプト
│   │   │   ├── newtab.js  # 新しいタブのスクリプト
│   │   │   ├── api.js     # API通信の処理
│   │   │   ├── auth.js    # Google OAuth ログイン処理
│   │   ├── popup.html     # ポップアップのUI
│   │   ├── index.html     # 初期画面のUI
│   │   ├── newtab.html    # 新しいタブのUI
│   ├── background.js      # 拡張機能のバックグラウンド処理
│   ├── package.json       # フロントエンドのパッケージ管理
│   ├── README.md          # フロントエンドの説明
│
├── README.md          # 全体の説明
└── manifest.json      # Chrome拡張の設定