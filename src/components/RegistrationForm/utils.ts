import Role from '../../pages/JoinUsPage/utils';

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
  firstName: string;
  lastName: string;
  email: string;
  specialization: string;
};

type StudentListType = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: string;
  address?: string;
};
export type FormDataType = TrainerListType | StudentListType;

export const trainerList: TrainerListType = {
  firstName: '',
  lastName: '',
  email: '',
  specialization: '',
};
export const studentList: StudentListType = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
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

export function requiredFields(
  data: FormDataType,
  role: Role,
  valueSelectTag: string
): boolean {
  const reqFieldsList = ['firstName', 'lastName', 'email', 'specialization'];
  for (let field of reqFieldsList) {
    if (field === 'specialization' && role !== 'Trainer') {
      continue;
    } else if (field === 'specialization' && role === 'Trainer') {
      if (valueSelectTag === '') return false;
    } else if (
      !(field in data) ||
      data[field as keyof typeof data].trim() === ''
    ) {
      return false;
    }
  }
  return true;
}
export default {
  scienceSpecializations,
  trainerList,
  studentList,
  inputsListTrainer,
  inputsListStudent,
  requiredFields,
};

export async function fetchUserRegistration(
  formData: FormDataType,
  role: Role,
  valueSelectTag: string
) {
  const lowerCaseRole = role.toLowerCase();
  let body = { ...formData, role: lowerCaseRole };
  if (role === 'Trainer') {
    body = { ...body, specialization: valueSelectTag, role: 'trainer' };
  }
  try {
    const response = await fetch(
      'https://j2xsxqcnd6.execute-api.eu-central-1.amazonaws.com/dev/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch user registration data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
