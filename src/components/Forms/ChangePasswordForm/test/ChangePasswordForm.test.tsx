import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChangePasswordForm from '../ChangePasswordForm';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve(),
} as Response);

describe('ChangePasswordForm', () => {
  it('renders the form with all input fields', () => {
    const { getByPlaceholderText } = render(<ChangePasswordForm />);
    expect(getByPlaceholderText('Enter current password')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter new password')).toBeInTheDocument();
    expect(getByPlaceholderText('Confirm new password')).toBeInTheDocument();
  });

  it('displays error border when passwords do not match', async () => {
    const { getByPlaceholderText, getByText } = render(<ChangePasswordForm />);

    fireEvent.change(getByPlaceholderText('Enter current password'), {
      target: { value: 'currentPassword123' },
    });
    fireEvent.change(getByPlaceholderText('Enter new password'), {
      target: { value: 'newPassword123' },
    });
    fireEvent.change(getByPlaceholderText('Confirm new password'), {
      target: { value: 'invalidNewPassword' },
    });

    fireEvent.click(getByText('Change password'));

    expect(
      getByPlaceholderText('Confirm new password').parentElement
    ).toHaveClass('error-border');
  });
});
