import { db } from "@/firebase";
import { collection, query, limit, getDocs, serverTimestamp } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Link from "next/link";

export default function JobsHome() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    // 
    useEffect(() => {
        const fetchData = async () => {
            const collectionRef = collection(db, "jobs");
            const queryLimit = 4;
            const limitQuery = query(collectionRef, limit(queryLimit));

            try {
                const querySnapshot = await getDocs((limitQuery), serverTimestamp());
                const fetchData = [];
                querySnapshot.forEach((doc) => {
                    fetchData.push({ id: doc.id, ...doc.data(), date_posted: doc.data().date_posted?.toDate().getTime() });
 
                });
                setJobs(fetchData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])

  return (
    <div className="category-section">
        <div className="category-content">
            <div className="category-left">
                <h1>Browse Open Jobs</h1>
                <Link href="/jobs"><p>See All</p></Link>
            </div>
            <div className="category-below">
                <p>Looking for Open Job Opportunities? <span>View Categories </span></p>
            </div>
            {loading ? (
                            <Spinner/>
                        ) : (
                         <div className="category-cards" >
                                {jobs.map((item) => (
                            <div key={item.id} className="card" data-aos="zoom-in">
                                        <p>{item.category}</p>
                                <div className="jobtitle">
                                    <h4 className="dtaes">Posted On: {new Date(item.date_posted).toDateString()}</h4>
                                    <h3>{item.job_title}</h3>
                                </div>
                                <div className="estimates">Estimated Budget: <span>KES. {item.budget}</span></div>
                            </div>
                            ))
                        }</div>
                        )} 
        </div>
    </div>
  )}