# React Shopping Cart

A simple Shopping Cart application built using **React** and **Tailwind CSS**. The application displays a list of products, allows users to add products to the cart, update quantities, remove products, and automatically calculates the total price.

---

## Features

- Display products in a responsive grid layout.
- Add products to the shopping cart.
- Increase or decrease product quantity.
- Automatically remove an item when its quantity reaches zero.
- Real-time total price calculation.
- Responsive UI using Tailwind CSS.
- State management using React Hooks (`useState`).

---

## Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- HTML5
- CSS3

---

## Project Structure

```
src/
│
├── assets/
│   └── image.png
│
├── data/
│   └── products.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## How It Works

### Product Section
- Displays all available products.
- Each product contains:
  - Product Image
  - Product Name
  - Product Price
  - Add to Cart button

### Shopping Cart
- Displays all added products.
- Shows:
  - Product image
  - Product name
  - Product price
  - Quantity controls (+ / -)

### Quantity Management
- Clicking **+** increases the quantity.
- Clicking **-** decreases the quantity.
- If quantity becomes zero, the product is removed from the cart.

### Price Calculation
The total amount updates automatically whenever:
- A product is added.
- Quantity is increased.
- Quantity is decreased.
- A product is removed.

---

## React Concepts Used

- Functional Components
- React Hooks (`useState`)
- Event Handling
- Conditional Rendering
- Array Methods
  - `map()`
  - `find()`
  - `filter()`
- JSX
- Component Reusability

---

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd react-shopping-cart
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the browser and visit

```
http://localhost:5173
```

---

## Future Improvements

- Remove Item button
- Product search
- Category filtering
- Checkout page
- Save cart using Local Storage
- Dark mode
- Product details page
- Toast notifications
- Backend integration

---

## Learning Outcomes

This project helped in understanding:

- React state management using Hooks
- Updating arrays in state immutably
- Building reusable React components
- Event-driven UI updates
- Dynamic rendering using JSX
- Responsive layout with Tailwind CSS

---

## Author

**Prashant Singh**

B.Tech Computer Science Engineering