import MusicItem from "../components/musicItem";
import Footer from "../components/Footer";

export default function Music() {
  const instruments = [
    {
      name: "Guitars",
      description:
        "Explore a wide range of acoustic, electric, and classical guitars for every skill level.",
      image:
        "https://media.sweetwater.com/m/home/cats/ENCTEBGH.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 200,
      like: 20,
      is_new: true,
    },
    {
      name: "Studio & Recording",
      description:
        "High-quality recording gear including audio interfaces, mixers, and monitors for home and pro studios.",
      image:
        "https://media.sweetwater.com/m/home/cats/Arrow-small.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 350,
      is_new: true,
    },
    {
      name: "Drum & Percussion",
      description:
        "Acoustic and electronic drum kits, cymbals, and percussion instruments for all styles.",
      image:
        "https://media.sweetwater.com/m/home/cats/LM402.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 500,
      is_new: false,
    },
    {
      name: "Bass",
      description:
        "Electric and acoustic bass guitars with punchy tone and smooth playability.",
      image:
        "https://media.sweetwater.com/m/home/cats/PBassAPR3SB.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 400,
      is_new: false,
    },
    {
      name: "Keyboard & Synth",
      description:
        "From digital pianos to powerful synthesizers, find keys for performance and production.",
      image:
        "https://media.sweetwater.com/m/home/cats/Matriarch.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 600,
      is_new: true,
    },
    {
      name: "Live Sound & Lights",
      description:
        "PA systems, stage lighting, and gear to power your live performances.",
      image:
        "https://media.sweetwater.com/m/home/cats/flow8.jpg?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 750,
      is_new: false,
    },
    {
      name: "Software & Plug-ins",
      description:
        "Top-rated DAWs and sound plug-ins for music production and editing.",
      image:
        "https://media.sweetwater.com/m/home/cats/ptstudioann.jpg?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 150,
      is_new: true,
    },
    {
      name: "DJ Equipment",
      description:
        "Mixers, controllers, turntables, and all essentials for DJs of every genre.",
      image:
        "https://media.sweetwater.com/m/home/cats/ATLP120XUSBSV.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 450,
      is_new: false,
    },
    {
      name: "Microphone & Wireless",
      description:
        "Wired and wireless microphones for studio recording, live shows, and broadcasting.",
      image:
        "https://media.sweetwater.com/m/home/cats/SM58-cat.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 200,
      is_new: true,
    },
    {
      name: "Band & Orchestra",
      description:
        "Traditional instruments for school bands and orchestras including brass, woodwinds, and strings.",
      image:
        "https://media.sweetwater.com/m/home/cats/KingSlvFlTr.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 300,
      is_new: false,
    },
    {
      name: "Home Audio & Electronics",
      description:
        "Speakers, amplifiers, and smart devices to upgrade your home sound system.",
      image:
        "https://media.sweetwater.com/m/home/cats/TourOneM2Bk.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 250,
      is_new: true,
    },
    {
      name: "Commercial Audio & Install",
      description:
        "Professional solutions for commercial sound systems and audio installations.",
      image:
        "https://media.sweetwater.com/m/home/cats/Control28.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 1000,
      is_new: false,
    },
    {
      name: "Cables, Cases, Stands & More",
      description:
        "All the essential accessories like cables, cases, stands, and mounts to complete your setup.",
      image:
        "https://media.sweetwater.com/m/home/cats/M4WP006.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 50,
      is_new: true,
    },
    {
      name: "Content Creators",
      description:
        "Cameras, microphones, lighting, and streaming gear tailored for content creators.",
      image:
        "https://media.sweetwater.com/m/home/cats/PodMic.png?format=jpg&optimize=high&auto=webp&quality=70&width=101",
      price: 300,
      is_new: true,
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-4">Product</h1>
      <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded m-4 p-4 bg-slate-100 mb-6">
        {instruments.map((product, index) => {
          return (
            <MusicItem
              key={index}
              index={index}
              productName={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              isNew={product.is_new}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
