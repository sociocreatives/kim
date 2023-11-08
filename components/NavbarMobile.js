import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from "next/link";
import { UserAuth } from '@/context/AuthContext';

const NavbarMobile = () => {
    const { user, googleSignIn, logOut } = UserAuth()
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true)
    
      const handleSignIn = async () => { 
        try {
            await googleSignIn();
            redirect('/profile')
        }catch(err) {
            console.log(err)
        }
    }

    const handleSignOut = async () => { 
        try {
            await logOut();
            router.push('/');
        }catch(err) {
            console.log(err)
        }
    }
    

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
      <div>
        <div className="user-icon" onClick={toggleDropdown}>
        <Image src="/assets/images/menu.svg" width={30} height={30} alt="mobile menu" className="menusa"/>
        </div>
        {isOpen && (
          <div className="navbar-mobile">
                   {loading ? null : !user ? (
                        <div className="unloged">
                        <Link href="/" data-aos="fade-in" onClick={toggleDropdown}>Home</Link>
                        <Link href="/jobs" data-aos="fade-in" onClick={toggleDropdown}>Jobs</Link>
                        <Link href="/talent" data-aos="fade-in" onClick={toggleDropdown}>Talent</Link>
                          <Link href="/premium" data-aos="fade-in" onClick={toggleDropdown}>Premium</Link>
                    
                        <a onClick={handleSignIn} className="login" data-aos="fade-in">Login</a> 
                      <a onClick={handleSignIn}>Sign Up</a>
                      <div className='menubut'><Link href="/request">Make Request <Image src="/assets/images/plus2.svg" width={10} height={10} alt="Plus" priority className="imageplus" /></Link></div>
                        </div>
                    ) : (
                            <div className="unloged">
                                <Link href="/jobs" data-aos="fade-in" onClick={toggleDropdown}>Jobs</Link>
                          <Link href="/talent" data-aos="fade-in" onClick={toggleDropdown}>Talent</Link>
                          <Link href="/categories" data-aos="fade-in" onClick={toggleDropdown}>Profile</Link>
                          <Link href="/categories" data-aos="fade-in" onClick={toggleDropdown}>Messages</Link>
                          <Link href="/categories" data-aos="fade-in" onClick={toggleDropdown}>Notifications</Link>
                              <Link href="/categories" onClick={handleSignOut}>Logout</Link>
                           <div>
                              <p>You Are Logged In as <span>{user.displayName}</span></p> 
                              <div className='menubut'><Link href="/request">Make Request <Image src="/assets/images/plus2.svg" width={10} height={10} alt="Plus" priority className="imageplus" /></Link></div>
                    </div>
                      </div>
                   
                            
                    ) }
                </div>
                )}
      
    </div>
  )
}

export default NavbarMobile
