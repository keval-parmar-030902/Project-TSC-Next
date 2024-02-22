import React from "react";
import Style from './page.module.css'
import Form from "@/components/Form";
import Buddy from "@/components/Buddy";

interface Props {}
import Banner from "@/components/Banner"
import SidePanel from "@/components/SidePanel";
interface Props { }
import Footer from "@/components/footer"
interface Props { }

const Contectus = (props: Props) => {
  return (
    <>

      {/* <SidePanel /> */}
      <Banner />
      <div className={Style.contactus}>


        <div className={Style.heading}>
          <h1>Personal Information</h1>
        </div>
        <div className={Style.formsection}>
            <Form/>
            <Buddy/>
        </div>
      </div>
      <Footer/>
    </>

  );
};

export default Contectus;
