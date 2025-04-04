import Link from "next/link";

export default function WebApp() {
  return (
    <>
      <></>

      <Link
        className="text-yellow-500 block text-center mb-16 border w-fit m-10"
        href="/products"
      >
        Go to product page
      </Link>
      <Link
        className="text-yellow-500 block text-center mb-16 border w-fit m-10"
        href="/foo"
      >
        Go to Foo page
      </Link>
      <Link
        className="text-yellow-500 block text-center mb-16 border w-fit m-10"
        href="/foo/bar"
      >
        Go to Bar
      </Link>
      <Link
        className="text-yellow-500 block text-center mb-16 border w-fit m-10"
        href="/musicInstrument"
      >
        Go to Music Instrument Page
      </Link>
      <div className="w-[80%] border border-white rounded p-4">
        <h1 className="text-5xl font-bold m-2 p-2 border border-black rounded">
          Hello world
        </h1>
        <p className=" m-2 p-2 bg-gray-500/60 text-black border-black rounded">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          magnam.
        </p>
        <p className=" m-2 p-2 bg-green-500/60 text-black border-black rounded">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          magnam.
        </p>
        <p className="m-2 p-2 bg-yellow-500/60 text-black border-black rounded">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          magnam.
        </p>
        <p className="m-2  p-2 bg-orange-500/60 text-black border-black rounded">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          numquam saepe, eveniet perferendis odio voluptatem sapiente
          necessitatibus optio illum laudantium laboriosam dolorum eum eius
          provident vitae ea magnam blanditiis ab aliquid doloremque commodi
          minus quia pariatur quod. Dignissimos quibusdam laboriosam deleniti,
          deserunt reprehenderit debitis nobis qui quod possimus, sapiente ab
          blanditiis hic. Mollitia ipsum atque in earum ab? At rem nulla
          voluptatum consequatur a nesciunt reprehenderit suscipit distinctio
          temporibus id eius sit vero, in repellendus illum, enim quae eos
          dignissimos unde porro assumenda perspiciatis ad ullam. Inventore
          deserunt placeat officiis, voluptate, vero omnis mollitia neque et
          quos nesciunt facere minima!{" "}
        </p>
      </div>
    </>
  );
}
