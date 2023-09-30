import "./Task.style.css";
export const Task = ({ item }) => {
  return <div className="item">{item.title}</div>;
};
