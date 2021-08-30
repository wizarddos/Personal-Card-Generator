import React from 'react';
import { 
    CardTemplate0,
    CardTemplate1,
    CardTemplate2,
    CardTemplate3, 
    CardTemplate4, 
    CardTemplate5, 
    CardTemplate6, 
    CardTemplate7, 
    CardTemplate8, 
    CardTemplate9, 

} from '../components/card';
import { render, screen } from '@testing-library/react';

describe('Testowanie rodzajów kart', () => {
    test('generates card number 0', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate0 />);
        var el = document.querySelector("h2")
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });
    
    test('generates card number 1', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate1 />);
        const el = document.querySelector('h2');
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });

    test('generates card number 2', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate2 />);
        const el = document.querySelector('h2');
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });

    test('generates card number 3', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate3 />);
        const el = document.querySelector('h2');
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });

    test('generates card number 4', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate4 />);
        const el = document.querySelector('h2');
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });

    test('generates card number 5', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate5 />);
        const el = document.querySelector('h2');
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });

    test('generates card number 6', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate6 />);
        const el = document.querySelector('h2');
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });

    test('generates card number 7', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate7 />);
        const el = document.querySelector('h2');
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });

    test('generates card number 8', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate8 />);
        const el = document.querySelector('h2');
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });

    test('generates card number 9', ()=>{
        const Data = {
            name: "wizarddos",
            about:"Author",
            isDark: "dark"
          }
        render(<CardTemplate9 />);
        const el = document.querySelector('h2');
        expect(el).toBeInTheDocument();
        Data.name = "";
        Data.about = "";
        Data.isDark = "";
    });
})

