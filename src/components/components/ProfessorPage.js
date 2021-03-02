import React, { useState, useEffect } from "react";
import Essays from "./Essays";
import InputText from "./InputText";
import Modal from "react-modal";
import Highlighter from "react-highlight-words";
import Carousel from "./Carousel";
import essaypng from "../assets/essaypng.png";

import {
  BarChart,
  PieChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Pie,
} from "recharts";
import Miscard from "./Miscard";

const data = [
  {
    name: "Word-1",
    pv: 40,
    amt: 2400,
  },
  {
    name: "Word-2",
    pv: 13,
    amt: 2210,
  },
  {
    name: "Word-3",
    pv: 98,
    amt: 2290,
  },
  {
    name: "Word-4",
    pv: 27,
    amt: 2000,
  },
  {
    name: "Word-5",
    pv: 18,
    amt: 2181,
  },
];

const data2 = [
  {
    name: "Grammar",
    pv: 60,
  },
  {
    name: "Syntax",
    pv: 30,
  },
  {
    name: "punctuation",
    pv: 18,
  },
];

const COLORS = ["#243665", "#8BD8BD", "#FFBB28"];

const customStyles = {
  overlay: {
    zIndex: 1000,
    background: "rgba(0,0,0, 0.3)",
  },
};

Modal.setAppElement("#root");

const ProfessorPage = ({ inputText, setInputText, getMistakes, mistakes }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data_mist, setData] = useState(false);

  function openAddNewEssayModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function closeAddNewEssayModal() {
    setIsOpen(false);
  }
  function renderComp() {
    if (mistakes.length != 0) {
      return <Carousel item={mistakes} />;
    } else {
      <Carousel />;
    }
  }

  useEffect(() => {}, [mistakes]);

  return (
    <div className="test">
      <InputText
        inputText={inputText}
        setInputText={setInputText}
        getMistakes={getMistakes}
      />
      <div className="content-sec">{renderComp()}</div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeAddNewEssayModal}
        className="modal-essay"
        style={customStyles}
        contentLabel="Test Modal"
        closeTimeoutMS={300}
      >
        <header>
          <button onClick={closeAddNewEssayModal}>
            <i class="fas fa-times"></i>
          </button>
        </header>
        <div className="container">
          <div className="title">
            <h1>Add new Essay</h1>
          </div>
          <div className="main-section">
            <div className="input-box">
              <input
                type="text"
                id="context"
                name="context"
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="context">Title</label>
            </div>
            <div className="input-box">
              <textarea
                name="full-topic"
                id="full-topic"
                className="input-field"
                placeholder=" "
              ></textarea>
              <label htmlFor="full-topic">Full Topic</label>
            </div>
            <div className="line">
              <div className="left">
                <input
                  type="text"
                  id="date"
                  name="date"
                  className="input-field"
                  placeholder=" "
                />
                <label htmlFor="date">Date</label>
              </div>
              <div className="right">
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="input-field"
                  placeholder=" "
                />
                <label htmlFor="author">Author</label>
              </div>
            </div>
            <div className="btn-wrapper">
              <button className="add">Add</button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="section">
        <BarChart
          className="barchart"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#243665" />
        </BarChart>
        <PieChart width={500} height={300} className="donut">
          <Tooltip />
          <Legend verticalAlign="bottom" align="center" iconType="circle" />
          <Pie
            data={data2}
            nameKey="name"
            dataKey="pv"
            innerRadius="40%"
            outerRadius="80%"
            startAngle={90}
            endAngle={-270}
            fill="#243665"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <BarChart
          className="barchart"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8BD8BD" />
        </BarChart>
      </div>

      <section className="essay-section">
        <Essays addEssay={openAddNewEssayModal} />
        <div className="essay-info">
          <div className="essay-img-wrapper">
            <img src={essaypng} alt="Search-read-share" />
          </div>
          <h1>
            Search<span className="dot">. </span>
            Read<span className="dot">. </span>
            Share<span className="dot">. </span>
          </h1>
          <p className="essay-info-p">
            Discover essay topics other professors assign their students and
            share your own.
          </p>
        </div>
      </section>
      <div className="test-p">
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={["Lorem", "of", "when"]}
          autoEscape={false}
          textToHighlight="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  );
};

export default ProfessorPage;
