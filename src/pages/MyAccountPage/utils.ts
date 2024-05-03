import { PassedTrainigType } from '../TrainingPage/utils';

export const mockDataStudent = {
  status: true,
  firstName: 'Marta',
  lastName: 'Black',
  dateOfBirth: '01.01.2001',
  address: '123 Main StreetBoston, MA 02108United States',
  email: 'marta_12334@gmail.com',
};
export const mockDataTrainer = {
  status: true,
  firstname: 'John',
  lastName: 'Black',
  username: 'Jihn_12',
  specialization: 'Java',
  address: '456 Lake Shore Drive, Chicago, IL 60611United States',
  email: 'Jiohn_12@gmail.com',
};
export const mockTrainersList: TrainerType[] = [
  {
    name: 'Elizabeth Lopez',
    specialization: 'PHP',
  },
  {
    name: 'Matthew Martinez',
    specialization: 'JavaScript',
  },
  {
    name: 'Elizabeth Hall',
    specialization: 'Algorthms',
  },
  {
    name: 'Maria White',
    specialization: 'Java',
  },
];

export const mockStudentList: StudentType[] = [
  {
    name: 'Elizabeth Lopez',
    status: 'ACTIVE',
  },
  {
    name: 'Matthew Martinez',
    status: 'ACTIVE',
  },
  {
    name: 'Elizabeth Hall',
    status: 'NOT ACTIVE',
  },
  {
    name: 'Maria White',
    status: 'NOT ACTIVE',
  },
  {
    name: 'Elizabeth Watson',
    status: 'NOT ACTIVE',
  },
  {
    name: 'Elizabeth Allen',
    status: 'NOT ACTIVE',
  },
  {
    name: 'Caleb Jones',
    status: 'NOT ACTIVE',
  },
];

export interface TrainerType {
  name: string;
  specialization: string;
}

export interface StudentType {
  name: string;
  status: 'ACTIVE' | 'NOT ACTIVE';
}

export type TableType = TrainerType | StudentType | PassedTrainigType;

type StudentData = {
  status: boolean;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  email: string;
};

type TrainerData = {
  status: boolean;
  firstName: string;
  lastName: string;
  username: string;
  specialization: string;
  address: string;
  email: string;
};

export type ProfileBoxData = StudentData | TrainerData;
