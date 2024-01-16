// let img =document.querySelector(".img")
// fetch(`https://jsonplaceholder.typicode.com/photos`)
// .then((user) => user.json())
// .then((res) => { 
// // res .slice(10, 15)
// res.map((el) =>{
//     let imgs = document.createElement("img")
//     let div = document.createElement("div")
//     imgs.src =el.thumbnailUrl   
//     div.append(imgs);
//     img.append(div)

// })
// })
let flagss = document.querySelector(".flags-container");
let originalFlags;

fetch("https://restcountries.com/v3.1/all")
  .then((flag) => flag.json())
  .then((res) => {
    originalFlags = res;
    renderFlags(originalFlags);
  });

function searchFlags() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();

  const filteredFlags = originalFlags.filter((el) =>
    el.name.common.toLowerCase().includes(searchInput)
  );

  renderFlags(filteredFlags);
}

function sortFlags(order) {
  const sortedFlags = originalFlags.sort((a, b) =>
    order === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common)
  );

  renderFlags(sortedFlags);
}

function deleteFlags() {
  flagss.innerHTML = ""; // Remove all flags
}

function renderFlags(flags) {
  flagss.innerHTML = ""; // Clear existing flags

  flags.map((el) => {
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let capital = document.createElement("p");
    let div = document.createElement("div");
    let region = document.createElement("p");
    let fifa = document.createElement("h2");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    img.src = el.flags.svg;
name.innerText = `country: ${el.name.common}`;
capital.innerText = `capital: ${el.capital}`;
region.innerText = `region: ${el.region}`;
fifa.innerText = el.fifa;


    div.classList.add("div");
    div4.classList.add("div4");
    div3.classList.add("div3");

    div.append(img);
    div2.append(name);
    div2.append(capital);
    div3.append(fifa);
    div3.append(region);
    div4.append(div2);
    div4.append(div3);
    div.append(div4);
    flagss.append(div);
  });
}