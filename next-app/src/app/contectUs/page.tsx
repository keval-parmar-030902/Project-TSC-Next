import React from "react";
import Style from './page.module.css'
import Form from "@/components/Form";

interface Props {}

const Contectus = (props: Props) => {
  return (
    <>
        <div className={Style.contactus}>
        <div className={Style.heading}> 
          <h1>Personal Information</h1>
        </div>
        <div className="formSection">
            <Form/>
        </div>
      </div>
    </>
      
  );
};

export default Contectus;
