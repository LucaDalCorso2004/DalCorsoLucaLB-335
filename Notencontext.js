import { createContext, useContext, useState } from "react";

export const NotenContext = createContext(null);
export const SetNotenContext = createContext(null);

export const usenoten = () => useContext(NotenContext);
export const useSetNoten = () => useContext(SetNotenContext);

export default function DataPointsProvider({ children }) {
    const [noten, setNoten] = useState([]);

    return (
        <NotenContext.Provider value={noten}>
            <SetNotenContext.Provider value={setNoten}>
                {children}
            </SetNotenContext.Provider>
        </NotenContext.Provider>
    );
}