import { UserAuth } from '@/context/AuthContext';
import { db } from '@/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Firestore, QuerySnapshot, documentSnapshot, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const getUserData = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            const colRef = collection(db, "users");
            const userQuery = query(colRef, where("uid", "==", uid));
            const userData = getDocs(userQuery, uid);
            console.log(userData, uid);
            getDocs(userQuery).then((documentSnapshot) => {
                documentSnapshot.data();
                console.log(documentSnapshot);
            })
                .catch((error) => {
                    console.log(error);
                });

        } else {
            console.log("No user found");
        }
    });
}



export default function GetUserDetails() {
    const { user } = UserAuth();
    const readData = async () => {
        try {
            const userDoc = collection(db, "users", user.id)
            await getDocs(userDoc).then((doc) => { 
                if (doc.exists) {
                    console.log(doc.data());
                    console.log(user.id);
                }
            })
            alert('data is there')
        } catch (error) {
            console.log(error);
        }
    }
    // const [userDetails, setUserDetails] = useState([]);

    // useEffect(() => {
    //     const fetchUserDetails = async () => {
    //         const data = await getUserData(uid);
    //         setUserDetails(data);
    //     };
    //     // 
    //     fetchUserDetails();
    //  }, [uid]);

    return (
        <div>
            <h1>Get User Details</h1>
            <button onClick={readData}>Get User Details</button>
            <div>
            
            </div>
        
        </div>
    )
};