import { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../reducer/reducer";
import { data } from "../../data";

export const Context = createContext();

function ContextProvider({ children }) {
  const initialState = {
    meetupsData: data?.meetups,
  };

  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);
  const [modal, setModal] = useState(false);

  const [filteredData, setFilteredData] = useState(data?.meetups);

  const inputHandler = (e) => {
    const searchValue = e.target.value;
    const updatedData = data?.meetups?.filter(
      (event) =>
        event?.title?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
        event?.eventTags?.some((item) =>
          item.toLowerCase().includes(e?.target?.value.toLowerCase())
        )
    );
    setFilteredData(updatedData);
  };

  const selectHandler = (e) => {
    const selectedValue = e.target.value;
    const updatedData = data?.meetups?.filter(
      (event) => event?.eventType === selectedValue
    );
    selectedValue === "Both" ? setFilteredData(dataState?.meetupsData) : setFilteredData(updatedData)
  };

  return (
    <Context.Provider
      value={{
        dataState,
        dataDispatch,
        inputHandler,
        filteredData,
        selectHandler,
        modal,setModal
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

export const useDataContext = () => useContext(Context);
