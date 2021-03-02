//import "react-tippy/dist/tippy.css";
import React, { useState, useEffect, Component } from "react";
import { Button, UncontrolledTooltip, Tooltip } from "reactstrap";

const TooltipItem = ({ repls, id, fullMessage }) => {
  //const { item, id } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const sliced = repls.slice(0, 2);

  return (
    <span>
      <button id="myButton" class="opencard" id={"Tooltip-" + id}>
        <i class="fas fa-align-justify"></i>
      </button>
      <Tooltip
        className="tooltip"
        class="fas fa-align-justify"
        placement="top"
        isOpen={tooltipOpen}
        target={"Tooltip-" + id}
        toggle={toggle}
      >
        <div className="tooltipmsg">
          <h1 id="h1msg">Πιθανό λάθος</h1>
          <p id="pmsg">{fullMessage}</p>
          {/*
              ----------TODO----------
              prepei na pernaw gia kathe lathos ta 3 replacements tou kai na ta
              kanw map  gia na emfanisw ta antistoixa button
          
          */}
          {sliced.map((repl) => (
            <button class="rightWords">{repl.value}</button>
          ))}
        </div>
      </Tooltip>
    </span>
  );
};

const Message = ({ repls, fullMessage }) => {
  let rand = Math.floor(Math.random() * Math.floor(100000));
  return (
    <>
      {[
        {
          placement: "top",
        },
      ].map((tooltip, i) => {
        return (
          <TooltipItem
            key={i}
            item={tooltip}
            id={rand}
            repls={repls}
            fullMessage={fullMessage}
          />
        );
      })}
    </>
  );
};

export default Message;
