import { Link } from "react-router-dom";

const petData = [
  {
    id: 1,
    image: "./image/elsa.jpeg",
    breed: "Labrador Retriever",
    name: "Elsa",
    age: "2 years",
    gender: "Female",
    vaccination: "Yes",
    description: "Active and friendly",
  },
  {
    id: 2,
    image: "./image/chintu.jpeg",
    breed: "Pug",
    name: "Chintu",
    age: "3 years",
    gender: "Male",
    vaccination: "Yes",
    description: "Loves to play",
  },
  {
    id: 3,
    image: "/image/cat.jpg",
    breed: "Siamese Cat",
    name: "Whiskers",
    age: "1.5 years",
    gender: "Male",
    vaccination: "No",
    description: "Curious and independent",
  },
  {
    id: 4,
    image: "/image/shihtzu.jpeg",
    breed: "Shih tzu",
    name: "Kiyo",
    age: "4 years",
    gender: "Male",
    vaccination: "Yes",
    description: "Loves sniffing around",
  },
  {
    id: 5,
    image: "/image/german.jpg",
    breed: "German shepherd",
    name: "Milo",
    age: "3 years",
    gender: "Female",
    vaccination: "Yes",
    description: "Super intelligent and playful",
  },
  {
    id: 6,
    image: "/image/cat2.jpg",
    breed: "Persian Cat",
    name: "Fluffy",
    age: "2 years",
    gender: "Female",
    vaccination: "No",
    description: "Calm and affectionate",
  },

  {
    id: 7,
    image: "/image/cat3.jpg",
    breed: "Bengal Cat",
    name: "Tiger",
    age: "3 years",
    gender: "Male",
    vaccination: "Yes",
    description: "Playful and energetic",
  },
];

const Pets = () => {
  return (
    <div>
      <h1>Available Pets for Adoption</h1>

      <div className="pets-container">
        {petData.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <div className="detail">
              <p>
                <strong>Breed: </strong>
                {pet.breed}
              </p>
              <p>
                <strong>Name: </strong>
                {pet.name}
              </p>
              <p>
                <strong>Age: </strong>
                {pet.age}
              </p>
              <p>
                <strong>Gender: </strong>
                {pet.gender}
              </p>
              <p>
                <strong>Vaccination: </strong>
                {pet.vaccination}
              </p>
              <p>{pet.description}</p>
              <button className="btn">
                <Link to="/AdoptionForm">Adopt</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
