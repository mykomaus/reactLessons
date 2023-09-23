import { Component } from "react";
import { animals } from "../../data/animals";
import { Item } from "../Item/Item";
import "./Table.style.css";

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      unselected: Array.from({ length: animals.length }, (_, index) => index),
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.counter === animals.length) {
        clearInterval(interval);
        return;
      }
      const randomIndex = this.state.unselected.random();
      const newUnselected = this.state.unselected.filter(
        (value) => value !== randomIndex
      );
      this.setState({
        counter: this.state.counter + 1,
        unselected: newUnselected,
      });
    }, 2000);
  }

  render() {
    const { counter } = this.state;
    const isFull = counter === animals.length;
    const isMedium = counter > Math.floor(animals.length / 2) && !isFull;
    const style = isMedium ? "medium" : isFull ? "full" : "";
    return (
      <table className={style}>
        <tbody>
          {animals.map((animal, index) => {
            return (
              <Item
                key={`${index}-element`}
                item={animal}
                isSelected={!this.state.unselected.includes(index)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
