import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCountry, setTranslation } from "../../store/countries/slice";

import "./style.css";

export const Home = () => {
  const countries = useSelector((store) => store.countries?.countries);

  const getTranslations = (country) => {
    const filteredArray = countries?.filter(
      (c) => c.name.official === country
    )?.[0]?.translations;
    return Object.keys(filteredArray ?? {});
  };
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState(
    countries[0].name.official
  );
  const [selectedTranslation, setSelectedTranslation] = useState(
    getTranslations(countries[0].name.official)[0]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setCountry(selectedCountry));
    dispatch(setTranslation(selectedTranslation));
    navigation(`/countryList/${selectedCountry}/${selectedTranslation}`);
  };
  const onChange = (e) => {
    setSelectedCountry(e.target.value);
    const initTranslation = getTranslations(e.target.value)?.[0];
    setSelectedTranslation(initTranslation);
  };

  const onTranslationChange = (e) => {
    setSelectedTranslation(e.target.value);
  };

  return (
    <div>
      <h1>Home page</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="select-container">
            <label>Pick capital:</label>
            <select
              onChange={onChange}
              value={selectedCountry}
              name="selectCapital"
            >
              {countries?.map((country) => (
                <option
                  key={country.name.official}
                  value={country.name.official}
                >
                  {` ${country.flag} ${country?.capital?.[0]}`}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <label>Pick translation:</label>
            <select
              name="selectTranslation"
              onChange={onTranslationChange}
              value={selectedTranslation}
            >
              {getTranslations(selectedCountry)?.map((translation) => (
                <option key={translation} value={translation}>
                  {translation}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Read about {selectedCountry}</button>
        </form>
      </div>
    </div>
  );
};
