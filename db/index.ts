import {initializeApp} from "firebase/app"
import {getDatabase} from "firebase/database";


const firebaseConfig = {
    databaseURL: "https://i-am-seosang.firebaseio.com",
    projectId: "i-am-seosang",
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
