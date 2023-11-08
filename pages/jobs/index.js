import AllJobs from "@/components/Jobs/AllJobs";
import Image from 'next/image'
import { UserAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Jobs() {
    return (
        <section className="premium">
            <div className="job-content">
                <div className="job-left">
                    <div className="job-search">
                         <Image src="/assets/images/search.svg" width={20} height={20} alt="Plus" priority className="imageplus"/>
                        <input type="text" placeholder="Search for Jobs" />
                        <button>Search</button>
                    </div>
                    
                    <AllJobs/>
                </div>
                <div className="jobs-right">
                    <div className="jobs-right-content-header">
                    <Link href="/" passHref>
                       
                    </Link>
              
                        <p>Update Profile</p>
                    </div>
                    
                </div>
            </div>
             

        </section>
    )
    }