import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Miscard from "./Miscard";

// All items component

// Important! add unique key
export const Menu = (item) =>
  item.map((el) => {
    return <Miscard item={el} />;
  });

const ArrowR = () => {
  return (
    <div>
      <button className="btn-car" type="button">
        &#8250;
      </button>
    </div>
  );
};
const ArrowL = () => {
  return (
    <div>
      <button className="btn-car" type="button">
        &#8249;
      </button>
    </div>
  );
};

const ArrowLeft = ArrowL();
const ArrowRight = ArrowR();

class Carousel extends Component {
  constructor({ item }) {
    // call it again if items count changes
    // list of items
    super(item);
    console.log(item);
    console.log("--------------");
    this.menuItems = Menu(item);
  }

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    // Create menu from items
    const menu = this.menuItems;
    return (
      <div className="carousel">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default Carousel;
