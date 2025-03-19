import React, { useState, useEffect } from "react";

const Admin = () => {
  const [pets, setPets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    vaccinated: false,
    description: "",
    image: "",
  });

  useEffect(() => {
    fetch("/api/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Error fetching pets:", err));
  }, []);

  const addPet = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/pets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const newPet = await res.json();
      setPets([...pets, newPet]);
      setForm({
        name: "",
        breed: "",
        age: "",
        gender: "",
        vaccinated: false,
        description: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding pet:", error);
    }
  };

  const deletePet = async (id) => {
    try {
      await fetch(`/api/pets/${id}`, { method: "DELETE" });
      setPets(pets.filter((pet) => pet._id !== id));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  return (
    <div className="page">
      <div className="admin-page">
        <h2>Admin Page</h2>
        <form onSubmit={addPet}>
          <div>
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              name="breed"
              placeholder="Breed"
              value={form.breed}
              onChange={(e) => setForm({ ...form, breed: e.target.value })}
              required
            />

            <input
              name="age"
              type="number"
              placeholder="Age"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              required
            />

            <input
              name="gender"
              placeholder="Gender"
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              required
            />

            <input
              type="vaccination"
              placeholder="Vaccination"
              onChange={(e) =>
                setForm({ ...form, vaccinated: e.target.checked })
              }
            />

            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
            <input
              name="image"
              placeholder="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              required
            />
            <button type="submit">Add Pet</button>
          </div>
        </form>
      </div>
      <div className="page1">
        <h3>Available Pets</h3>
        <div className="pet-list">
          {pets.map((pet) => (
            <div key={pet._id} className="pet-item">
              <p>
                <strong>{pet.name}</strong>
              </p>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <p>Gender: {pet.gender}</p>
              <p>Vaccinated: {pet.vaccinated ? "Yes" : "No"}</p>
              <p>Description: {pet.description}</p>
              <img src={pet.image} alt={pet.name} width="100" />
              <button onClick={() => addPet(pet._id)}>Add</button>
              <button onClick={() => deletePet(pet._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
