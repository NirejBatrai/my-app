export default function Fetch() {
  const profile = fetch("https://api.github.com/users/NawaratKhem");
  console.log("Profile", profile);
  profile
    .then((res) => {
      console.log("res", res);
      return res.json();
    })
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => {
      console.log("err", err);
    });
  return <div>Fetch Api</div>;
}
