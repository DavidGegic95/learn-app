import React from 'react';
import { render as rtlRender, fireEvent, screen } from '@testing-library/react';
import MyAccountAddPassedTrainig from '../MyAccountAddPassedTraining'; // Adjust this path
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { JSX } from 'react/jsx-runtime';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

function render(
  ui:
    | string
    | number
    | boolean
    | Iterable<React.ReactNode>
    | JSX.Element
    | null
    | undefined,
  { route = '/' } = {}
) {
  window.history.pushState({}, 'Test page', route);

  return rtlRender(
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {ui}
      </LocalizationProvider>
    </BrowserRouter>
  );
}

describe('MyAccountAddPassedTrainig', () => {
  test('renders the component with required fields', () => {
    render(<MyAccountAddPassedTrainig />);
    expect(screen.getByText('Add passed training')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
  });

  test('validates required fields on form submission', async () => {
    render(<MyAccountAddPassedTrainig />);
    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    const parentElement = screen.getByText('Name').parentNode;

    const inputElement = parentElement!.querySelector('input[name="name"]');

    expect(inputElement).toHaveClass('error-border');
  });
});
