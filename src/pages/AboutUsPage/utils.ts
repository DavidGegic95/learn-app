export type ProfilesDataType = {
  name: string;
  title: string;
  subtitle: string;
  text: string;
};
export type StyleClassesType = {
  className: string;
  title: string;
  subtitle: string;
  text: string;
};

export const styleClasses: StyleClassesType = {
  className:
    'flex gap-[8px] py-[32px] flex-col items-center justify-start w-full',
  title:
    'font-montserrat text-[24px] font-semibold text-base leading-9 text-center text-[#171A1F]',
  subtitle:
    'font-poppins font-normal text-sm leading-6 text-center text-[#6355D8]',
  text: 'font-poppins w-[220px] font-normal text-sm leading-6 text-center text-[#424955]',
};

export const profilesData: ProfilesDataType[] = [
  {
    name: 'john',
    title: 'John Doe',
    subtitle: 'Professional title',
    text: 'Pariatur ea consectetur anim qui nisi exerci',
  },
  {
    name: 'sara',
    title: 'John Doe',
    subtitle: 'Professional title',
    text: 'Laborum officia esse cillum mollit eiusmod',
  },
  {
    name: 'jack',
    title: 'John Doe',
    subtitle: 'Professional title',
    text: 'Culpa adipisicing aute sunt velit cupidatat qui a',
  },
];

export default { profilesData, styleClasses };
