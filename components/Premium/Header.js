
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import TukTuk from "./TukTuk";
import Tenants from "./Tenants";
import BodaBoda from "./BodaBoda";
import Landlord from "./Landlord";
import HomeWarranty from "./Home";
import Barbottom from "../Barbottom";
import Healthcare from "./Healthcare";
import Automobile from "./Automobile";
import Government from "./Government";
import Commercial from "./Commercial";


export default function PremiumCollection() { 
   const [toggle, setToggles] = useState(1);

  function updateToggler(id) {
    setToggles(id);
  }

    
  return (
      <div>
          <div className="premiumimage">
              
          </div>
            <div className="category-section">
                <div className="category-content" data-aos="fade-up">
                    <div className="category-left">
                      <h1>Our Premum Services</h1>
                    </div>
                    <div className="category-below">
                        <p>Looking for Open Job Opportunities? <span><Link href="/jobs">Find Jobs </Link></span></p>
                    </div>
                </div>
          </div>
          <div className="premiumsides" data-aos="fade-up">
            <div className="premium-tabs">
              <div className="tabset" onClick={()=>updateToggler(1)}><Image src="/assets/images/tuktuk.png" width={30} height={30} alt="Plus" priority className="imageplus" />TukTuk Warranty Protection Plan</div>
              <div className="tabset" onClick={()=>updateToggler(2)}><Image src="/assets/images/motorcycle.png" width={30} height={30} alt="Plus" priority className="imageplus" />BodaBoda Warranty Protection Plan</div>
              <div className="tabset" onClick={()=>updateToggler(3)}><Image src="/assets/images/house.png" width={30} height={30} alt="Plus" priority className="imageplus" />Home Warranty Protection Plan</div>
              <div className="tabset" onClick={() => updateToggler(4)}><Image src="/assets/images/apartment.png" width={30} height={30} alt="Plus" priority className="imageplus" />Tenant Warranty Protection Plan </div>
              <div className="tabset" onClick={() => updateToggler(5)}><Image src="/assets/images/building.png" width={30} height={30} alt="Plus" priority className="imageplus" />Landlord Warranty Protection Plan  </div>
              <div className="tabset" onClick={() => updateToggler(6)}><Image src="/assets/images/health.png" width={30} height={30} alt="Plus" priority className="imageplus" />Healthcare Property Warranty Protection Plan</div>
              <div className="tabset" onClick={() => updateToggler(7)}><Image src="/assets/images/car.png" width={30} height={30} alt="Plus" priority className="imageplus" />Automobile Warranty Protection Plan </div>
              <div className="tabset" onClick={() => updateToggler(8)}><Image src="/assets/images/government.png" width={30} height={30} alt="Plus" priority className="imageplus" />Government Agency’s Property Warranty Protection Plan </div>
              <div className="tabset" onClick={()=>updateToggler(9)}><Image src="/assets/images/building-two.png" width={30} height={30} alt="Plus" priority className="imageplus" />Commercial Property Warranty Protection Plan </div>
            </div>
        
            <div className="premium-content">
              <div className={toggle === 1 ? "show-content" : "tabscontentspremium"}> <TukTuk /></div>
              <div className={toggle === 2 ? "show-content" : "tabscontentspremium"}> <BodaBoda /></div>
              <div className={toggle === 3 ? "show-content" : "tabscontentspremium"}> <HomeWarranty /></div>
              <div className={toggle === 4 ? "show-content" : "tabscontentspremium"}> <Tenants /></div>
              <div className={toggle === 5 ? "show-content" : "tabscontentspremium"}> <Landlord/></div>
              <div className={toggle === 6 ? "show-content" : "tabscontentspremium"}> <Healthcare /></div>
              <div className={toggle === 7 ? "show-content" : "tabscontentspremium"}> <Automobile /></div>
              <div className={toggle === 8 ? "show-content" : "tabscontentspremium"}> <Government /></div>
              <div className={toggle === 9 ? "show-content" : "tabscontentspremium"}> <Commercial/></div>
              
            </div>
          </div>
        
        </div>
    )

}
