import React from 'react'
import Image from 'next/image';

export default function Howto() {
    return (
      <section className="howimagetwo">
        <div className="howimage">
                <div className="boxone">
                    <Image src="/assets/images/SVG/register.svg" width={80} height={80}  alt="mr. kim logo" className="imageboxone" priority/><p>Register</p></div>
                <div className="boxone">
                     <Image src="/assets/images/SVG/browse.svg" width={80} height={80}  alt="mr. kim logo" className="imageboxone" priority/><p>Browse/Post Jobs</p></div>
                <div className="boxone">
                     <Image src="/assets/images/SVG/premium.svg" width={80} height={80}  alt="mr. kim logo" className="imageboxone" priority/><p>Go Premium</p></div>
        </div>
      </section>
  )
}


