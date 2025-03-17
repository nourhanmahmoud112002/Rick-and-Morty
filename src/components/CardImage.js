import Image from "next/image";

const CardImage = (props) => {
  return (
    <div className="relative w-40 h-44">
      <Image
        src={props.image}
        alt="Rick Sanchez"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-lg"
        priority
      />
    </div>
  );
};
export default CardImage;
