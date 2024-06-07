import "./BusinessCard.css";
import { Business } from "../../interfaces/business.interface";

type Props = {
  business: Business;
}

export const BusinessCard = ({business}: Props) => {
  return (
    <div className="business-card">
      <img src={business.image} alt={business.name} />
      <h2>{business.name}</h2>
      <div className="container-info">
        <p><strong>Descripción</strong></p>
        <p>{business.description}</p>
      </div>
      <div className="container-info">
        <p><strong>Dirección</strong></p>
        <p>{business.address}</p>
      </div>
      <div className="container-info">
        <p><strong>Página web/Facebook</strong></p>
        <a target="_blank" href={business.website}>Sitio web</a>
      </div>
      <div className="container-info">
        <p><strong>Contactos</strong></p>
        <ul>{business.contacts.map(contact => (
          <li key={contact.phoneNumber}>{contact.phoneNumber === "0000-0000" ? "Pedidos por DM" : contact.phoneNumber}</li>
        ))}</ul>
      </div>
      <div className="container-info">
        <p><strong>Categoría</strong></p>
        <p>{business.category.name === "store" ? "Tienda" : "Restaurante"}</p>
      </div>
    </div>
  )
}
