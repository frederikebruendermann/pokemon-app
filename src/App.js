import "./App.css";
import Card from "./Card";
import pokemons from "./data.json";

export default function App() {
  return (
    <div className="App">
      {pokemons.map((pokemon) => {
        const { name, images, types, id } = pokemon;
        return <Card key={id} name={name} types={types} images={images} />;
      })}
    </div>
  );
}
