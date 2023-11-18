import { useGetCountyByNameQuery } from "../../services/countries";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteCountry } from "../../store/countries/slice";
import { BeatLoader } from "react-spinners";

function renderTable(obj) {
  const generateJSX = (data) => {
    return (
      <>
        {Object.keys(data).map((key) => (
          <tr key={key}>
            <td>
              <strong>{key}</strong>
            </td>
            <td>
              {typeof data[key] === "object" && data[key] !== null ? (
                generateJSX(data[key])
              ) : (
                <span>{data[key]}</span>
              )}
            </td>
          </tr>
        ))}
      </>
    );
  };

  return generateJSX(obj);
}

export const Country = () => {
  const { name, lang } = useParams();
  const {
    data: country,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetCountyByNameQuery(name);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const onDelete = () => {
    dispatch(deleteCountry(country[0].name.official));
    navigation(`/`);
  };

  if (isLoading) return <BeatLoader color="#36d7b7" />;
  if (isFetching) return <BeatLoader color="#36d7b7" />;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className="container">
      <button onClick={onDelete} className="top-left-component">
        Delete
      </button>
      <h1>{country[0].translations[lang].official}</h1>
      <table>
        <tbody>{renderTable(country[0])}</tbody>
      </table>
    </div>
  );
};
