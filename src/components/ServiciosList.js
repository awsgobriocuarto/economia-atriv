import React from 'react';
// import { Link } from 'react-router-dom';
import ServiciosItem from '../components/ServiciosItem';

const services = [
  {
    id: 1,
    title: 'legislacion',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem voluptates.',
    icon: 'faBriefcase',
    url: '/legislacion',
  },
  {
    id: 2,
    title: 'tutoriales',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem voluptates.',
    icon: 'faAtlas',
    url: '/tutoriales',
  },
  {
    id: 3,
    title: 'medios de pago',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem voluptates.',
    icon: 'faCreditCard',
    url: '/medios-de-pago',
  },
  {
    id: 4,
    title: 'guía de trámites',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem voluptates.',
    icon: 'faEdit',
    url: 'http://tramites.riocuarto.gov.ar/',
    external: true,
  },
  {
    id: 5,
    title: 'consultas',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem voluptates.',
    icon: 'faEnvelope',
    url: '/contacto',
  },
  {
    id: 6,
    title: 'cedulón digital',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem voluptates.',
    icon: 'faEnvelope',
    url: 'http://cidi.riocuarto.gov.ar/?cidi=5575683555726C625A66587A6172664676544642464D58696A7A733D',
    external: true,
  },
]

export default function ServiciosList() {
  return (
    <div className="services">
      <div className="container">
        <div className="services-list">
          <div className="row">
            <ServiciosItem services={services} />
          </div>
        </div>
      </div>
    </div>
  )
}
