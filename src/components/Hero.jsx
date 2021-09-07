import React from 'react';
import phoneImg from '../asset/img/phone.png';
import { useGlobalContext } from '../context';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

const Hero = () => {
  const { handleCloseSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={handleCloseSubmenu}>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1 className=''>The best solution for your smart needs</h1>
        <p>Sapar Delivery is an all-in-one mobile app, three services in one app (E-commerce, Taxi Service, and Delivery).
        Sapar delivery app and APIs to accept delivery for everywhere, and manage their online shop.</p>
        <button className='btn'>
        <FaAppStoreIos />
        App Store
        </button>
        <button className='btn'>
        <FaGooglePlay />
        Google Play
        </button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg}  className='phone-img' alt='phone' />
      </article>
    </div>
  </section>
  );
};

export default Hero;
