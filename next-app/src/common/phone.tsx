// components/NumberInput.js
"use client";
import React from 'react'
import { useState } from 'react';

const Password = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;
    const regex = /^[1-9][0-9]{0,9}$/; 

    if (inputValue === '' || regex.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <input
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder="Phone"
      required
    />
  );
};

export default Password;
