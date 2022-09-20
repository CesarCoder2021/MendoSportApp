import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8Hc8zmJPoW4HIjyRO6FoXOtkLP2RbBSg",
  authDomain: "mendosport-reactcoder.firebaseapp.com",
  projectId: "mendosport-reactcoder",
  storageBucket: "mendosport-reactcoder.appspot.com",
  messagingSenderId: "914588774457",
  appId: "1:914588774457:web:6998947968a0ab40089de8",
  measurementId: "G-FFKHZEMG7S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const fireStoreFetch = async (id) => {
    let q;
    if (id) {
        q = query(collection(db, "productosMS"), where("categoryId", "==", id));
    } else {
        q = query(collection(db, "productosMS"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map (doc => ({
        id: doc.id,
        ...doc.data()
    }))

    return dataFromFirestore
}

export const firestoreOneFetch = async (item) => {
    const docRef = doc(db, "productosMS", item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {id: docSnap.id, ...docSnap.data()};
    } else {
      console.log("No such document!");
    }
  }
