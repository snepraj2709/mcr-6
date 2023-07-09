import { createContext, useEffect, useReducer, useContext } from "react";
import { cuisineData, restaurantsData } from "../data/data";
//import { DataReducer } from '../reducer/dataReducer';

const DataReducer = (state, action) => {
  switch (action.type) {
    case "InitialDataFetch": {
      if (action.payload) {
        return {
          ...state,
          cuisineTypes: action.payload.cuisineTypes,
          restaurants: action.payload.restaurants,
        };
      }
      break;
    }

    case "AddReview": {
      if (action.payload) {
        return {
          ...state,
          restaurants: [...state.restaurants, action.payload],
        };
      }
      break;
    }

    default:
      return state;
  }
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const restroData = JSON.parse(localStorage.getItem("data"));

  console.log("restroData", restroData);
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
