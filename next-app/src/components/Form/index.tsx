import React from "react";
import Style from "./form.module.css";
import Button from "../Button";
import Link from "next/link";
import { BiCheckbox } from "react-icons/bi";


interface Props { }



const Form = (props: Props) => {
  return (
    <>
      <form action="#" className={Style.form} >
        <div className={Style.formsection}>
          <div className={Style.inputs}>
            {/* <label htmlFor="name">Full Name:</label><br /> */}
            <input type="text" id="firstname" required placeholder="First Name" />
          </div>
          <div className={Style.inputs}>
            {/* <label htmlFor="name">Full Name:</label><br /> */}
            <input type="text" id="lastname" required placeholder="Last Name" />
          </div>
          <div className={Style.inputs}>
            {/* <label htmlFor="name">Full Name:</label><br /> */}
            <input type="text" id="city" required placeholder="City" />
          </div>
          <div className={Style.inputs}>
            {/* <label htmlFor="phone">Phone.No:</label><br /> */}
            <input type="number" id="postal" required placeholder="Postal Code" />
          </div>
        </div>
        <div>
          {/* <label htmlFor="password">Password:</label><br /> */}
          <input
            id="address"
            className={Style.textarea}
            placeholder="Address"
          />
        </div>
        <div className={Style.formsection}>
          <div className={Style.inputs}>
            {/* <label htmlFor="email">Email:</label><br /> */}
            <input type="email" id="email" required placeholder="Email" />
          </div>
          <div className={Style.inputs}>
            {/* <label htmlFor="phone">Phone.No:</label><br /> */}
            <input type="number" id="phone" required placeholder="Phone.NO" />
          </div>
          <div className={Style.inputs}>
            {/* <label htmlFor="password">Password:</label><br /> */}
            <input
              type="password"
              id="password"
              required
              placeholder="Password"
            />
          </div>

        </div>
        <div className={Style.text}>
          Use this email to log in to your
          <Link className={Style.link} href="/" alt=""> resumedone.io </Link>
          account and receive notifications.
        </div>
        <div>
          <Button />
        </div>
        <div>
          <input type="checkbox" />
          <span>   Show my profile to serious employers on</span>
          <Link className={Style.link} href="/" alt=""> hirethebest.io </Link>
          for free
        </div>
      </form>
    </>
  );
};

export default Form;





