import { collection, getDocs } from "firebase/firestore/lite";
// Pretend 'db' is your connection to your Firebase database
import { db } from "./firebase-setup";

export async function getVans() {
  // 1. Tell Firebase which collection (folder) of data you want to look at
  const vansCollectionRef = collection(db, "vans");

  // 2. Download all the documents (vans) inside that collection
  const querySnapshot = await getDocs(vansCollectionRef);

  // 3. Clean up the data into a normal JavaScript array so React can map over it
  const dataArray = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(), // This grabs the name, price, image, etc.
    };
  });

  return dataArray;
}
