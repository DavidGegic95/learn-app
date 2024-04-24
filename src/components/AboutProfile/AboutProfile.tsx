import { useEffect, useState } from 'react';
import {
  ProfilesDataType,
  StyleClassesType,
} from '../../pages/AboutUsPage/utils';

const AboutProfile = ({
  profile,
  styleClasses,
}: {
  profile: ProfilesDataType;
  styleClasses: StyleClassesType;
}) => {
  const [imgUrl, setImgUrl] = useState('');
  const path = `../../assets/profile-pictures/${profile.name}.svg`;

  useEffect(() => {
    const importImage = async () => {
      const { default: logo } = await import(/* @vite-ignore */ path);
      setImgUrl(logo);
    };
    importImage();
  }, []);
  return (
    <div className={styleClasses.className}>
      <img src={imgUrl} alt={profile.title} />
      <h2 className={styleClasses.title}>{profile.title}</h2>
      <span className={styleClasses.subtitle}>{profile.subtitle}</span>
      <p className={styleClasses.text}>{profile.text}</p>
    </div>
  );
};

export default AboutProfile;
