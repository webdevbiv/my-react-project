export default function Product({ name, price, imgUrl }) {
  return (
    <>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </>
  );
}
