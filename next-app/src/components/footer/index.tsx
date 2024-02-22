import React from "react";
import Styles from "./footer.module.css";
import Link from "next/link";
interface Props { }

const Footer = (props: Props) => {
  return (
    <div className={Styles.section}>
      <div className={Styles.div}>
        <h1 className={Styles.h1}>Delete Account</h1>
        <p>
          If you delete your account you'll be permanently removing it from our
          systems-you can't undo it.{" "}
        </p>
        <p className={Styles.p}>Yes,Delete my account </p>
      </div>
      <div className={Styles.div1}>
        <Link className={Styles.link} href="/shopPage" alt=" ">
          Get in touch with our support team{" "}
        </Link>

        if you have any question or want to leave some feedback.


        <p>We'll be happy to hear from you.</p>
      </div>
      <hr></hr>
      <div className={Styles.div2}>
        <div className={Styles.div3}>Terms & Conditions</div>
        <div className={Styles.div3}>Privacy Policy</div>
        <div className={Styles.div3}>FAQ</div>
        <div className={Styles.div3}>ContactUs</div>
      </div>
    </div>
  );
};

export default Footer;
