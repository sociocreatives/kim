import { db } from "@/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


export async function getServerSideProps(context) {
    const { id } = context.query;
    const jobRef = collection(db, "jobs");
    const jobDoc = await getDoc(doc(jobRef, id));

    if (!jobDoc.exists()) { 
        return {
           alert: "No such document!"
        }
    }
   
    const jobData = jobDoc.data();
    console.log(jobData);

    return {
        
        props: {
            jobData: JSON.stringify(jobRef)
            
        }
    }
}

const JobDetail = () => {
   

    
    
  return (
      <div className="premium">

         <p>fdsfs</p>
    </div>
  )
}

export default JobDetail
