export function allValuesTruthy(obj: Record<string, any>): boolean {
  for (const value of Object.values(obj)) {
    if (!value) {
      return false;
    }
  }
  return true;
}

export interface FormaDataType {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
export const formsPlaceholder = {
  currentPassword: 'Enter current password',
  newPassword: 'Enter new password',
  confirmNewPassword: 'Confirm new password',
};
export const formsLabelText = {
  currentPassword: 'Current password',
  newPassword: 'New password',
  confirmNewPassword: 'Confirm new password',
};

export const initilState = {
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

export const initalStateIsVisible = {
  currentPassword: false,
  newPassword: false,
  confirmNewPassword: false,
};
export type FormaDataKey = keyof FormaDataType;
