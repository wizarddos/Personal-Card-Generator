import React from 'react';
import DataForm from '../components/form';
import AuthorCard from '../components/card';
import { render, screen, fireEvent, getByLabelText, getByTestId } from '@testing-library/react';
import { Data } from '../App';


test('renders input form', ()=>{
    render(<DataForm createCard = {()=>{}}/>);
    const element = document.getElementById('name');
    expect(element).toBeInTheDocument();
})

test('renders Data card', ()=>{
    const Data = {
        name: "wizarddos",
        about:"Author",
        isDark: "dark"
      }
    render(<AuthorCard />);
    const element = document.querySelector('p');
    expect(element).toBeInTheDocument();
    Data.name = "";
    Data.about = "";
    Data.isDark = "";
})


test('sets object properties using input values',()=>{
    const { getByLabelText, getByTestId } = render(<DataForm createCard = {()=>{}}/>);
    
    const name = getByLabelText(/Jak masz na imię?/i);
    fireEvent.change(name, {target: {value: "www"}});

    const about = getByLabelText(/Opowiedz coś o sobie/i);
    fireEvent.change(about, {target: {value: "www"}});

    const theme = getByLabelText(/Jasny Motyw/i);
    fireEvent.click(theme);

    const submit = getByTestId(/submit/i);
    fireEvent.click(submit);

    expect(Data.isDark).toEqual('light');
    expect(Data.name).toEqual('www');
    expect(Data.about).toEqual('www');
})
