import React from "react";

import Popover from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Formatter from "../../../../../Classes/Formatter/Formatter";

const formatter = new Formatter();

const openWikiTab = (pageId) => {
  window.open(`http://en.wikipedia.org/?curid=${pageId}`);
};

const WikipediaSearchResultPopUp = (props) => {
  //const [anchorEl, setAnchorEl] = React.useState(null);
  console.log(props.anchorEl);
  const dataFromWikiPedia = props.dataFromWikiPedia;

  return (
    <Popover style={{ width: "80%", height: "60%" }}>
      <Typography sx={{ p: 2 }}>Click one of the items to redirect to the selected Wikipedia page.</Typography>
      <div key={0}>
        {dataFromWikiPedia
          ? dataFromWikiPedia.map((a) => (
              <div key={a.pageid} className="WikiListItem" onClick={() => openWikiTab(a.pageid)}>
                <h5>{a.title}</h5>
                <p>{formatter.textExporter(a.snippet)}</p>
              </div>
            ))
          : ""}
      </div>
    </Popover>
  );
};

export default WikipediaSearchResultPopUp;
