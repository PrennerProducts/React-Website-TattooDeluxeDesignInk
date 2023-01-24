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
                <p className='sub'>
                    Ich bin ein Tatto Artist  aus dem Raum VölkermarktS.
                </p>
                <p className='text'>
                    Ich bin ein Tatto Artist  aus dem Raum VölkermarktS.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    
                </p>
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