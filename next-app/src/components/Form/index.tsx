/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Style from "./form.module.css";
// import Button from "../Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter }  from "next/navigation";
import React from "react";
import Email from "@/common/email";
import Password from "@/common/phone";
import Postal from "@/common/postal";

const index = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const router = useRouter();
  const handleSignUp = () => {
    setIsSignedUp(true);
    
    router.push("/");
  };

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
              pattern="[A-Za-z]{2,}"
            />
          </div>
          <div className={Style.inputs}>
            <input
              type="text"
              id="lastname"
              required
              placeholder="Last Name"
              pattern="[A-Za-z]{3,}"
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
            {/* <input
              type="text"
              id="postal"
              required
              placeholder="Postal Code"
              pattern="\d{6,}"
            /> */}
            <Postal />
          </div>
        </div>
        <div>
          <input
            id="address"
            className={Style.textarea}
            placeholder="Address"
          />
        </div>
        <div className={Style.formsection}>
          {/* <div className={Style.inputs}>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              pattern="^\w+([\.\-_]?\w+)*@\w+\.\w+(\.?\w+)*$"
            />
          </div> */}
          <div className={Style.inputs}>
            {/* <input
              type="email"
              id="email"
              value={emailValue}
              onChange={handleEmail}
              placeholder="Email "
            /> */}
            <Email />
          </div>
          {/* <div className={Style.inputs}>
            <input
              type="tel"
              id="phone"
              required
              placeholder="Phone.NO"
              pattern="\d{10}"
            />
          </div> */}
          <div className={Style.inputs}>
            {/* <input
              type="tel"
              id="phone"
              value={value}
              onChange={handleChange}
              placeholder="phone"
            /> */}
            <Password />
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
          {isSignedUp ? (
            <div>Sign up successful! Redirecting to homepage...</div>
          ) : (
            <button onClick={handleSignUp} className={Style.button}>Save</button>
          )}
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

export default index;
