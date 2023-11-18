import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomeRoute, CountryListRoute, CountryRoute } from "./routes";
import { Layout } from "./components";
import { useGetAllCountriesQuery } from "./services/countries";
import { BeatLoader } from "react-spinners";

function App() {
  const { isSuccess } = useGetAllCountriesQuery();
  if (!isSuccess) {
    return <BeatLoader color="#36d7b7" />;
  } else {
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeRoute />}></Route>
              <Route path="countryList" element={<CountryListRoute />}></Route>
              <Route
                path="countryList/:name/:lang"
                element={<CountryRoute />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
