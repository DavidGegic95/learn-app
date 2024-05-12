import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from '../LoginForm';
import AppContext from '../../../../AppContext';
import '@testing-library/jest-dom';

describe('LoginForm', () => {
  test('renders login form elements', () => {
    const mockSetUserData = jest.fn();
    const mockSetToken = jest.fn();
    render(
      <BrowserRouter>
        <AppContext.Provider
          value={{ setUserData: mockSetUserData, setToken: mockSetToken }}
        >
          <LoginForm />
        </AppContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByLabelText('User email') as HTMLElement).toBeTruthy();
    expect(screen.getByLabelText('Password') as HTMLElement).toBeTruthy();
    expect(screen.getByText('Sign in') as HTMLElement).toBeTruthy();
  });

  test('shows validation errors when submitting empty form', async () => {
    const mockSetUserData = jest.fn();
    const mockSetToken = jest.fn();
    render(
      <BrowserRouter>
        <AppContext.Provider
          value={{ setUserData: mockSetUserData, setToken: mockSetToken }}
        >
          <LoginForm />
        </AppContext.Provider>
      </BrowserRouter>
    );
    const signInButton = screen.getByText('Sign in');

    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeTruthy();
      expect(screen.getByText('Password is required')).toBeTruthy();
    });

    expect(mockSetUserData).not.toHaveBeenCalled();
    expect(mockSetToken).not.toHaveBeenCalled();
  });

  // Add more tests for successful login, invalid credentials etc.

  test('calls setUserData and setToken on successful login', async () => {
    const mockSetUserData = jest.fn();
    const mockSetToken = jest.fn();
    const mockFetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => ({ token: 'fake-token', user: { name: 'John Doe' } }),
    });
    window.fetch = mockFetch; // Mock fetch for controlled testing

    render(
      <BrowserRouter>
        <AppContext.Provider
          value={{ setUserData: mockSetUserData, setToken: mockSetToken }}
        >
          <LoginForm />
        </AppContext.Provider>
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText('User email');
    const passwordInput = screen.getByLabelText('Password');
    const signInButton = screen.getByText('Sign in');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(mockSetUserData).toHaveBeenCalledWith({ name: 'John Doe' });
      expect(mockSetToken).toHaveBeenCalledWith('fake-token');
      // expect(screen.getByText('Login')).not.toBeTruthy();
      expect(window.location.pathname).toEqual('/loginHome'); // redirected
    });
  });
});
