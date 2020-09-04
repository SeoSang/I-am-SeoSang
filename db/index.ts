// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app"

export const DB_URL = "https://i-am-seosang.firebaseio.com"

// Add the Firebase services that you want to use
import "firebase/database"
import game2048 from "./game2048"

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  // apiKey: "api-key",
  // authDomain: "project-id.firebaseapp.com",
  databaseURL: DB_URL,
  // projectId: "project-id",
  // storageBucket: "project-id.appspot.com",
  // messagingSenderId: "sender-id",
  // appID: "app-id",
}
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
var rootRef = firebase.database().ref()

// const dbSelector = (collection) => {
//     game2048.
// }

export default rootRef

// const admin = require("firebase-admin")
// var serviceAccount = require("./i-am-seosang-firebase-adminsdk-x45gj-abbb2ff49b.json")

// export const DB_URL = "https://i-am-seosang.firebaseio.com"

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: DB_URL,
// })

// var rootRef = admin.database().ref()

// export default rootRef
