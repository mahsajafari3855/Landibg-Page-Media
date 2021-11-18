import React from "react";

const SupportInfo = () => {
  return (
    <div className="support-info text-center">
      <div className="sin-info tel">
        <div className="icon">
          <i className=" fa fa-headphones" />
        </div>
        <h3>telephones:</h3>
        <p>(+800) 123 456 789</p>
      </div>
      <div className="sin-info email">
        <div className="icon">
          <i className="fa fa-envelope" />
        </div>
        <h3>Address email:</h3>
        <p>support@rainmedia.live</p>
      </div>
    </div>
  );
};

export default SupportInfo;
