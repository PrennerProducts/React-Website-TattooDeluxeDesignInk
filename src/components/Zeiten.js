import React from 'react'
import './Zeiten.css'

export default function Zeiten() {
  return (
    <div className="zeiten">
        <div className="textclass">
            <h1>Öffnungszeiten</h1>
            <h3 style={{paddingTop: '40px'}}>Termin nur nach vereinbahrung!</h3>
            <div className="left_zeiten">
                <p style={{textAlign: 'center'}}>Sommer:</p>
                <p>Mo: 09:00 - 17:00 Uhr</p>
                <p>Di: 09:00 - 17:00 Uhr</p>
                <p>Mi: 09:00 - 17:00 Uhr</p>
                <p>Do: 09:00 - 17:00 Uhr</p>
                <p>Fr: 09:00 - 17:00 Uhr</p>
            </div>
        <div className="right_zeiten">
                <p>Winter:</p>
                <p>Mo: 09:00 - 17:00 Uhr</p>
                <p>Di: 09:00 - 17:00 Uhr</p>
                <p>Mi: 09:00 - 17:00 Uhr</p>
                <p>Do: 09:00 - 17:00 Uhr</p>
                <p>Fr: 09:00 - 17:00 Uhr</p>
        </div>
        </div>
       
        
      
    </div>
  )
}
