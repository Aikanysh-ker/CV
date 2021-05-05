import React from "react";
import { education } from "../../data";

function Education() {
  return (
    <>
      <h1>Education</h1>
      {education.map((edu) => {
        return (
          <>
            <h2>{edu.place}</h2>
            <p>{edu.major}</p>
            <p>{edu.year}</p>
          </>
        );
      })}
    </>
  );
}
export default Education;
