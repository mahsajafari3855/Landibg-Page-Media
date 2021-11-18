import React from "react";
import SectionTitle from "../SectionTitle";
import SupportInfo from "./SupportInfo";
import SupportForm from "./Support-form";
interface Support {
  supportAreaData: { title: string; description: string };
}

const SupportArea = (props: Support) => {
  return (
    <div id="support-area" className="fix home-2">
      <div className="container">
        <div className="row">
          <SectionTitle
            title={props.supportAreaData.title}
            description={props.supportAreaData.description}
            class="title-style-2 title-line-2"
          />
          <div className="col-12">
            <div className="support-container">
              <div className="row">
                <div className="support-form col-md-7 col-12 ml-auto">
                  <SupportForm />
                </div>
                <div className="col-md-3 col-12 mr-auto">
                  <SupportInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportArea;
