const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
import { CARS } from "./cars";

root.render(
  <React.Fragment>
    <table>
      <tbody>
        {CARS.map((item, index) => (
          <tr key={index}>
            <tr key={index}>
              <td colSpan="2" className="red_background">
                {item.brand}
              </td>
            </tr>
            {item.models.map((itemM) =>
              itemM.collection.map((item, index, array) => (
                <tr key={index}>
                  {index == 0 ? (
                    <td rowSpan={array.length} className="yellow_background">
                      {itemM.name}
                    </td>
                  ) : null}
                  <td>
                    <ul>
                      {Object.keys(item)
                        .filter((key) => key !== "id")
                        .map((key) => (
                          <li key={key}>{key + ": " + item[key]}</li>
                        ))}
                    </ul>
                  </td>
                </tr>
              ))
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </React.Fragment>
);
