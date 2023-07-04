import { animals } from "./animals";
import React from "react";
import {createRoot} from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);


const title = "";


const showBackground = true;


const background = (
 <img src="images/ocean.jpg" className="background" alt="ocean" />
);


const images = [];


for (const animal in animals) {
 images.push(
   <img
     key={animal}
     className="animal"
     alt={animal}
     src={animals[animal].image}
     aria-label={animal}
     role="button"
     onClick={displayFact}
   />
 );
}


const animalFacts = (
 <div>
   {/* <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1> */}
   <h1>{title || "Click an animal for a fun fact"}</h1>
   {showBackground && background}
   <div className="animals">{images}</div>
   <p id="fact"></p>
 </div>
);
/* const animalFacts = title === "" ? <h1>Click an animal for a fun fact</h1> : <h1>{title}</h1>; */


function displayFact(e) {
 const animalName = e.target.alt;
 const randomIndex = Math.floor(Math.random() * animals[animalName].facts.length);
 const funFact = animals[animalName].facts[randomIndex];
 const factElement = document.getElementById("fact");
 factElement.innerHTML = funFact;
}


root.render(animalFacts)


