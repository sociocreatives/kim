
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";


async function fetchDataFromAbout() {
    const QuerySnapshot = collection(db, "users");
    const q = query(QuerySnapshot, where("status", "==", "jobseeker"));
    console.log(q);

    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
        console.log(data);
        
    });
    return data;

    // const data = [];
    // QuerySnapshot.forEach((doc) => {
    //     data.push({id: doc.id, ...doc.data()});
    //     console.log(data);
    // });
    // return data;
    }

export default function TeamHeader() { 
    const [about, setAbout] = useState([])

    useEffect(() => {
        async function fetchCategories() {
            const data = await fetchDataFromAbout();
            setAbout(data);
        }
        fetchCategories();
    }, []);

  return (
      <div>
          <div className="teamimage">
              
          </div>
            <div className="category-section">
                <div className="category-content" data-aos="fade-up">
                    <div className="category-left">
                      <h1>Our Talent Pool</h1>
                    </div>
                    <div className="category-below">
                        <p>Looking for Open Job Opportunities? <span><Link href="/jobs">Find Jobs </Link></span></p>
                    </div>
                </div>
          </div>
          <div className="talent" data-aos="fade-up">
                        {about.map((about) => (
                            <div key={about.id} className="talanta">
                                <Link href="/" passHref>
                                    <Image src={about.photo} alt="user" width={120} height={120} className="username"/>
                                </Link>
                                <p> {about.name}</p>
                                <h4>{about.job_title}</h4>
                            </div>
                        ))}
          </div>
         
        </div>
    )

}
