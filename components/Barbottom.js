import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Barbottom() {
    return (
        <div className="barmain">
        <section className='barbottom'>
            <div className="bottombar">
                <h4>Download App</h4>
                <p>Download Mr. Kim App for an unlimited number of Job Opportunities</p>
                <div>
                    <Image src="/assets/images/google-store.png" width={183} height={54} alt="Plus" priority className="storeicons" />
                    <Image src="/assets/images/apple-store.png" width={183} height={54} alt="Plus" priority className="storeicons" />
               </div>
            </div>
            </section>
            </div>
  )
}
