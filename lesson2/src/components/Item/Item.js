import { Component } from "react";
import "./Item.style.css";

export class Item extends Component {
  render() {
    const { type, icon } = this.props.item;
    const { isSelected } = this.props;
    const style = `${isSelected ? "selected" : "default"} base`;

    return (
      <tr>
        <td className={style}>{type}</td>
        <td className={style}> {icon}</td>
      </tr>
    );
  }
}
