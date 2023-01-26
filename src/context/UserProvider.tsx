import { useState } from "react";

import { UserContext, UserContextValue } from "./UserContext";

interface Props {
  children: JSX.Element;
}

export const UserProvider = ({ children }: Props) => {
  const [name, setName] = useState<string>("Bryan");
  const [lastName, setLastName] = useState<string>("Andagoya");
  const [age, setAge] = useState<number>(21);

  const value: UserContextValue = {
    name,
    lastName,
    age,
    setName,
    setLastName,
    setAge,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
