import React from 'react'
import MyNavbar from '../Navbar'
import './impressum.css'

export default function Impressum() {

  const componentDidMount = () =>  {
    window.scrollTo(0, 0);
};
  return (
    componentDidMount(),
    <div className="impressum-container">
        <MyNavbar />
      <h1>Impressum</h1>
        
        <ul>
            <li>
            Betreiber dieser Webseite: <br/>
            Name des Unternehmens: PP-Ink TattooStudio (Philipp Paulitsch) <br/>
            Inhaber: Philipp Paulitsch <br/>
            Anschrift: Griffnerstraße 14  9100 Völkermarkt <br/>
            Telefonnummer: 06644274644 <br/>
          
            </li>
            <br/>
            <li>
            Berufsbezeichnung: <br/>
        Kosmetik als Tätowierer <br/>

            </li> <br/>
            <li>
                
            Inhaltlich Verantwortlicher gemäß § 55 RStV: <br/>
            Philipp Paulitsch <br/>
            Anschrift: Griffnerstraße 14  9100 Völkermarkt <br/>
            </li>
            <br/>
            <li>

            Haftungshinweis: <br/>
Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
<br/></li> <br/>
            <li>


            Datenschutzhinweis: <br/>
Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
</li> <br/>
<li>
Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich."
<br/>Name des Unternehmens: PP-Ink TattooStudio (Philipp Paulitsch)
Inhaber: Philipp Paulitsch <br/>
Anschrift: Griffnerstraße 14  9100 Völkermarkt <br/>
Telefonnummer: 06644274644 <br/>
</li> 
<br/>
<li>
Rechtliche Hinweise: <br/>

Verantwortlich für den Inhalt: Philipp Paulitsch <br/>
Quellenangaben für verwendetes Bild- und Videomaterial: [Angabe der Quellen oder, falls eigene Bilder verwendet werden, eine entsprechende Kennzeichnung] <br/>
Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
</li>
<br/>
<li>

Diese Informationen entsprechen den gesetzlichen Anforderungen für ein Impressum in Österreich gemäß § 5 Abs. 1 E-Commerce-Gesetz (ECG).</li> <br/>

        </ul>
        
    


    </div>
  )
}
