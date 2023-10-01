import { useState } from "react";
import { Header } from "../Header/Header";
import { VscChromeClose, VscEdit } from "react-icons/vsc";
import { useData } from "../../hooks/useData";
import "./Table.style.css";
import { Form } from "../Form/Form";

const HEADERS = ["Model", "Brand", "Type", "Fuel", "Color"];

export const Table = () => {
  const [sortProp, setSortProp] = useState(HEADERS[0].toLowerCase());
  const [isAsc, setIsAsc] = useState(true);
  const [currentId, setCurrentId] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const { data, onSortData, onDelete, onEdit, onCreate } = useData();

  const onSortClick = (prop) => () => {
    const newSortProp = prop.toLowerCase();
    const isNewProp = sortProp !== newSortProp;
    const newIsAsc = isNewProp ? true : !isAsc;
    setSortProp(newSortProp);
    setIsAsc(newIsAsc);
    onSortData({ prop: newSortProp, isAsc: newIsAsc });
  };

  const onEditClick = (id) => () => {
    setCurrentId(id);
    setIsModal(true);
  };

  const onAddClick = () => {
    setIsAdd(true);
    setIsModal(true);
  };

  const onSubmit = (data) => {
    isAdd ? onCreate(data) : onEdit(currentId, data);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            {HEADERS.map((title, index) => (
              <Header
                key={index}
                title={title}
                onClick={onSortClick(title)}
                isAsc={isAsc}
                isShowIcon={sortProp === title.toLowerCase()}
              />
            ))}
          </tr>

          {data.map(({ id, model, brand, type, fuel, color }) => {
            return (
              <tr key={id}>
                <td>{model}</td>
                <td>{brand}</td>
                <td>{type}</td>
                <td>{fuel}</td>
                <td>{color}</td>
                <td>
                  <div style={{ display: "flex" }}>
                    <button onClick={onEditClick(id)} className="btn-edit">
                      <VscEdit />
                    </button>
                    <button onClick={onDelete(id)} className="btn-delete">
                      <VscChromeClose />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={onAddClick} className="btn-add">
        Add new
      </button>
      <Form
        setIsModal={setIsModal}
        isModal={isModal}
        data={data}
        currentId={currentId}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        onSubmit={onSubmit}
      />
    </>
  );
};
