import React from "react";
interface Section {
  title: string;
  description: string;
  class: string;
}

const SectionTitle = (props: Section) => {
  return (
    <div className="col-12">
      <div className={props.class}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
