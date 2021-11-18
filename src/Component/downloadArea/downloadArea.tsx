import React from "react";
import ButtonContainer from "../Ui/Button/ButtonContainer";
import SectionTitle from "../SectionTitle";

const DownloadArea = () => {
  return (
    <div id="download-area" className="fix home-2">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-auto col-12">
            <SectionTitle
              title="GET IT NOW"
              description="Claritas est etiam processus dynamicus, qui sequitur mutationem"
              class="title-style-2 title-line-3"
            />
          </div>
          <div className="download-container col-md-auto col-12">
            <ButtonContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadArea;
