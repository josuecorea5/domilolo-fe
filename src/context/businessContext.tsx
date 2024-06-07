import React, { createContext, useState } from "react";

export type BusinessContextType = {
  categoryName: string;
  setCategory: (category: string) => void;
}

type Props = {
  children: React.ReactNode;
}

export const BusinessContext = createContext<BusinessContextType>({categoryName: "", setCategory: () => {}});

export const BusinessProvider = ({ children }: Props) => {
  const [categoryName, setCategoryName] = useState<string>("all");

  const setCategory = (category: string) => {
    setCategoryName(category);
  }

  return (
    <BusinessContext.Provider value={{categoryName, setCategory}}>
      {children}
    </BusinessContext.Provider>
  )
}
