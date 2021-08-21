import React from 'react'
import { Data } from '../App'
import bootsrap from 'react-bootstrap'

interface formProps {
    createCard(arg: any): void,
}


export default function DataForm({ createCard = f => f }: formProps){

    //contexts 
    /*const { name, setName } = useContext(DataContext);
    const { country, setCountry} = useContext(DataContext);
    const { age, setAge} = useContext(DataContext);
    const { adress, setAdress} = useContext(DataContext);*/

    const dataProceed = (e: any) =>{
        Data.name = (document.getElementById('name') as HTMLInputElement).value;
        Data.country = (document.getElementById('country') as HTMLInputElement).value;
        Data.age = (document.getElementById('age') as HTMLInputElement).value;
        Data.adress = (document.getElementById('adress') as HTMLInputElement).value;
        createCard(Data);
    }


    return(
        <form onSubmit = { dataProceed }>
            <input type="text"   id = "name"  />
            <input type="text"  id = "country" />
            <input type="number" id="age" />
            <input type="text" id = "adress"/>
            <button type="submit">stwórz kartę</button>
        </form>
    )
}