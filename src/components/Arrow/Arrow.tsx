const Arrow = ({ fill }: { fill?: boolean }) => {
  return (
    <>
      <svg
        width='9'
        height='14'
        viewBox='0 0 9 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.326172 12.7085L1.50617 13.8885L8.10617 7.28848L1.50617 0.688477L0.326172 1.86848L5.74617 7.28848L0.326172 12.7085Z'
          fill={fill ? '#6355d8' : '#424955'}
        />
      </svg>
    </>
  );
};

export default Arrow;
