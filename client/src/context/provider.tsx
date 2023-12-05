import { ReactElement, useState } from 'react';
import { GlobalContext } from '.';

export const GlobalContextProvider = ({ children }: any) => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const contextConfiguration = {
    isAddFormOpen,
    setIsAddFormOpen
  };
  return (
    //@ts-ignore
    <GlobalContext.Provider value={{ ...contextConfiguration }}>{children}</GlobalContext.Provider>
  );
};
