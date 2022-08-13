import React from 'react'
import { Contacto } from '../../models/contacto.class'
import ContactoComponent from '../pure/contacto';

const ContactoListComponent = props => {

  const defaultContacto = new Contacto('Xavier', 'Granda', 'xavi@gmail.com', false,);
  return (
    <>
    <h1>Lista de Contactos</h1>
    <ContactoComponent contacto={defaultContacto}></ContactoComponent>
    </>
  )
}


export default ContactoListComponent;