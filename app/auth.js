import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebaseの設定
const firebaseConfig = {
    apiKey: "AIzaSyBKOQbjqM8LZd0s5umDcBoroRzSEXlEQAg",
    authDomain: "chrometaskmanager.firebaseapp.com",
    projectId: "chrometaskmanager",
    storageBucket: "chrometaskmanager.firebasestorage.app",
    messagingSenderId: "289748804459",
    appId: "1:289748804459:web:341a63cf86acbec88f222e",
    measurementId: "G-4NP49DH8BG"
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// auth.jsの読み込み確認用
console.log('auth.js is loaded');

document.getElementById('loginBtn').addEventListener('click', () => {
    alert('ログインボタンが押されました');

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // 認証成功時の処理
            console.log('User signed in:', result.user);
        })
        .catch((error) => {
            // エラー時の処理
            console.error('Error during sign in:', error);
        });
});