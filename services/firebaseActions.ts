
import { db } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const createUser = async (email: string, username: string, password: string) => {
  try {
    await setDoc(doc(db, "users",username), {
      username,
      email,
      password,
      createdAt: new Date(),
    });

    console.log("User created successfully:", username);
    return { success: true, username };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: error };
  }
};


export const getUser = async (username: string) => {
    try {
      const userDocRef = doc(db, "users", username);
      
      const docSnap = await getDoc(userDocRef);
  
      if (docSnap.exists()) {
        return { success: true, data: docSnap.data() };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      console.error("Error retrieving user:", error);
      return { success: false, error: error };
    }
  };