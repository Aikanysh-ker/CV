import React from "react";

function Form() {
  return (
    <>
      <form className="form">
        <input type="text" placeholder="Full Name"></input>
        <input type="email" placeholder="Email"></input>
        <textarea placeholder="Message for me" rows="5"></textarea>
      </form>
    </>
  );
}

export default Form;
