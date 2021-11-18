import React from "react";
// @ts-ignore
import ReadMoreReact from "read-more-react";
interface PrivacyPolicyData {
  privacyPolicyData: { text: string; title: string };
}

const Footerup = (props: PrivacyPolicyData) => {
  return (
    <div id="footer-top-area" className="fix home-3">
      <div className="container">
        <div className="row">
          <div className="text-center col-12">
            <div className="footer-social">
              <a href="https://www.facebook.com/rainmedia.live">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://twitter.com/rainmedialive">
                <i className="fa fa-twitter" />
              </a>
              <a href="http://linkedin.com/in/rainmedialive">
                <i className="fa fa-linkedin" />
              </a>
              <a href=" http://skype.com/rainmedia.live">
                <i className="fa fa-skype" />
              </a>
            </div>
            <div className="footer-text">
              <h2>{props.privacyPolicyData.title}</h2>
              <ReadMoreReact
                text={props.privacyPolicyData.text}
                min={200}
                ideal={200}
                max={300}
                readMoreText={"Read More..."}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerup;
