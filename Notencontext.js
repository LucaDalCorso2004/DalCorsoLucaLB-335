import { createContext, useContext, useState } from "react";
// https://react.dev/learn/scaling-up-with-reducer-and-context
/*
export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  // ...
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        ...
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

*/
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