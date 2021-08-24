import React from 'react';


export default function AuthorCard(){
    let cardNumber = Math.floor(Math.random() * 10);
    
    const chooseCard = ()=>{
        if(cardNumber === 0){return <CardTemlate0 />}
        if(cardNumber === 1){return <CardTemlate1 />}
        if(cardNumber === 2){return <CardTemlate2 />}
        if(cardNumber === 3){return <CardTemlate3 />}
        if(cardNumber === 4){return <CardTemlate4 />}
        if(cardNumber === 5){return <CardTemlate5 />}
        if(cardNumber === 6){return <CardTemlate6 />}
        if(cardNumber === 7){return <CardTemlate7 />}
        if(cardNumber === 8){return <CardTemlate8 />}
        if(cardNumber === 9){return <CardTemlate9 />}

        //TODO: Okodować wszystkie komponenty

    }

    return(
        <>
            {
                chooseCard()
            }
        </>
    )
}

export function CardTemlate0(){
    return(
        <p>Karta o nr. 0</p>
    )
}
export function CardTemlate1(){
    return(
        <p>Karta o nr. 1</p>
    )
}
export function CardTemlate2(){
    return(
        <p>Karta o nr. 2</p>
    )
}
export function CardTemlate3(){
    return(
        <p>Karta o nr. 3</p>
    )
}
export function CardTemlate4(){
    return(
        <p>Karta o nr. 4</p>
    )
}
export function CardTemlate5(){
    return(
        <p>Karta o nr. 5</p>
    )
}
export function CardTemlate6(){
    return(
        <p>Karta o nr. 6</p>
    )
}
export function CardTemlate7(){
    return(
        <p>Karta o nr. 7</p>
    )
}
export function CardTemlate8(){
    return(
        <p>Karta o nr. 8</p>
    )
}
export function CardTemlate9(){
    return(
        <p>Karta o nr. 9</p>
    )
}