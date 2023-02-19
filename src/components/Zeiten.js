import React, {useRef, useEffect, useState} from 'react'
import './Zeiten.css'
import {useInView} from 'react-intersection-observer'

export default function Zeiten() {
  const {ref: zeitenRef, inView: zeitenVisabile} = useInView();


  return (
    <div ref={zeitenRef} className={`${zeitenVisabile ? 'zeiten' : 'zeitenHidden'}`}>
        <div className="textclass">
          
            {/* <p style={{paddingTop: '60px', fontSize: '38px', fontWeight: 'bold'}}>Mo: 12:00 - 19:00</p>
            <p style={{paddingTop : '60px', fontSize: '38px', fontWeight: 'bold'}}>Di-Sa nach Terminvereinbahrung</p> */}
            <div className="left_zeiten">
              <p className='zeitenheader'>Öffnungszeiten:</p>
                <p>Mo: 12:00 - 19:00</p>
                <p>Di-Sa nach Terminvereinbahrung</p>
                
            </div>
        <div className="right_zeiten">
                <p>PP INK TATTOOSTUDIO</p>
                <p>Griffner Straße 14</p>
                <p>9100 Völkermarkt</p>
                <p>Österreich</p>
                <p>Telefon: 0664/4274644</p>
             
        </div>
        </div>
       
        
      
    </div>
  )
}
