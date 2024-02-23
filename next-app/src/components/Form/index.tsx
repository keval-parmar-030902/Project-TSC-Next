import React from "react";
import Style from "./form.module.css";
import Button from "../Button";
import Link from "next/link";

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
              pattern="[A-Za-z]+"
            />
          </div>
          <div className={Style.inputs}>
            <input
              type="text"
              id="lastname"
              required
              placeholder="Last Name"
              pattern="[A-Za-z]+"
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

          />
        </div>
        <div className={Style.formsection}>
          <div className={Style.inputs}>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              pattern="^\w+([\.\-_]?\w+)*@\w+\.\w+(\.?\w+)*$"
            />
          </div>
          <div className={Style.inputs}>
            <input
              type="tel"
              id="phone"
              required
              placeholder="Phone.NO"
              pattern="\d{10}"
            />
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
          <Link className={Style.link} href="/" alt="">
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
          <Link className={Style.link} href="/" alt="">
            hirethebest.io
          </Link>{" "}
          for free
        </div>
      </form>
    </>
  );
};

export default Form;
