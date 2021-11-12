import { initializeApp } from "firebase/app"
import firebaseConfig from "./FirebaseConfig"


const firebaseInitializer = () => {
    // getting configuration from the FirebaseConfig.js file and also initializing app
    initializeApp(firebaseConfig)
}

export default firebaseInitializer