import { useEffect, useState, createContext } from "react";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
    const [data, setData] = useState([])

    return <FavouriteContext.Provider value={{ data, setData }}>{children}</FavouriteContext.Provider>;
};