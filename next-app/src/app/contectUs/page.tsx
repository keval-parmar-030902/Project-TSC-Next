import React from "react";
import Style from "./page.module.css";
import Form from "@/components/Form";
import Buddy from "@/components/Buddy";

interface Props {}
import Banner from "@/components/Banner";
import SidePanel from "@/components/SidePanel";
interface Props {}
import Footer from "@/components/footer";
import HamburgerMenu from "@/common/hamburger";

interface Props {}

const Contectus = (props: Props) => {
  return (
    <>
      <HamburgerMenu />
      <div className={Style.toggle}>
        <div className={Style.main}>
          <div className={Style.side}>
            <SidePanel />
          </div>
          <div>
            <Banner />
            <div className={Style.contactus}>
              <div className={Style.heading}>
                <h1>Personal Information</h1>
              </div>
              <div className={Style.formsection}>
                <Form />
                <Buddy />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contectus;
