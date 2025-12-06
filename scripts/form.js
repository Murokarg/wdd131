const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = document.lastModified;

const products = [
    {id: "fc-1888", name: "flux capacitor", averagerating: 4.5},
    {id: "fc-2050", name: "power laces", averagerating: 4.7},
    {id: "fs-1987", name: "time circuits", averagerating: 3.5},
    {id: "ac-2000", name: "low voltage reactor", averagerating: 3.9},
    {id: "jj-1969", name: "warp equalizer", averagerating: 5.0}
];

// localStorage functions (reusable)
function getReviews() {
    const data = localStorage.getItem("productReviews");
    return data ? JSON.parse(data) : [];
}

function setReviews(reviews) {
    localStorage.setItem("productReviews", JSON.stringify(reviews));
}

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name}`;
        select.appendChild(option);
    });

    document.getElementById("productReviewForm")?.addEventListener("submit", function() {
        let count = parseInt(localStorage.getItem("reviewCount")) || 0;
        localStorage.setItem("reviewCount", count + 1);
    });
});
