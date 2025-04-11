import { resolve } from "path";

export default async function Basic() {
  const objA = {
    age: 23,
  };
  const person = {
    name: "nil",
    surname: "uzuma",
    myFoo: foo,

    myObject: objA,
    myArray: [1, 2, 3, 4],
  };

  function foo() {
    console.log("hello");
  }

  const promise = new Promise((resolve) => {
    resolve("gey");
  });

  console.log("promise", promise);

  promise.then((result) => {
    console.log(result);
  });

  const data = await promise;
  console.log("await", data);
  return (
    <>
      Name: {person.name}
      Surname: {person.surname}
      Age:{person.myObject.age}
      {person.myArray[2]}
      {JSON.stringify(person)}
      {person.myFoo()}
    </>
  );
}
