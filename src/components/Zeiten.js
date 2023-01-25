import React, {useRef} from 'react'
import './Zeiten.css'

export default function Zeiten() {
  return (
    <div className="zeiten">
        <div className="textclass">
            <h1>Öffnungszeiten</h1>
            <p style={{paddingTop: '60px', fontSize: '38px', fontWeight: 'bold'}}>Mo: 12:00 - 19:00</p>
            <div className="left_zeiten">
                <p>Di: nach Terminvereinbahrung</p>
                <p>Mi: nach Terminvereinbahrung</p>
                <p>Do: nach Terminvereinbahrung</p>
                <p>Fr: nach Terminvereinbahrung</p>
                <p>Sa: nach Terminvereinbahrung</p>
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
