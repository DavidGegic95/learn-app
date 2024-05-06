import React from 'react';

interface AppContextType {
  userData: UserDataType;
  setUserData: SetUserData;
}
export type SetUserData = React.Dispatch<
  React.SetStateAction<UserDataType | null>
>;

const AppContext: any = React.createContext<AppContextType | null>(null);
export default AppContext;

interface BaseUser {
  isActive: boolean;
  role: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  id: string;
  photo: string;
}

export interface StudentUser extends BaseUser {
  address: string;
  dateOfBirth: string;
  studentId: string;
}

export interface TrainerUser extends BaseUser {
  specialization: string;
}
export type UserDataType = StudentUser | TrainerUser;
