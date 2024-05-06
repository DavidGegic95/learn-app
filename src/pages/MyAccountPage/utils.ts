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
  firstName: 'John',
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
export function uuid() {
  const uuid = new Array(36);
  for (let i = 0; i < 36; i++) {
    uuid[i] = Math.floor(Math.random() * 16);
  }
  uuid[14] = 4; // set bits 12-15 of time-high-and-version to 0100
  uuid[19] = uuid[19] &= ~(1 << 2); // set bit 6 of clock-seq-and-reserved to zero
  uuid[19] = uuid[19] |= 1 << 3; // set bit 7 of clock-seq-and-reserved to one
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  return uuid.map((x) => x.toString(16)).join('');
}
