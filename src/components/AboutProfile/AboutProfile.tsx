import {
  ProfilesDataType,
  StyleClassesType,
} from '../../pages/AboutUsPage/utils';

import jack from '../../assets/profile-pictures/jack.svg';
import john from '../../assets/profile-pictures/john.svg';
import sara from '../../assets/profile-pictures/sara.svg';

const AboutProfile = ({
  profile,
  styleClasses,
}: {
  profile: ProfilesDataType;
  styleClasses: StyleClassesType;
}) => {
  const profileImg = (name: string) => {
    switch (name) {
      case 'john':
        return john;
      case 'sara':
        return sara;
      case 'jack':
        return jack;
      default:
        return '';
    }
  };

  return (
    <div className={styleClasses.className}>
      <img src={profileImg(profile.name)} alt={profile.title} />
      <h2 className={styleClasses.title}>{profile.title}</h2>
      <span className={styleClasses.subtitle}>{profile.subtitle}</span>
      <p className={styleClasses.text}>{profile.text}</p>
    </div>
  );
};

export default AboutProfile;
