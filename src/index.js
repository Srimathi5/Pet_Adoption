import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const petDiv = document.getElementById("pet");
  fetchPet();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const breed = document.getElementById("breed").value.trim();
    const vaccination = document.getElementById("vaccination").value.trim();
    const description = document.getElementById("description").value.trim();
    if (name && age && gender && breed && vaccination && description) {
      try {
        const response = await fetch("http://localhost:2000/pets", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            age,
            gender,
            breed,
            vaccination,
            description,
          }),
        });
        if (response.ok) {
          fetchPet();
          form.reset();
        } else {
          console.error("Failed to add pets");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.warn("All fields are required");
    }
  });
  async function fetchPet() {
    try {
      const response = await fetch("http://localhost:2000/notes");
      const data = await response.json();
      petDiv.innerHTML = "";
      data.forEach((pets) => {
        const petsElement = document.createElement("div");
        petsElement.classList.add("pets");
        petsElement.innerHTML = `
                    <h3>${pets.name}</h3>
                    <p> Age:${pets.age}</p>
<p> Gender:${pets.gender}</p>
<p> Breed:${pets.breed}</p>
<p> Vaccination:${pets.vaccination}</p>
                    <p>Description:${pets.description}</p>
                `;
        petDiv.appendChild(petsElement);
      });
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }
});
