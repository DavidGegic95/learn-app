import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProfileBoxEdit from '../ProfileBoxEdit';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import AppContext, { UserDataType } from '../../../AppContext';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ user: { id: '123', isActive: true } }),
    }) as unknown as Promise<Response>
);

const setUserData = jest.fn();
const userData: UserDataType = {
  id: '123',
  isActive: true,
  role: 'student',
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1990-01-01',
  address: '123 Main St',
  email: 'mockemail@email.com',
  username: 'username',
  photo: 'photo',
  studentId: '123',
};

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <AppContext.Provider value={{ userData, setUserData }}>
        <ProfileBoxEdit />
      </AppContext.Provider>
    </BrowserRouter>
  );
};

describe('ProfileBoxEdit', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with initial state from context', () => {
    renderComponent();
    expect(screen.getByText('Edit profile')).toBeInTheDocument();
    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
  });

  test('handles form submission and updates user data', async () => {
    renderComponent();
    const saveButton = screen.getByText('Save changes');
    fireEvent.click(saveButton);

    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(setUserData).toHaveBeenCalledWith(
      expect.objectContaining({
        id: '123',
        isActive: true,
      })
    );
  });

  test('handles input change', () => {
    renderComponent();
    const input = screen.getByDisplayValue('John') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Jane' } });
    expect(input.value).toBe('Jane');
  });
});
