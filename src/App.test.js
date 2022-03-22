import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Form from './components/Form';

// TESTS U
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('link-to-form');
  expect(linkElement).toBeInTheDocument();
});


test('bouton submit', () => {
  render(<Form />);
  const button = screen.getByTestId('button-submit');
  expect(button).toHaveAttribute('type', 'submit')
});


test('input firstname', () => {
  render(<Form />);
  const firstname = screen.getByTestId('input-firstname');
  fireEvent.change(firstname, { target: { value: "Léna" } })
  expect(firstname.value).toBe('Léna')

});