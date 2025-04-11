export default function Property() {
  const person = {
    name: "nil",
    age: 12,
  };
  return (
    <>
      <div>
        <h1>Property</h1>
        <div>
          This is :
          <A person={person} />
        </div>
        <div>
          This is : <B />
        </div>
      </div>
    </>
  );
}

function A({ person }: { person: { name: string; age: number } }) {
  return (
    <>
      A Component:
      <div> Name: {person.name}</div>
      <div> Age: {person.age}</div>
      <C />
    </>
  );
}
function C() {
  return <>C Component</>;
}
function B() {
  return <>B Component</>;
}
