// components/NumberInput.js
"use client";
import React from 'react'
import { useState } from 'react';

const Email = () => {
    const [emailValue, setEmailValue] = useState("");

    const handleEmail = (event: { target: { value: any; }; }) => {
      const inputValue = event.target.value;
      const emailRegex =/^[a-zA-Z]*@[a-zA-Z_]*\.[a-zA-Z]{0,}$/;
  
      if (inputValue === "" || emailRegex.test(inputValue)) {
        setEmailValue(inputValue);
      }
    };

  return (
    <input
      type="email"
      id='email'
      value={emailValue}
      onChange={handleEmail}
      placeholder="Email"
      required
    />
  );
};

export default Email;
