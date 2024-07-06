"use strict";

// Navbar Scrolling Effect
const navbar = document.querySelector("nav");

document.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// /**
//  * A Reusable function to fetch data
//  */
// async function getJSON(url, type) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (!response.ok) {
//       console.log("Something went wrong :D");

//       return;
//     }

//     return data[type]; // Returned Value
//   } catch (err) {
//     console.error(err);
//   }
// }

// // New Arrival
// const newArrivalContainer = document.querySelector(".new_arrival--items");

// async function renderArrival() {
//   const products = await getJSON("https://dummyjson.com/products", "products");

//   products.map((product) => {
//     const image = product.images[0];

//     const markup = `
//         <div class="new_arrival--item">
//             <img src="${image}" alt="${product.title}" />

//             <div class="details">
//               <h3>${product.title}</h3>
//               <button>Add to cart</button>
//             </div>
//         </div>
//     `;

//     newArrivalContainer.insertAdjacentHTML("afterbegin", markup);
//   });
// }
// renderArrival();

// // SHOES
// const shoesContainer = document.querySelector(".shoes--items");

// async function renderShoes() {
//   const recipes = await getJSON("https://dummyjson.com/recipes", "recipes");

//   console.log(recipes);

//   recipes.map((recipe) => {
//     const markup = `
//         <div class="new_arrival--item">
//             <img
//               src="https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
//               alt="Shoes"
//             />

//             <div class="details">
//               <h3>Nike Travelling | Products</h3>
//               <button>Add to cart</button>
//             </div>
//         </div>
//     `;

//     shoesContainer.insertAdjacentHTML("afterbegin", markup);
//   });
// }

// Header Slider functionality
const sliders = document.querySelectorAll(".slider");
const btnRightSlider = document.querySelector(".slider_btn--right");
const btnLeftSlider = document.querySelector(".slider_btn--left");

let init = 0;

function goTo(slide) {
  sliders.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}

// initial execution
goTo(init);

btnRightSlider.addEventListener("click", function () {
  if (init < sliders.length - 1) {
    init = init + 1;

    goTo(init);
  } else {
    init = 0;

    goTo(init);
  }
});
btnLeftSlider.addEventListener("click", function () {
  if (init > 0) {
    init = init - 1;

    goTo(init);
  } else {
    init = sliders.length - 1;

    goTo(init);
  }
});
