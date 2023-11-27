import React from "react";

const DisabledComments = () => {
  return (
    <div>
      <h3>Page with comments disabled</h3>
      <p style={{ maxWidth: "500px" }}>
      This static Page is set not to allow comments. Verify that the Page does not display a comment list, comment reply links, or comment reply form.
Also, verify that the Page does not display a “comments are closed” type message. Such messages are not suitable for static Pages, and should only be used on blog Posts.
      </p>
    </div>
  );
};

export default DisabledComments;
