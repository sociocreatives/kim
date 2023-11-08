import { db } from "@/firebase";
import { collection, query, limit, getDocs, serverTimestamp } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function AllJobs({items}) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    // 
    useEffect(() => {
        const fetchData = async () => {
            const collectionRef = collection(db, "jobs");
            const queryLimit = 10000;
            const limitQuery = query(collectionRef, limit(queryLimit));
            const sucessNotify = () => toast.success("Sucess!");

            try {
                const querySnapshot = await getDocs((limitQuery), serverTimestamp());
                const fetchData = [];
                querySnapshot.forEach((doc) => {
                    fetchData.push({ id: doc.id, ...doc.data(), date_posted: doc.data().date_posted?.toDate().getTime() });
                });
                setJobs(fetchData, sucessNotify);
                
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])

  return (
    <div className="category-sections">
        <div className="category-content">
            <div className="category-left">
                <h2>Jobs that might fit your preference</h2>
                <p>Make Request</p>
            </div>
          
            {loading ? (
                        <Spinner/>
                        ) : (
                         <div className="category-card">
                                {jobs.map((item) => (
                            <div key={item.id} className="cards" data-aos="zoom-in">
                               <Link href={`/jobs/${item.id}`}>
                                <div className="jobtitlelong" >
                                    <h4 className="dtaeslong">Posted On: {new Date(item.date_posted).toDateString()}</h4>
                                    <h3>{item.job_title}</h3>
                                    <p>{item.description}</p>
                                                <h5>{item.category}</h5>
                                               
                                </div>
                                <div className="bottomclass">
                                    <div className="estimates">Estimated Budget: <span>KES. {item.budget}</span></div>
                                    <h5>Posted by: <span>{item.postedby}</span></h5>
                                        </div>
                                 </Link>
                            </div>
                            ))
                        }</div>
                    )} 
        </div>
    </div>
  )}