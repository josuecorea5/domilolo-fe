import "./Navbar.css";
import { BusinessContext, BusinessContextType } from "../../context/businessContext";
import { useContext } from "react";

export const Navbar = () => {
  const { setCategory, categoryName } = useContext(BusinessContext) as BusinessContextType;
  const handleFilter = (filter: string) => {
    setCategory(filter);
  }
  return (
    <nav className="nav">
      <ul>
        <li className={`${categoryName === "all" ? "nav-active" : ""}`} onClick={() => handleFilter('all')}>
          Todos
        <span></span>
        </li>
        <li className={`${categoryName === "store" ? "nav-active" : ""}`} onClick={() => handleFilter('store')}>
          Tiendas
          <span></span>
        </li>
        <li className={`${categoryName === "restaurant" ? "nav-active" : ""}`} onClick={() => handleFilter('restaurant')}>
          Restaurantes
          <span></span>
        </li>
      </ul>
      <p>Domilolo</p>
    </nav>
  )
}
