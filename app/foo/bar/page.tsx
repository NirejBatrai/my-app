import Link from "next/link";

export default function Bar() {
  return (
    <>
      <Link
        className="text-yellow-500 block text-center mb-16 border w-fit m-10"
        href="/"
      >
        Go to Home page
      </Link>
      <div>
        <h1 className="text-5xl font-bold m-2 p-2 border border-black rounded">
          Bar
        </h1>
      </div>
    </>
  );
}
