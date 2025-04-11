export default async function Fetch() {
  const data = await fetch("https://api.github.com/users/NawaratKhem");
  const profile = await data.json();
  const image = profile.avatar_url;

  return (
    <div>
      <h2>fetch Api</h2>
      <div>{JSON.stringify(profile.login)}</div>
      <div>{JSON.stringify(profile.id)}</div>
      <img src={image} alt="" />
    </div>
  );
}
