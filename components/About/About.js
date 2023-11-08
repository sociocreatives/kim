
import { db } from "@/firebase";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Image from 'next/image'


async function fetchDataFromAbout() {
    const QuerySnapshot = await getDocs(collection(db, "about"));

    const data = [];
    QuerySnapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
        console.log(data);
    });
    return data;
    }

export default function AboutHeader() { 
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
          <div className="aboutimage">
              
          </div>
            <div className="category-section">
                <div className="category-content" data-aos="fade-up">
                    <div className="category-left">
                        <h1>About Mr. Kim</h1>
                      <div className="plus"><p>Make Request  
                          <Image src="/assets/images/plus2.svg" width={10} height={10} alt="Plus" priority className="imageplus"/></p>
                      </div>
                    </div>
                    <div className="category-below">
                        <p>Looking for Open Job Opportunities? <span>Find Jobs </span></p>
                    </div>
                    
                </div>
          </div>
          <div className="about-introduction" data-aos="fade-up">
              {about.map((about) => (
                            
                            <div key={about.id} className="about-title">
                               <p> {about.description}</p>
                            </div>
                        ))}
          </div>
          <div className="mission">
              <div className="mission-image">
                  
              </div>
              <div className="mission-content">
                  <h3>Our Mission</h3>
                  <p>Our mission is simple: to bring expertise, reliability, and convenience to every home, apartment, commercial buildings, government agency buildings and healthcare building’s project. Whether it`s fixing a leaky faucet, fixing an electrical issue, cleaning, painting a room, or assembling furniture, we`re committed to delivering exceptional service that transforms houses, apartment, commercial buildings, government agency buildings and healthcare buildings into comfortable and functional living environment.</p>
              </div>
          </div>
        </div>
    )

}
