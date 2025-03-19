export default function Product({
  name,
  price,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
}) {
  return (
    <>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      {imgUrl ===
        "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder" && (
        <p>Image is not available</p>
      )}
      <p>Price: {price} credits</p>
    </>
  );
}
