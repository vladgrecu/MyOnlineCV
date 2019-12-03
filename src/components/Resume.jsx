import React from "react";
import { sections } from "../assets/helpers/sections";
import Accordion from "./Resume/Accordion";

export default function Resume() {
  return (
    <div className="card text-center w-75 mx-auto mt-4 p-4">
      {sections.map((section, i) => (
        <Accordion options={section} key={i} />
      ))}
    </div>
  );
}
