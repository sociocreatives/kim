import Link from "next/link";
import Image from 'next/image'
import Barbottom from "./Barbottom";
const today = new Date();
  const year = today.getFullYear();

export default function Footer() {
    return (
        <>
             <Barbottom/>
         <div className="footer-header">
            <div className="footer-header-content">
                <div className="footer-header-description">
                
                </div>
                <div className="footer-header-logo">
                </div>
                <div className="footer-header-icon">
                </div>
            </div>
        </div>
        <section className="main-footer">
            <div className="footer">
                <p><small>Copyright © {year} Mr. Kim</small></p>
                <div className="manure">
                    <Link href="/about">About</Link>
                    <div className="lines">|</div>
                    <Link href="/legal">Legal</Link>
                    <div className="lines">|</div>
                    <Link href="/faq">FAQs</Link>
                    <div className="lines">|</div>
                    <Link href="/contacts">Contacts</Link>
                </div>
                <div className="socials">
                    <Image src="/assets/images/facebook.svg" width={30} height={30} alt="facebook" className="facebook" priority/>
                    <Image src="/assets/images/linkedin.svg" width={30} height={30} alt="linkedin" className="linkedin" priority/>
                    <Image src="/assets/images/instagram.svg" width={30} height={30} alt="instagram" className="instagram" priority/>
                </div>
            </div>
        </section>
        </>
    )
}