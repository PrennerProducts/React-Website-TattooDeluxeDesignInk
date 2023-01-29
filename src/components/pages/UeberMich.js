import React from 'react'
import './UeberMich.css'

function UeberMich() {
    return (
        <div className='uebermich-container'>
            <div className='left'>
               <div className='card bg'> </div>
               <div className='card'>
                    <img  src='/images/portrait1.jpg'
                    alt='Portrait' className='img'  /> </div>
             </div>

            <div className='right'>
                <h1 className='titel'>Über mich ...</h1>
                    <div className='text-container'>
                        <p className='text'>
                        "Ich bin Philipp Paulitsch , der Gründer von PP-Ink, dem neuesten und aufregendsten Tattoostudio in Völkermarkt. 
                        Ich habe meine Leidenschaft für die Tätowierkunst vor 5 Jahren entdeckt und habe seitdem hart daran gearbeitet, meine 
                        Fähigkeiten und Techniken zu verbessern.
                        </p>
                        <p className='text'>
                        Ich bin spezialisiert auf Realismus-Stil Tattoos und liebe es, die Gesichter und Körper meiner Kunden in atemberaubende Kunstwerke 
                        zu verwandeln. Ich arbeite eng mit meinen Kunden zusammen, um sicherzustellen, dass jede Tätowierung ihre Persönlichkeit und
                        Geschichte widerspiegelt.
                        </p>
                        <p className='text'>
                        Ich bin stolz darauf, in einem sauberen und sicheren Studio zu arbeiten und immer auf dem neuesten Stand der Technologie und
                        Sicherheitsmaßnahmen zu sein. Ich bin sehr aufgeregt, in meinem neuen Studio zu arbeiten und meine Leidenschaft für die Tätowierkunst 
                        mit der Welt zu teilen. Ich bin bestrebt, das bestmögliche Erlebnis für meine Kunden zu schaffen und jede Tätowierung zu einem 
                        Meisterwerk zu machen.
                        </p>
                        <p className='text'>
                        Ich lade Sie herzlich ein, mich in meinem neuen Studio zu besuchen und sich von meiner Arbeit überzeugen zu lassen. Ich freue 
                        mich darauf, Ihre Träume von einer atemberaubenden Tätowierung zu verwirklichen und Teil Ihrer Reise zu sein. Willkommen bei 
                        PP-Ink, Ihrem neuen Zuhause für realistische Tätowierungen."
                        </p>
                    </div>
                <div className='award'>
                    <img src='/images/star.jpg' alt='award-img' className='award-img' />
                    <div className='award-text'>
                        <h4 className='award-titel'>Meine Bewertungen</h4>
                        <p className='award-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                           </div> 
                </div>
                 </div>
        </div>
    )
}


export default UeberMich;