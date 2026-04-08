require('dotenv').config();
const express = require("express");
const cors = require("cors");
const data = require("./data/inventory.json");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/search", (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;
  let results = [...data];

  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({ message: "Invalid price range" });
  }

  if (q) results = results.filter(item => item.productName.toLowerCase().includes(q.toLowerCase()));
  if (category) results = results.filter(item => item.category.toLowerCase() === category.toLowerCase());
  if (minPrice) results = results.filter(item => item.price >= Number(minPrice));
  if (maxPrice) results = results.filter(item => item.price <= Number(maxPrice));

  res.json(results);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));