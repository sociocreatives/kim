import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { UserAuth } from "@/context/AuthContext";
import Link from "next/link";

const UserDropdown = () => {
    const {user} = UserAuth()
    const [isOpen, setIsOpen] = useState(false);
    const [ loading, setLoading ] = useState(true)
    

    // console.log(user)
    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-dropdown">
      <div className="user-icon" onClick={toggleDropdown}>
        <Image src="/assets/images/menu.svg" width={30} height={30} alt="mobile menu" className="menusa"/>
      </div>
      {isOpen && (
            <div className="dropdown-content">
                <div className="dropdown-arrow-one">
                    <Link href="/" passHref>
                        <Image src={user.photoURL} alt="user" width={80} height={80} className="user"/>
                    </Link>
                      <Link href="" >{user.displayName}</Link></div>
                  <div className="dropdown-arrow">
                    <Link href="/profile" data-aos="fade-in" onClick={toggleDropdown}>Profile</Link>
                    <Link href="" data-aos="fade-in" onClick={toggleDropdown}>Messages</Link>
                    <Link href="" data-aos="fade-in" onClick={toggleDropdown}>Jobs</Link>
                    <Link href="/premium" data-aos="fade-in" onClick={toggleDropdown}>Premium</Link>
                </div>
            </div>
      )}
    </div>
  );
};

export default UserDropdown;
