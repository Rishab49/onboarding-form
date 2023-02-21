import { useState } from "react";

const OutlinedInput = ({ type,name, placeholder, regex,onInvalid }) => {
  return (
    <input
      type={type? type : 'text'}
      className=" h-[45px] w-full p-2 border bg-transparent rounded-md text-black"
      name={name}
      placeholder={placeholder}
      pattern={regex}
      onInvalid={onInvalid}
      onInput={e => e.target.setCustomValidity("")}
      required
    ></input>
  );
};

export default OutlinedInput;
