import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from '../LoginForm';
import AppContext from '../../../../AppContext';

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


  test('calls setUserData and setToken on successful login', async () => {
    const mockSetUserData = jest.fn();
    const mockSetToken = jest.fn();
    const mockFetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => ({ token: 'fake-token', user: { name: 'John Doe' } }),
    });
    window.fetch = mockFetch; 

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
      expect(window.location.pathname).toEqual('/loginHome'); 
    });
  });
});
