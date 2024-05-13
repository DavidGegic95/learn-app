import { render, fireEvent, waitFor } from '@testing-library/react';
import AppContext from '../../../AppContext';
import BasicModal from '../Modal';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
const mockSetUserData = jest.fn();
const mockSetToken = jest.fn();

describe('BasicModal', () => {
  it('opens the modal when the button is clicked', () => {
    const { getByLabelText, getByText, queryByRole } = render(
      <BrowserRouter>
        <AppContext.Provider
          value={{ setUserData: mockSetUserData, setToken: mockSetToken }}
        >
          <BasicModal type='delete' />
        </AppContext.Provider>
      </BrowserRouter>
    );

    expect(queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(getByText('Delete'));
    expect(getByText('Confirm')).toBeInTheDocument();
  });

  it('displays the correct content based on the type prop', () => {
    const { getByText } = render(
      <BrowserRouter>
        <AppContext.Provider
          value={{ setUserData: mockSetUserData, setToken: mockSetToken }}
        >
          <BasicModal type='delete' />
        </AppContext.Provider>
      </BrowserRouter>
    );

    fireEvent.click(getByText('Delete'));
    expect(getByText(/Profile Deletion Confirmation/)).toBeInTheDocument();
  });
});
