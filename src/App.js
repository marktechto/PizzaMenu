import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div>
      <Heading />
      <Menu />
      <Footer />
    </div>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h1>Our Pizza's List</h1>
      <Pizza
        name="Spinaci Pizza"
        ingredients="tomato, mozarella, spinach, and ricotta cheese"
        photoName="/pizzas/spinaci.jpg"
        price={16}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img
        src={props.photoName} // Correct relative path
        alt={props.name}
      />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price + 5}</span>
    </div>
  );
}
function Heading() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Mark Pizza Delivery</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (isOpen) alert("we 're currently open");
  // else alert("we 're currently close");

  return (
    <footer className="footer">
      <strong>{new Date().getFullYear()}</strong>We are Currently open!
    </footer>
  );
}
