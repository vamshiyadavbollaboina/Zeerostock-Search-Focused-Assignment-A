const BASE_URL = "https://zeerostock-search-focused-assignment-a.onrender.com";

let timeout = null;

async function search() {
  clearTimeout(timeout);

  timeout = setTimeout(async () => {
    const q = document.getElementById("q").value;
    const category = document.getElementById("category").value;
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;

    const url = `${BASE_URL}/search?q=${q}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    const loader = document.getElementById("loader");
    const table = document.getElementById("table");
    const noResults = document.getElementById("noResults");

    loader.classList.remove("hidden");
    table.classList.add("hidden");
    noResults.classList.add("hidden");

    try {
      const res = await fetch(url);
      const data = await res.json();
      const tbody = document.getElementById("results");

      if (data.length === 0) {
        noResults.classList.remove("hidden");
        tbody.innerHTML = "";
      } else {
        tbody.innerHTML = data.map(item => `
          <tr>
            <td>${item.productName}</td>
            <td>${item.category}</td>
            <td>₹${item.price}</td>
            <td>${item.supplier}</td>
          </tr>
        `).join("");
        table.classList.remove("hidden");
      }
    } catch (err) {
      console.error(err);
    }

    loader.classList.add("hidden");
  }, 400);
}

window.onload = search;