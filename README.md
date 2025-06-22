# NBuild.io NIPs Chatbot

NBuild.io chatbot helps Nostr developers to excel coding with NIPs and Nostr Relays.

## Config before deploy to Google Firebase

Create a file `.firebaserc` in root folder.

```json
{
  "projects": {
    "default": ""
  }
}
```

Create another file `firebaseConfig.js`in root folder too. Before you can obtain a Google Firebase config file, you need to execute the steps in their [official documentation](https://firebase.google.com/docs/web/setup). It explains how to set up a Google Firebase project and create the config file.

```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

export default initializeApp(firebaseConfig);
```

## Deploy a fork with GitHub Workflows

You need to authorize your user to be able to set up secrets on your forked repository. You can follow instructions in their [official documentation](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).

You should set secrets below using GitHub CLI or GitHub in browser. You can learn [here](https://github.com/FirebaseExtended/action-hosting-deploy/blob/main/docs/service-account.md) how to set up a Google Firebase Service Account.

```bash
GOOGLE_FIREBASE_SERVICE_ACCOUNT
GOOGLE_FIREBASE_PROJECT_ID
```
