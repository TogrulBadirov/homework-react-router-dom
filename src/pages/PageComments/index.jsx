import React from 'react'

const PageComments = () => {
  return (
    <div>
      <h3>
        Page with comments
      </h3>
      <p style={{maxWidth:"500px"}}>Repository-hosted Themes are required to support display of comments on static Pages as well as on single blog Posts.  This static Page has comments, and these comments should be displayed.
If the Theme includes a custom option to prevent static Pages from displaying comments, such option must be disabled (i.e. so that static Pages display comments) by default.
Also, verify that this Page does not display taxonomy information (e.g. categories or tags) or time-stamp information (Page publish date/time).</p>
    </div>
  )
}

export default PageComments