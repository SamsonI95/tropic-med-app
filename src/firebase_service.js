import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ1Rda_Pk8uKnPf2uVuBYhOb4axpEuFKo",
  authDomain: "tropic-med.firebaseapp.com",
  projectId: "tropic-med",
  storageBucket: "tropic-med.appspot.com",
  messagingSenderId: "2774281420",
  appId: "1:2774281420:web:db01fb972bcfcd4be52669"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function for adding a user
async function addUser (username, password) {
  try {
    // Generate a random user ID for testing without authentication
    const userId = `user_${Math.floor(Math.random() * 10000)}`;

    await db.collection("users").doc(userId).set({
      username,
      password,   // Store password for testing only (not secure for production)
    });

    console.log("User added successfully!");
  } catch (error) {
    console.error("Error adding user:", error); // Handling errors appropriately
  }
};

export { db, addUser }; // Exports database and addUser function