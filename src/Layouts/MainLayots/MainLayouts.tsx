import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
interface PrivacyPolicyData {
  privacyPolicyData: { text: string; title: string };
  children: React.ReactNode;
}

const MainLayouts = (props: PrivacyPolicyData) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer privacyPolicyData={props.privacyPolicyData} />
    </div>
  );
};

export default MainLayouts;
