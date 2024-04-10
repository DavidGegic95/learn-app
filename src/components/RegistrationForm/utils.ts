export const scienceSpecializations = [
  'Physics',
  'Chemistry',
  'Biology',
  'Mathematics',
  'Astronomy',
  'Geology',
  'Environmental Science',
  'Computer Science',
  'Neuroscience',
];

type TrainerListType = {
  firstname: string;
  lastname: string;
  email: string;
  specialization?: string;
};

type StudentListType = {
  firstname: string;
  lastname: string;
  email: string;
  dateofBirth?: string;
  address?: string;
};

export const trainerList = {
  firstname: '',
  lastname: '',
  email: '',
};
export const studentList = {
  firstname: '',
  lastname: '',
  email: '',
  dateofBirth: '',
  address: '',
};
export const inputsListTrainer = ['First name', 'Last name', 'Email'];
export const inputsListStudent = [
  'First name',
  'Last name',
  'Email',
  'Date of birth (optional)',
  'Address (optional)',
];

export function areValuesTruthy(obj: FormDataType): boolean {
  return Object.values(obj).every((value) => !!value);
}
export type FormDataType = TrainerListType | StudentListType;

export default {
  scienceSpecializations,
  trainerList,
  studentList,
  inputsListTrainer,
  inputsListStudent,
  areValuesTruthy,
};
