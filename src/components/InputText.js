import React, { useState } from "react";
import Essays from "./Essays";

const InputText = ({ InputText, setInputText, getMistakes }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  

  function openAddNewEssayModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };


  return (
    <div className="content">
      <h1>Έλεγχος Κειμένου</h1>
      <div className="text-box-check">
        <form>
          <textarea
            name="text"
            placeholder="Γράψε εδώ..."
            id="textarea-box"
            onChange={inputTextHandler}
          ></textarea>
          <div className="footer">
            <input
              type="submit"
              onClick={getMistakes}
              value="Έλεγχος"
              id="check-text-btn"
            />
          </div>
        </form>
      </div>
      <div className="svgbox" styles="overflow: hidden;">
        <div id="top-svg"></div>
      </div>
    </div>
  );
};

export default InputText;
