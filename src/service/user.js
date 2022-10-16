// import db from "./Firebase/firebaseInit";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "Users"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(
//     "Users collection's document id of " + doc.id,
//     "contains ",
//     doc.data()
//   );
// });

// // to get just 1 document from a specific collection
// const docRef = doc(db, "Users", "q1dFCkSblms3sLqaECDJ");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log(
//     "This should show data from document id: q1dFCkSblms3sLqaECDJ",
//     docSnap.data()
//   );
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
