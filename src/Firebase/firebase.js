
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA8zOph4HhOUwIuhp22Sh0Hasv5O8KGtQ8",
  authDomain: "linkedin-fa06e.firebaseapp.com",
  projectId: "linkedin-fa06e",
  storageBucket: "linkedin-fa06e.appspot.com",
  messagingSenderId: "696699555503",
  appId: "1:696699555503:web:c191901dadd729ff678e5a"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const db=app.firestore()
const auth=firebase.auth()
export  {db,auth}