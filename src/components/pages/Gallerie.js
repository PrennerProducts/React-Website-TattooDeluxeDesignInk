import React, {useState} from 'react';
import './Gallerie.css';
import { FaBars, FaTimes} from 'react-icons/fa'

import background1 from './gallerie/background1.PNG';
import background2 from './gallerie/background2.jpg';
import background3 from './gallerie/background3.jpg';
import background4 from './gallerie/background4.jpg';
import background5 from './gallerie/background5.jpg';
import background6 from './gallerie/background6.jpg';
import a1 from './gallerie/a1.jpg';
import a2 from './gallerie/a2.jpg';
import a3 from './gallerie/a3.jpg';
import a4 from './gallerie/a4.jpg';
import a5 from './gallerie/a5.jpg';
import a6 from './gallerie/a6.jpg';
import a7 from './gallerie/a7.jpg';
import a8 from './gallerie/a8.jpg';
import a9 from './gallerie/a9.jpg';
import a10 from './gallerie/a10.jpg';
import a11 from './gallerie/a11.jpg';
import a12 from './gallerie/a12.jpg';
import a13 from './gallerie/a13.jpg';
import a14 from './gallerie/a14.jpg';
import a15 from './gallerie/a15.jpg';
import a16 from './gallerie/a16.jpg';
import a17 from './gallerie/a17.jpg';
import a18 from './gallerie/a18.jpg';

import a20 from './gallerie/a20.jpg';
import a21 from './gallerie/a21.jpg';
import a22 from './gallerie/a22.jpg';
import a23 from './gallerie/a23.jpg';
import a24 from './gallerie/a24.jpg';
import a25 from './gallerie/a25.jpg';

import a27 from './gallerie/a27.jpg';
import a28 from './gallerie/a28.jpg';
import a29 from './gallerie/a29.jpg';
import a30 from './gallerie/a30.jpg';
import a31 from './gallerie/a31.jpg';


const Gallerie = () =>{

    let data =[
        {
            id: 8,
            imgSrc: a1,
        },
        {
            id: 9,
            imgSrc: a2,
        },
        {
            id: 10,
            imgSrc: a3,
        },
        {
            id: 11,
            imgSrc: a4,
        },
        {
            id: 12,
            imgSrc: a5,
        },
        {
            id: 13,
            imgSrc: a6,
        },
        {
            id: 14,
            imgSrc: a7,
        },
        {
            id: 15,
            imgSrc: a8,
        },
        {
            id: 16,
            imgSrc: a9,
        },
        {
            id: 17,
            imgSrc: a10,
        },
        {
            id: 18,
            imgSrc: a11,
        },
       
        {
            id: 20,
            imgSrc: a13,
        },
        {
            id: 21,
            imgSrc: a14,
        },
        {
            id: 22,
            imgSrc: a15,
        },
        {
            id: 23,
            imgSrc: a16,
        },
        {
            id: 24,
            imgSrc: a17,
        },
        {
            id: 25,
            imgSrc: a18,
        },
       
        {
            id: 27,
            imgSrc: a20,
        },
        {
            id: 28,
            imgSrc: a21,
        },
        {
            id: 29,
            imgSrc: a22,
        },
        {
            id: 30,
            imgSrc: a23,
        },
        {
            id: 31,
            imgSrc: a24,
        },
        {
            id: 32,
            imgSrc: a25,
        },
      
        {
            id: 34,
            imgSrc: a27,
        },
        {
            id: 35,
            imgSrc: a28,
        },
        {
            id: 36,
            imgSrc: a29,
        },
        {
            id: 37,
            imgSrc: a30,
        },
        {
            id: 38,
            imgSrc: a31,
        },

    ]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }


  return (
    <>
    
   
      <div className="h1div">
        {/* <h1 >  Gallerie</h1> */}
      </div>
      <div className={model? "model open" : "model"}>
        <img src={tempImgSrc} alt="pic" />
        <FaTimes onClick={() => setModel(false)}/>
        </div>
      <div className="gallery">
        {data.map((item, index) => {
            return (
                <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                    <img src={item.imgSrc} alt="pic"  style={{width: '100%' }}/>
                </div>        
            )})}
        </div>
        
    </>
  )
}






export default Gallerie;