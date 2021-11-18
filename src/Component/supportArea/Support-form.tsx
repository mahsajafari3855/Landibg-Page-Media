import React from "react";

const SupportForm = () => {
  return (
    <>
      <form method="post" id="support-form">
        <div className="input-box">
          <input type="text" name="name" placeholder="Your Name" />
        </div>
        <div className="input-box">
          <input type="email" name="email" placeholder="Your Email" />
        </div>
        <div className="input-box">
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={8}
            placeholder="Your Message"
            defaultValue={""}
          />
        </div>
        <div className="input-box">
          <input className="submit" type="submit" defaultValue="SEND" />
        </div>
      </form>
    </>
  );
};

export default SupportForm;
