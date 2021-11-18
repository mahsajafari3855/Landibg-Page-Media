import React from "react";
import Footerup from "./Footerup";
interface PrivacyPolicyData {
  privacyPolicyData: { text: string; title: string };
}

const Footer = (props: PrivacyPolicyData) => {
  return (
    <div>
      <Footerup privacyPolicyData={props.privacyPolicyData} />
    </div>
  );
};

export default Footer;
