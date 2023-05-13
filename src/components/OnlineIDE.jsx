import React from "react";
import "./ide.css";
const OnlineIDE = () => {
  return (
    <div className="idedesktop">
      <div className="ide-navbar"></div>
      <div className="ide-breadcrumbs"></div>
      <div className="ide-editorNavbar"></div>
      <div className="ide-editor">
        <div className="ide-sidebar"></div>
        <div className="ide-editors"></div>
      </div>
    </div>
  );
};

export default OnlineIDE;
