import React from "react";
import { experience } from "../../data";

function Experience() {
  return (
    <>
      <h1>Work Experience</h1>

      {experience.map((exp) => {
        return (
          <>
            <section>
              <h2>{exp.position}</h2>
              <p>{exp.organization}</p>
              <p>{exp.year}</p>
              <p>{exp.responsibilities}</p>
            </section>
          </>
        );
      })}
    </>
  );
}
export default Experience;
