import LoginForm from '../../components/Forms/LoginForm/LoginForm';

const LoginPage = ({}: {}) => {
  return (
    <div className='w-[400px] mv-custom-w-340px  mx-auto my-[64px] flex flex-col align-center justify-center'>
      <div className='flex w-[400px] mv-custom-w-340px flex-col align-center justify-center'>
        <h1 className='font-montserrat text-center text-[32px] leading-48 font-bold text-[#171A1FFF]'>
          Sign In
        </h1>
        <span className='font-montserrat text-[20px] text-center leading-30  text-[#565E6CFF]'>
          Welcome back
        </span>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
