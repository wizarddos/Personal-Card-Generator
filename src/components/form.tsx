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
        createCard();
    }


    return(
        <div className = "data-form ">
            <form onSubmit = { dataProceed } >
                <fieldset>
                    <legend>Opowiedz coś o sobie</legend>
                    <label htmlFor = "name" className =  "form-label">Jak masz na imię?</label>
                    <input type="text" className = "form-control"  id = "name"  /><br/><br/>

                    <label htmlFor = "about" className =  "form-label">Opowiedz coś o sobie</label>
                    <textarea className = "form-control" id = "about" /><br/><br/>
                    <button type="submit" className = "btn btn-primary">stwórz kartę</button>
                </fieldset>
            </form>
        </div>
    )
}