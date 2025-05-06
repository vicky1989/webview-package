# WebViewPackage

A customizable React Native WebView wrapper package designed to simplify integration of web content in mobile apps. This package provides support for features like back navigation, reload, event handling, and customizable styling.

## ✨ Features

- Easily integrate WebView with built-in navigation support
- Back button handling
- Reload functionality
- Simple and flexible customization
- Works with both Android & iOS

**## 📦 Installation**

> (If hosted on npm, this will go here. Until then...)

Since the package is not published yet, clone the repo or use it as a local dependency in your React Native project:

```bash
yarn add ../path-to/WebViewPackage

"dependencies": {
  "webview-package": "file:../WebViewPackage"
}

**🧩 Usage**
import { CustomWebView } from 'webview-package';

<CustomWebView
  source={{ uri: 'https://example.com' }}
  onBackPress={() => console.log('Back pressed')}
  style={{ flex: 1 }}
/>
**📁 Folder Structure**
WebViewPackage/
├── src/
│   └── CustomWebView.tsx
├── index.js
├── package.json
├── .gitignore
└── README.md

**🛠️ Technologies Used**
React Native
react-native-webview
TypeScript (optional support)

🙌 Author
Vishal Srivastava
