import Hero from "./Hero"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./assets/data"

export default function App(){
  const cards = data.map(item =>{
    return (
      <Card
        key={item.id}
        item={item}
        />
    )
  })
  return(
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}