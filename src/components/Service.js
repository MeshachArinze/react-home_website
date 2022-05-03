import React, {useState} from 'react';
import { datas } from "../Data";
import "./Service.css";

const Service = () => {
  const [subscribe, setSubscribe] = useState(false);

  const onToggle = () => {
    setSubscribe(!subscribe);
  }
  
  return (
      //react price card
    <>
        {datas.map((data) => {
            const {id, price, title, img, name} = data;
            return (
        <div key={id} className='ProfileCardBody'>
            <div className='ProfileCardBox'>
                <span style={{color: '#222', fontSize: '.8rem'}}>{name}</span>
                <div className='ProfileCardImg'>
                    <img src={img} alt='room' />
                </div>
                <div className='ProfileTagPrice'>
                    <span>
                        <strong>{price}</strong>
                        <sub>/month</sub>
                    </span>
                </div>
                <div className='ProfileList'>
                    <span>{title}</span>
                    <span>{title}</span>
                    <span>{title}</span>
                </div>
                <div className='ProfileCardButton'>
                    <button style={{margin: 'auto'}} onClick={onToggle}>{subscribe ? 'Unsubscribe' : 'Subscribe'}</button>
                </div>
            </div>

             <div className='ProfileCardBox'>
                <span style={{color: '#222', fontSize: '.8rem'}}>{name}</span>
                <div className='ProfileCardImg'>
                    <img src={img} alt='room' />
                </div>
                <div className='ProfileTagPrice'>
                    <span>
                        <strong>{price}</strong>
                        <sub>/month</sub>
                    </span>
                </div>
                <div className='ProfileList'>
                    <span>{title}</span>
                    <span>{title}</span>
                    <span>{title}</span>
                </div>
                <div className='ProfileCardButton'>
                    <button style={{margin: 'auto'}} onClick={onToggle}>{subscribe ? 'Unsubscribe' : 'Subscribe'}</button>
                </div>
            </div>
        </div>
            )
        })}
    </>
  )
}

export default Service;