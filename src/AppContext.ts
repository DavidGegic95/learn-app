import React from 'react';
import { UserData } from './App';

interface AppContextType {
  userData: UserData;
  setUserData: SetUserData;
}
export type SetUserData = React.Dispatch<React.SetStateAction<UserData | null>>;

const AppContext: any = React.createContext<AppContextType | null>(null);
export default AppContext;
