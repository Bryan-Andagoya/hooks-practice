import { createContext } from "react";

export interface UserContextValue {
  name: string;
  lastName: string;
  age: number;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setAge: React.Dispatch<React.SetStateAction<number>>;
}

export const UserContext = createContext<UserContextValue>(
  {} as UserContextValue
);
