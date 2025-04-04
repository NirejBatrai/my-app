import ProductItem from "../components/productItem";
import Footer from "../components/Footer";

export default function Products() {
  const products = [
    {
      name: "Computer",
      description: "Product description computer goes here",
      image: "/computer.png",
    },
    {
      name: "Laptop i7",
      description: "Product description computer goes here",
      image: "/corei7.png",
    },
    {
      name: "Head phone",
      description: "Product description computer goes here",
      image: "/headphone1.png",
    },
    {
      name: "ipad 4th gen",
      description: "Product description computer goes here",
      image: "/ipad1.png",
    },
    {
      name: "iphone",
      description: "Product description computer goes here",
      image: "/iphone.png",
    },
    {
      name: "Laptop",
      description: "Product description computer goes here",
      image: "/laptop.png",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-4">Product</h1>
      <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded m-4 p-4 bg-slate-100 mb-6">
        {products.map((product, index) => {
          return (
            <ProductItem
              key={index}
              index={index}
              productName={product.name}
              description={product.description}
              image={product.image}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
