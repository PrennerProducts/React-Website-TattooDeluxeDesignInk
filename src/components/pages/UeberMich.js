import React from 'react'
import './UeberMich.css'

function UeberMich() {
      //Open Links for ContactInfoItem

  const openLink = (link) => {
    let theForm = document.getElementById('award');
    theForm.submit();
  };

  const componentDidMount = () =>  {
    window.scrollTo(0, 0);
};

    return (
        componentDidMount(),
    <div className='ueber-uebermich-container'>
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
                        Hallo, ich bin Philipp, ein professioneller Tattoo-Künstler mit einer Leidenschaft für das Schaffen von unvergesslichen Kunstwerken unter der Haut. Ich habe kürzlich mein eigenes, modern ausgestattetes Tattoostudio eröffnet, um meine Kreativität und meine hohen Ansprüche an die Qualität meiner Arbeit auszuleben.
                        </p>
                        <p className='text'>
                        Seit meiner Selbstständigkeit im Jahr 2017 als Tätowierer habe ich mich auf Realistic- und Cover-Up-Tattoos spezialisiert. Meine Arbeit zeichnet sich durch höchste Präzision und Detailgenauigkeit aus. Ich verwende ausschließlich hochwertige Materialien und arbeite unter den höchsten Hygienestandards.
                        </p>
                        <p className='text'>
                        Zudem verwende ich moderne Technologie, um ein perfektes Ergebnis zu erzielen. Alle Vorlagen werden digital erstellt, um eine maximale Genauigkeit und Kundenzufriedenheit zu garantieren.
                        </p>
                        <p className='text'>
                        Ich bin stolz darauf, dass ich jedem Kunden eine individuelle Betreuung und Beratung biete, um dessen Wünsche und Vorstellungen perfekt umzusetzen. Bei mir steht das Wohl des Kunden immer im Vordergrund.
                        </p>
                        <p className='text'>
                        Kommen Sie in mein Studio und lassen Sie uns gemeinsam Ihre Vision von einem perfekten Tattoo verwirklichen. Ich freue mich darauf, Sie kennenzulernen und Ihnen ein unvergessliches Kunstwerk sowie eine tolle Atmosphäre und einen entspannten Aufenthalt zu bieten."
                        </p>
                    </div>
                <div className='award' >
                    <a  href='https://g.page/r/CRfZT-_Sz7KAEB0/review' target='_blank' rel='noreferer'>
                        <img src='/images/bewertung.png' alt='award-img' className='award-img' onClick={openLink} />
                    </a>
                    
                    
                </div>
                 </div>
        </div>
    </div>
    )
}


export default UeberMich;