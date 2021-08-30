import React from 'react'
import { Data } from '../App'
import "bootstrap";


interface dataFormProps{
    createCard: ()=>void
}

export default function DataForm({ createCard = () => {} }: dataFormProps){

    const dataProceed = (e: any) =>{
        e.preventDefault();
        Data.name = (document.getElementById('name') as HTMLInputElement).value;
        Data.about = (document.getElementById('about') as HTMLInputElement).value;
        Data.isDark = (document.querySelector(`input[name='theme']:checked`) as HTMLInputElement).value;
        createCard();
    }



    return(
        <div className = "data-form ">
            <form onSubmit = { dataProceed } >
                <fieldset>
                    <legend>Czym mamy wypełnić kartę?</legend>
                    <label htmlFor = "name" className =  "form-label">Jak masz na imię?</label>
                    <input type="text" className = "form-control"  id = "name"  required/><br/><br/>

                    <label htmlFor = "about" className =  "form-label">Opowiedz coś o sobie</label>
                    <textarea className = "form-control" id = "about" required/><br/><br/>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="theme" value = "light"  id="flexRadioDefault1" required/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Jasny Motyw
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="theme" value = "dark" id="flexRadioDefault2" required/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Ciemny Motyw
                        </label>
                    </div>

                    <button type="submit" className = "btn btn-primary" data-testid = "submit">stwórz kartę</button>
                </fieldset>
            </form>
        </div>
    )
}