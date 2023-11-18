import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { deleteCountry } from "../../store/countries/slice";

export const CountryList = () => {
  const countries = useSelector((store) => store.countries?.countries);

  const dispatch = useDispatch();
  const onDelete = (name) => () => {
    dispatch(deleteCountry(name));
  };
  return (
    <div className="list-container">
      <h1>Country List</h1>
      {countries?.map((item, index) => (
        <div key={index} className="list-item">
          <div className="title">{item?.name?.official}</div>
          <button onClick={onDelete(item?.name?.official)}>X</button>
        </div>
      ))}
    </div>
  );
};
