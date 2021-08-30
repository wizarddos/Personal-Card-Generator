import React from 'react';
import { Data } from '../App'
import "../css/card.scss";
import profile from "../img/profile.png";


export default function AuthorCard(){
    
    
    const chooseCard = ()=>{
        let cardNumber = Math.floor(Math.random() * 10);
        if(cardNumber === 0){return <CardTemplate0 />}
        if(cardNumber === 1){return <CardTemplate1 />}
        if(cardNumber === 2){return <CardTemplate2 />}
        if(cardNumber === 3){return <CardTemplate3 />}
        if(cardNumber === 4){return <CardTemplate4 />}
        if(cardNumber === 5){return <CardTemplate5 />}
        if(cardNumber === 6){return <CardTemplate6 />}
        if(cardNumber === 7){return <CardTemplate7 />}
        if(cardNumber === 8){return <CardTemplate8 />}
        if(cardNumber === 9){return <CardTemplate9 />}

        // <CardTemplate9  />
        // 

    }

    return(
        <>
            { chooseCard() }
        </>
    )
}

export function CardTemplate0(){
    return(
        <div className = {Data.isDark}>
            <h2 className = {"header-"+Data.isDark}>Witajcie, jestem {Data.name}</h2>
            <img  src = {profile} alt = "domyślne zdjęcie profilowe. W Ostateczniej wersji to zdjęcie autora" />
            <p className = {"p-"+Data.isDark}>
                {Data.about}
            </p>
        </div>
    )
}
export function CardTemplate1(){
    return(
        <div className = {"flexCard "+Data.isDark+"-1"}>
            <div className = {"firstHalf-"+Data.isDark}>
                <h2 className = {"header-"+Data.isDark}>Cześć, jestem {Data.name}</h2>
                <img className = "img-fluid"  src = {profile} alt = "domyślne zdjęcie profilowe. W Ostateczniej wersji to zdjęcie autora" />
            </div>
            <div className = {"secondHalf-"+Data.isDark}>
                <p className = {"p-"+Data.isDark}>
                    Trochę o mnie:
                    <br/>
                    {Data.about}
                </p>
            </div>
        </div>
    )
}

export function CardTemplate2(){
    return(
        <div className = {Data.isDark+"-2"}>
            <h2 className = {"h2-"+Data.isDark+"-2"}>Lista Naszych twórców</h2>
            <ul className = {"ul-"+Data.isDark}>
                <li className = {"li-"+Data.isDark}>Twórca 1</li>
                <li className = {"li-"+Data.isDark}>Twórca 2</li>
                <li className = {"li-"+Data.isDark}>Twórca 3</li>
                {/*i dalej ilu ich jest */}
            </ul>
        </div>
    )
}
export function CardTemplate3(){
    return(
        <div className = {"flexCard "+Data.isDark+"-3"}>
            <div className = {"half"}>
                <p className = {"p-"+Data.isDark}>
                    {Data.about}
                </p>  
            </div>
            <div className = {"half"}>
                <h2 className = {"header-"+Data.isDark}>O to ja, {Data.name}</h2>
                <img className = "img-fluid"  src = {profile} alt = "domyślne zdjęcie profilowe. W Ostateczniej wersji to zdjęcie autora" />
                <p className = {"p-"+Data.isDark}>
                    <br/>
                   <q className = {"p-"+Data.isDark+"-3"}> Jakiś inspirujący cytat Lub po prostu lorem ipsum </q>
                </p>
            </div>
        </div>
    )
}
export function CardTemplate4(){
    return(
        <div className = {Data.isDark+"-4"}>
            <h2 className = {"header-"+Data.isDark+"-4"}>Nasza Ekipa</h2>
            <div className = "flexRow">
                <img src = {profile} className = "pic" alt = "zdjecie lub ikonka twórcy"/>
                <img src = {profile} className = "pic" alt = "zdjecie lub ikonka twórcy"/>
                <img src = {profile} className = "pic" alt = "zdjecie lub ikonka twórcy"/>
            </div>
            <div className = "flexRow">
                <p className = {"big-p p-"+Data.isDark}>www</p>
                <p className = {"big-p p-"+Data.isDark}>www</p>
                <p className = {"big-p p-"+Data.isDark}>www</p>
            </div>

            <p className = {'p-'+Data.isDark+'-4'}>
                Kim Jesteśmy:
            </p>
            <p className = {"p-"+Data.isDark}>
                {Data.about}
            </p>
        </div>
    )
}
export function CardTemplate5(){
    return(
        <div className = {"flexCard "+Data.isDark+"-5"}>
            <div className = {"half"}>
                <img src = {profile} alt = "Właściciel strony"/>
                <h2 className = {"p-"+Data.isDark}>{Data.name}</h2>
                <p className = {"p-"+Data.isDark}>informacje o zawodzie, <br/>wykrztałceniu etc</p>
            </div>
            <div className = {"half"}>
                <p className = {"p-"+Data.isDark}>
                    {Data.about}
                </p>
            </div>
        </div>
    )
}
export function CardTemplate6(){
    return(
        <div className = {Data.isDark+"-6"}>
            <img src = {profile} alt = "autorzy projektu"/>
            <h2 className = {"header-"+Data.isDark}>O autorach:</h2>
            <p className = {"p-"+Data.isDark}>{Data.name} - {Data.about}</p>
        </div>
    )
}
export function CardTemplate7(){
    return(
        <div className = {Data.isDark+"-7"}>
            <h2 className = {"header-"+Data.isDark}>Nasi autorzy:</h2>
            <ul className = {"ul-"+Data.isDark}>
                <li className = {" p-"+Data.isDark+" li-"+Data.isDark+"-7"}>{Data.name}</li>
                <li className = {" p-"+Data.isDark+" li-"+Data.isDark+"-7"}>Autor2</li>
                <li className = {" p-"+Data.isDark+" li-"+Data.isDark+"-7"}>Autor3</li>
                <li className = {"p-"+Data.isDark+" li-"+Data.isDark+"-7"}>I wielu innych...</li>
                <li className = {"p-"+Data.isDark+" li-"+Data.isDark}><p className = "huge-p">Dołącz do nas i ty</p></li>
                <a href = "github.com"><li className = {"p-"+Data.isDark+" li-"+Data.isDark}><i className="fab fa-github icon"></i></li></a>
            </ul>
        </div>
    )
}
export function CardTemplate8(){
    return(
        <div className = {"flexCard "+Data.isDark+"-8"}>
            <div className = "half">
                <img src = {profile} alt = "zdjęcie twórcy"/>
            </div>
            <div className = "half">
                <h2 className = {"header-"+Data.isDark}>Cześć, Jestem {Data.name}</h2>
                <p className = {"p-"+Data.isDark}>{Data.about}</p>
            </div>
        </div>
    )
}
export function CardTemplate9(){
    return(
        <div className = {Data.isDark+"-9"}>
            <img src = {profile} alt = "zdjęcie autora"/>
            <h2 className = {"header-"+Data.isDark}>{Data.name}</h2>
            <p className = {"p-"+Data.isDark}>Kim Jestem: &nbsp; {Data.about}</p>
            <div className="flexRow">
                <a href = "https://github.com" className = "icon-9"><i className="fab fa-github icon-9"></i></a>
                <a href = "https://facebook.com" className = "icon-9"><i className="fab fa-facebook icon-9"></i></a>
                <a href = "https://instagram.com" className = "icon-9"><i className="fab fa-instagram icon-9"></i></a>
                <a href = "mailto:email@email.com" className = "icon-9"><i className ="fas fa-envelope icon-9"></i></a>
            </div>
        </div>
    )
}