// import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordIcon = ({ isVisible }: { isVisible: boolean }) => {
  return <>{isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}</>;
};

export default PasswordIcon;
