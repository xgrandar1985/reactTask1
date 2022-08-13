import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({ contacto }) => {
  return (
    <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h3>
                Descripción: { contacto.apellido }
            </h3>
            <h4>
                Level: { contacto.email }
            </h4>
            <h5>
                This task is: { contacto.conectado ? 'Contacto En Línea':'Contacto No Disponible' }
            </h5>
            
        </div>
  )
}

ContactoComponent.propTypes = {
    task: PropTypes.instanceOf(Contacto)
};

export default ContactoComponent;