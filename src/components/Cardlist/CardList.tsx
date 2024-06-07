import "./CardList.css";
import { Business } from "../../interfaces/business.interface";
import { BusinessCard } from "../BusinessCard/BusinessCard";

type Props = {
  businesses: Business[];
}

export const CardList = ({businesses}: Props) => {
  return (
    <div className="card-list">
      {businesses.map((business: Business) => (
       <BusinessCard business={business} key={business.id} />
      ))}
    </div>
  )
}
