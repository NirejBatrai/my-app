import Image from "next/image";

export default function MusicItem({
  index,
  productName,
  description,
  image,
  price,
  isNew,
}: {
  index: number;
  productName: string;
  description: string;
  image: string;
  price: number;
  isNew: boolean;
}) {
  return (
    <div
      key={index}
      className="relative shadow-md rounded-lg border bg-white w-72 p-4 m-4 hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <h2 className="font-semibold text-lg text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">
        {productName}
      </h2>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <p className="text-xl font-bold text-gray-900 mb-2">${price}</p>
      {isNew && (
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs py-1 px-2 rounded-full shadow-md">
          New
        </span>
      )}
      <div className="flex justify-center mb-3">
        <Image
          className="rounded-lg transform transition-all duration-300 hover:scale-110"
          src={image}
          width={120}
          height={120}
          alt={productName}
        />
      </div>
      <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all duration-300">
        Buy Now
      </button>
      <span className="absolute bottom-3 right-3 text-xs font-semibold text-gray-600 bg-amber-200 px-3 py-1 rounded-full shadow-lg">
        #{index + 1}
      </span>
    </div>
  );
}
