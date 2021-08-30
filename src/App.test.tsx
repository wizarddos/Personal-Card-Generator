import React from 'react';
import { render, screen, fireEvent, getByLabelText, getByTestId } from '@testing-library/react';
import App, {Data} from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sekcja `o autorze` w formie karty/i);
  expect(linkElement).toBeInTheDocument();
});

test('simulate real user activity', ()=>{
  const { getByLabelText, getByTestId, getByText } =render(<App />);

  const name = getByLabelText(/Jak masz na imię?/i);
  fireEvent.change(name, {target: {value: "www"}});

  const about = getByLabelText(/Opowiedz coś o sobie/i);
  fireEvent.change(about, {target: {value: "www"}});

  const theme = getByLabelText(/Jasny Motyw/i);
  fireEvent.click(theme);

  const submit = getByTestId(/submit/i);
  fireEvent.click(submit);

  expect(document.querySelector("h2")).toBeInTheDocument();

  const reset = getByText(/Wyczyść Kartę/i);
  expect(reset).toBeInTheDocument();
  fireEvent.click(reset);
  expect(document.querySelector('h2')).toBeFalsy();
  
  fireEvent.click(submit);

  expect(document.querySelector("h2")).toBeInTheDocument();

})
