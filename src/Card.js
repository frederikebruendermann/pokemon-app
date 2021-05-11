import "./Card.css";

export default function Card({ name, types, images }) {
  return (
    <section className="Card">
      <h2>{name}</h2>
      <ul>
        {types.map((type) => (
          <li>{type}</li>
        ))}
      </ul>
      <img src={images.front} alt="" />
      <img src={images.back} alt="" />
    </section>
  );
}
