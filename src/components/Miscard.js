import React, { Component } from "react";
//import "react-tippy/dist/tippy.css";
import Message from "./Message";

function Miscard({ item, key }) {
  return (
    <div id={key} className="mistake-card">
      <div className="text-wrapper">
        <h2 id="mistake">{item.shortMessage}</h2>
      </div>
      <div className="icon-wrapper">
        <Message repls={item.replacements} fullMessage={item.message} />
      </div>
    </div>
  );
}

export default Miscard;
