import { subHeaderStyle } from '../../styles-for-tailwind';
import avatarImg from '../../assets/profile-box-avatar.svg';
import checkIcon from '../../assets/profile-box-check.svg';

interface MyProfileInterface {
  status: boolean;
  name: string;
  lastname: string;
  dateOfBirth: string;
  address: string;
  email: string;
}

const ProfileBox = ({ data }: { data: MyProfileInterface }) => {
  const classname_p =
    'font-poppins text-[1rem] leading-[1.75rem] font-bold text-[#424955]';
  const classname_span =
    'font-poppins text-[1rem] leading-[1.75rem] font-normal text-[#171A1F]';

  return (
    <div className='flex flex-col gap-[16px]'>
      <p className={subHeaderStyle + ' text-start'}>My profile</p>
      <div className='flex gap-[32px]'>
        <img src={avatarImg} alt='' />
        <div>
          <p>Status</p>
          <div className='flex gap-[8px]'>
            <img src={checkIcon} alt='' />
            <span className={classname_span + ' text-[#60CFA5]'}>
              {data.status ? 'Active' : 'Not Active'}
            </span>
          </div>
        </div>
      </div>
      <p className={classname_p}>
        First Name
        <br />
        <span className={classname_span}>{data.name}</span>
      </p>
      <p className={classname_p}>
        Last Name
        <br />
        <span className={classname_span}>{data.lastname}</span>
      </p>
      <p className={classname_p}>
        Date of birth
        <br />
        <span className={classname_span}>{data.dateOfBirth}</span>
      </p>
      <p className={classname_p}>
        Address
        <br />
        <span className={classname_span}>{data.address}</span>
      </p>
      <p className={classname_p}>
        Email
        <br />
        <span className={classname_span}>{data.email}</span>
      </p>
    </div>
  );
};

export default ProfileBox;
