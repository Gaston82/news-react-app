import React, { createContext, useState } from "react";

export const CountryContext = createContext("co");

const CountriesProvider = (props) => {
  const [countries, setCountries] = useState(["au"]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};
export default CountriesProvider;
