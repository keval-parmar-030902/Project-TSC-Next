// components/NumberInput.js
"use client";
import React from 'react'
import { useState } from 'react';

const Postal = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;
    const regex = /^[1-9][0-9]{0,5}$/; 

    if (inputValue === '' || regex.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Postal"
    />
  );
};

export default Postal;
