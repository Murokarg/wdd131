const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
})


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/2018/400x250/Payson-Utah-Temple02.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Hamilton New Zealand",
    location: "Hamilton, New Zealand",
    dedicated: "1958, April, 20-22",
    area: 45251,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/400x250/hamilton-new-zealand-lds-temple-942155-wallpaper.jpg"
  },
  {
    templeName: "Montevideo Uruguay",
    location: "Montevideo, Uruguay",
    dedicated: "2001, March, 18",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montevideo-uruguay/400x250/montevideo-uruguay-temple-lds-83476-wallpaper.jpg"
  },
  {
    templeName: "Manaus Brazil",
    location: "Manaus, Brazil",
    dedicated: "2012, June, 10",
    area: 32032,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/lds-temple-manaus-brazil-1085299-wallpaper.jpg"
  },
  {
    templeName: "Ogden, Utah",
    location: "Ogden, Utah",
    dedicated: "1972, January, 18-20",
    area: 112232,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/400x250/ogden-utah-temple-1300442-wallpaper.jpg"
  },
  {
    templeName: "Frankfurt, Germany",
    location: "Frankfurt, Germany",
    dedicated: "1987, August, 28-30",
    area: 112232,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-1-2278179.jpg"
  },
];

createTempleCard(temples);

const oldBtn = document.querySelector("#old");
const newBtn = document.querySelector("#new");
const largeBtn = document.querySelector("#large");
const smallBtn = document.querySelector("#small");
const homeBtn = document.querySelector("#home")


function getYear(dedicatedString) {
  if (!dedicatedString) return null;
  const yearPart = dedicatedString.split(",")[0];
  const year = parseInt(yearPart.trim());
  return isNaN(year) ? null : year;
}

// getYear(temples.dedicated) < 1900
// getYear(temples.dedicated) >= 2000


oldBtn.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => getYear(temple.dedicated) < 1900));
});

newBtn.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => getYear(temple.dedicated) >= 2000));
});

largeBtn.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area >= 90000));
});

smallBtn.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area <= 10000));
});

homeBtn.addEventListener("click", () => {
  createTempleCard(temples);
});


function createTempleCard(filteredTemples) {
  document.querySelector(".pop-images").innerHTML ="";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name  = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class = "label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card. appendChild(name);
    card. appendChild(location); 
    card. appendChild(dedication);
    card. appendChild(area);
    card. appendChild(img);

    document.querySelector(".pop-images").appendChild(card);

  })
}