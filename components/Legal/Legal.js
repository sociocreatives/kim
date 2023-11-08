
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import BiddingService from "./BiddingService";
import RequestingService from "./RequestingService";
import MobileApp from "./MobileApp";
import Tuktuk from "./TukTuk";
import TCRequestingServices from "./TCRequestingServices";
import ProjectRequestor from "./ProjectRequestor";
import PrivacyPolicy from "./PrivacyPolicy";
import MobileEndUser from "./MobileEndUser";


export default function LegalComponent() { 
   const [toggle, setToggles] = useState(1);

  function updateToggler(id) {
    setToggles(id);
  }

    
  return (
      <div>
          <div className="lawimage">
              
          </div>
            <div className="category-section">
                <div className="category-content" data-aos="fade-up">
                    <div className="category-left">
                      <h1>Our Legal Terms</h1>
                    </div>
                    <div className="category-below">
                        <p>Effective: January, 2023</p>
                    </div>
                </div>
          </div>
          <div className="premiumsides" data-aos="fade-up">
            <div className="premium-tabs">
              <div className="tabset" onClick={() => updateToggler(1)} >Terms and Conditions for Bidding for A Service Job</div>
              <div className="tabset" onClick={() => updateToggler(2)}>Terms and conditions for Requesting for Services.</div>
              <div className="tabset" onClick={() => updateToggler(3)}>Mobile App and Website Disclaimer</div>
              <div className="tabset" onClick={() => updateToggler(4)}>Tuk Tuk Warranty Membership Contract Agreement</div>
              <div className="tabset" onClick={() => updateToggler(5)}>Mr.KIM Terms and Conditions for Requesting Services</div>
              <div className="tabset" onClick={() => updateToggler(6)}>Project Requestor/Customer Agreement</div>
              <div className="tabset" onClick={() => updateToggler(7)}>Mr.Kim Privacy Policy </div>
              <div className="tabset" onClick={() => updateToggler(8)}>Mobile Application End User License Agreement </div>
  
            </div>
        
            <div className="premium-content">
              <div className={toggle === 1 ? "show-content" : "tabscontentspremium"}> <BiddingService /></div>
              <div className={toggle === 2 ? "show-content" : "tabscontentspremium"}> <RequestingService /></div>
              <div className={toggle === 3 ? "show-content" : "tabscontentspremium"}> <MobileApp /></div>
              <div className={toggle === 4 ? "show-content" : "tabscontentspremium"}> <Tuktuk/></div>
              <div className={toggle === 5 ? "show-content" : "tabscontentspremium"}> <TCRequestingServices/></div>
              <div className={toggle === 6 ? "show-content" : "tabscontentspremium"}> <ProjectRequestor /></div>
              <div className={toggle === 7 ? "show-content" : "tabscontentspremium"}> <PrivacyPolicy /></div>
              <div className={toggle === 8 ? "show-content" : "tabscontentspremium"}> <MobileEndUser /></div>

            </div>
          </div>
        
        </div>
    )

}
