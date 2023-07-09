import { createContext, useEffect, useReducer, useContext } from "react";
import { cuisineData, restaurantsData } from "../data/data";
import { DataReducer } from "../reducer/DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const restroData = JSON.parse(localStorage.getItem("data"));

  const [state, dispatch] = useReducer(DataReducer, restroData);

  const fetchData = () => {
    dispatch({ type: "InitialDataFetch", payload: restroData });
  };

  useEffect(() => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        cuisineTypes: cuisineData,
        restaurants: restaurantsData,
      })
    );
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
