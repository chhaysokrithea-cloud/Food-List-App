const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Allow React Native to connect
app.use(cors());
app.use(express.json());

// Fake database (array)
let foods = [
  {
    id: 1,
    title: "Combo Single",
    status: "202 Sold",
    price: "$3.50",
    image: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png"
  },
  {
    id: 2,
    title: "Combo Couple",
    status: "1K+ Sold",
    price: "$8.90",
    image: "https://png.pngtree.com/png-clipart/20240103/original/pngtree-group-of-fast-food-products-png-image_14008130.png"
  },
  {
    id: 3,
    title: "Set Family",
    status: "12 Sold",
    price: "$25.00",
    image: "https://www.kindpng.com/picc/m/182-1823082_fast-food-restaurant-junk-food-kfc-hamburger-junk.png"
  },
];

// ===== GET - Read all foods =====
app.get('/foods', (req, res) => {
  res.json({
    success: true,
    data: foods
  });
});

// ===== GET - Read one food by id =====
app.get('/foods/:id', (req, res) => {
  const food = foods.find(f => f.id === parseInt(req.params.id));
  if (!food) {
    return res.status(404).json({ success: false, message: 'Food not found' });
  }
  res.json({ success: true, data: food });
});

// ===== POST - Create new food =====
app.post('/foods', (req, res) => {
  const newFood = {
    id: foods.length + 1,
    title: req.body.title,
    status: req.body.status,
    price: req.body.price,
    image: req.body.image,
  };
  foods.push(newFood);
  res.json({ success: true, data: newFood });
});

// ===== PUT - Update food =====
app.put('/foods/:id', (req, res) => {
  const index = foods.findIndex(f => f.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Food not found' });
  }
  foods[index] = { ...foods[index], ...req.body };
  res.json({ success: true, data: foods[index] });
});

// ===== DELETE - Remove food =====
app.delete('/foods/:id', (req, res) => {
  const index = foods.findIndex(f => f.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Food not found' });
  }
  foods.splice(index, 1);
  res.json({ success: true, message: 'Food deleted!' });
});

// Start server
app.listen(port, () => {
  console.log(`Food API running at http://localhost:${8081}`);
});