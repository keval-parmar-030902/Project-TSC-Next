"use server";
import React from "react";
import Style from "./form.module.css";
import Button from "../Button";
import Link from "next/link";
import PhoneNumberField from "../(auth)phone";

interface Props { }

const Form = (props: Props) => {
  
  return (
    <>
      <form action="#" className={Style.form}>
        <div className={Style.formsection}>
          <div className={Style.inputs}>
            <input
              type="text"
              id="firstname"
              required
              placeholder="First Name"
              pattern="^[a-zA-Z]{2,}$"
            />
          </div>
          <div className={Style.inputs}>
            <input
              type="text"
              id="lastname"
              required
              placeholder="Last Name"
              pattern="^[a-zA-Z]{3,}$"
            />
          </div>
          <div className={Style.inputs}>
            <input
              type="text"
              id="city"
              required
              placeholder="City"
              pattern="[A-Za-z]+"
            />
          </div>
          <div className={Style.inputs}>
            <input
              type="text"
              id="postal"
              required
              placeholder="Postal Code"
              pattern="\d{6}"
            />
          </div>
        </div>
        <div>
          <input
            id="address"
            className={Style.textarea}
            placeholder="Address"
            maxLength={100}
          />
        </div>
        <div className={Style.formsection}>
          <div className={Style.inputs}>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              pattern="/^[^ ]+@[^ ]+\.[a-z]{2,3}$"
            />
          </div>
          <div className={Style.inputs}>
            <input
              type="tel"
              id="phone"
              required
              placeholder="Phone.NO"
              pattern="^[1-9]\d{9,}$"
            />
            {/* <PhoneNumberField/> */}
          </div>
          <div className={Style.inputs}>
            <input
              type="password"
              id="password"
              required
              placeholder="Password"
              pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            />
          </div>
        </div>
        <div className={Style.text}>
          Use this email to log in to your{" "}
          <Link className={Style.link} href="/">
            resumedone.io
          </Link>{" "}
          account and receive notifications.
        </div>
        <div>
          <Button />
        </div>
        <div>
          <input type="checkbox" />
          <span> Show my profile to serious employers on </span>
          <Link className={Style.link} href="/">
            hirethebest.io
          </Link>{" "}
          for free
        </div>
      </form>
    </>
  );
};

export default Form;
