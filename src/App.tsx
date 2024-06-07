import { useState, useEffect, useContext } from 'react'
import './App.css'
import { CardList } from './components/Cardlist/CardList'
import { Navbar } from './components/Navbar/Navbar'
import { Business } from './interfaces/business.interface'
import { getBusinesses } from './services/business'
import { BusinessContext, BusinessContextType } from './context/businessContext'
import { Footer } from './components/footer/footer'

function App() {
  const [businesses, setBusinesses] = useState<Business[]>([])
  const { categoryName } = useContext(BusinessContext) as BusinessContextType
  useEffect(() => {
      getBusinesses()
        .then((data) => {
          setBusinesses(data)
        })
        .catch((error) => console.error(error))
  }, [])

  const filteredBusinesses = businesses.filter((business) => {
    if (categoryName === "all") return true
    return business.category.name === categoryName;
  })

  return (
    <>
        <Navbar />
        <h1>
          {`${categoryName === "all" ? "Todos" : categoryName === "store" ? "Tiendas" : "Restaurantes"}`}
        </h1>
        <CardList businesses={filteredBusinesses} />
        <Footer />
    </>
  )
}

export default App
