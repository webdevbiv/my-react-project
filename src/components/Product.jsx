export default function Product() {
  const price = 999;
  const imageUrl =
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
  return (
    <>
      <h2>Tacos</h2>
      <img src={imageUrl} alt="Tacos With Lime" width="640" />
      <p>Price: {price} credits</p>
    </>
  );
}
