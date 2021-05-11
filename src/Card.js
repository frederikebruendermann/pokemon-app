import "./Card.css";

export default function Card({ name, types, frontImage, backImage }) {
  return (
    <section className="Card">
      <h2>{name}</h2>
      <ul>{types}</ul>
      <img src={frontImage} alt="" />
      <img src={backImage} alt="" />
    </section>
  );
}
