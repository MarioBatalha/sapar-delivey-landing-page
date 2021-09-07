import { FaShoppingCart, FaTaxi, FaHandHoldingHeart, FaBook, FaBriefcase, FaPaypal, FaUserAstronaut } from 'react-icons/fa';
import React from 'react';

const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'E-commerce', icon: <FaShoppingCart />, url: '/e-commerce' },
      { label: 'Taxi service', icon: <FaTaxi />, url: '/taxi-service' },
      { label: 'Delivery', icon: <FaHandHoldingHeart />, url: '/delivery' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaPaypal />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaUserAstronaut />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks
