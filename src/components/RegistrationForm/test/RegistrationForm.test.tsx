import { render, fireEvent } from '@testing-library/react';
import RegistrationForm from '../RegistrationForm';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  fetchUserRegistration: jest.fn(),
}));

describe('RegistrationForm', () => {
  it('renders without crashing', () => {
    const mockProps = {
      role: 'Trainer',
      setIsSubmitted: jest.fn(),
      setUserData: jest.fn(),
    };

    render(
      <BrowserRouter>
        <RegistrationForm
          role={mockProps.role as 'Trainer'}
          setIsSubmitted={mockProps.setIsSubmitted}
          setUserData={mockProps.setUserData}
        />
      </BrowserRouter>
    );
  });

  it('handles input change', () => {
    const mockProps = {
      role: 'Trainer',
      setIsSubmitted: jest.fn(),
      setUserData: jest.fn(),
    };
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <RegistrationForm
          role={mockProps.role as 'Trainer'}
          setIsSubmitted={mockProps.setIsSubmitted}
          setUserData={mockProps.setUserData}
        />
      </BrowserRouter>
    );
    const firstNameInput = getByPlaceholderText(
      'Enter First name'
    ) as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: 'John' } });

    expect(firstNameInput.value).toBe('John');
  });
});
