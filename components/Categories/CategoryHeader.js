import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query, limit, getDocs, getFirestore } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Spinner from "../Spinner";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    // 
    useEffect(() => {
        const fetchData = async () => {
            const collectionRef = collection(db, "categories");
            const queryLimit = 8;
            const limitQuery = query(collectionRef, limit(queryLimit));

            try {
                const querySnapshot = await getDocs(limitQuery);
                const fetchData = [];
                querySnapshot.forEach((doc) => {
                    fetchData.push({ id: doc.id, ...doc.data() });
        
                });
                setCategories(fetchData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])
  
    return (
        <div>
            <div className="category-section">
                <div className="category-content">
                    <div className="category-left">
                        <h1>Browse Jobs By Categories</h1>
                        <p>See All</p>
                    </div>
                    <div className="category-below">
                        <p>Looking for Open Job Opportunities? <span>Find Jobs </span></p>
                    </div>
                   
                    {loading ? (
                            <Spinner/>
                        ) : (
                         <div className="category-cards" data-aos="zoom-in">
                                {categories.map((category) => (
                            <div key={category.id} className="card">
                                {category.category_name}
                            </div>
                            ))
                        }</div>
                        )} 

                </div>
            </div>
        </div>
    )
}

export default Categories;