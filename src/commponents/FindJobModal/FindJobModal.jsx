import React from 'react';
import './FindJobModal.css';
import { useState } from 'react';
import { useEffect } from 'react';

const displayInherit ={
    display: 'inherit'
}
const displayNone ={
    display: 'none'
}
export default function FindJobModal({modalDisplay}) {
    const [findJobModalStyle, setFindJobModalStyle] = useState(displayInherit)
    useEffect(()=>{
        if(modalDisplay){
            setFindJobModalStyle(displayInherit)
        }

        if(!modalDisplay){
            setFindJobModalStyle(displayNone)
        }
    },[findJobModalStyle, modalDisplay])
  return (
    <div className='FindJobModal' style={findJobModalStyle}>

    </div>
  )
}
