import React from "react";
import { sections } from "../assets/helpers/sections";
import Accordion from "./Resume/Accordion";
import Skillbar from "react-skills-bars";
import { skills } from "../assets/helpers/skills";

export default function Resume() {
  return (
    <div className="card text-center w-75 mx-auto mt-4 p-4">
      <h1 className="text-center mb-5 mx-auto border-bottom w-50 p-3">
        Resume
      </h1>
      {sections.map((section, i) => (
        <Accordion options={section} key={i} />
      ))}
      <h1 className="text-center mt-5 mb-5 mx-auto border-bottom w-50 p-3">
        Skills
      </h1>
      <div className="w-75 mx-auto">
        <Skillbar skills={skills} className="w-75 mx-auto" />
      </div>
    </div>
  );
}
