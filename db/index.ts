import {initializeApp} from "firebase/app"
import {getDatabase} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBUf_SeRSk2u3tQvHOlzeHGJjM9MYsyOqU",
    authDomain: "i-am-seosang.firebaseapp.com",
    databaseURL: "https://i-am-seosang.firebaseio.com",
    projectId: "i-am-seosang",
    storageBucket: "i-am-seosang.appspot.com",
    messagingSenderId: "278704687418",
    appId: "1:278704687418:web:7c1db6f6818dd525092803",
    measurementId: "G-19TTHWRMWN"
};

const app = initializeApp(firebaseConfig)

const db = getDatabase(app)
export default db

// const admin = require("firebase-admin")
// var serviceAccount = require("./i-am-seosang-firebase-adminsdk-x45gj-abbb2ff49b.json")

// export const DB_URL = "https://i-am-seosang.firebaseio.com"

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: DB_URL,
// })

// var rootRef = admin.database().ref()

// export default rootRef
