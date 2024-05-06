export const studentList = [
  { text: 'First Name', key: 'firstName' },
  { text: 'Last Name', key: 'lastName' },
  { text: 'Date of birth', key: 'dateOfBirth' },
  { text: 'Address', key: 'address' },
  { text: 'Email', key: 'email' },
];
export const trainerList = [
  { text: 'First Name', key: 'firstName' },
  { text: 'Last Name', key: 'lastName' },
  { text: 'Specialization', key: 'specialization' },
];

export const createFormDataByRole = (role: string) => {
  if (role === 'student') {
    return {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      address: '',
      email: '',
    };
  }

  return {
    firstName: '',
    lastName: '',
    email: '',
    specialization: '',
  };
};

export const classname_p =
  'font-poppins text-[1rem] leading-[1.75rem] font-bold text-[#424955]';
export const classname_span =
  'font-poppins text-[1rem] leading-[1.75rem] font-normal text-[#171A1F]';
