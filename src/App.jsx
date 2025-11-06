import { useState } from "react";
import Shop from "./components/pages/Shop";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Wishlist from "./components/pages/Wishlist";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Account from "./components/pages/Account";
import Checkout from "./components/pages/Checkout";
import Confirmation from "./components/pages/Confirmation";
import AdminLogin from "./components/pages/AdminLogin";
import Dashboard from "./components/pages/Dashboard";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  // 🔒 Admin state
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Cart functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
    setPage("cart");
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // ✅ Wishlist functions
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
    setPage("wishlist");
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Admin login / logout
  const loginAdmin = (username, password) => {
    if (username === "admin" && password === "12344") {
      setIsAdmin(true);
      setPage("dashboard");
    } else {
      alert("Invalid admin credentials!");
    }
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    setPage("home");
  };

  // ✅ Page rendering
  const renderPage = () => {
    if (page === "home")
      return <Home setPage={setPage} addToCart={addToCart} addToWishlist={addToWishlist} />;
    if (page === "shop")
      return <Shop setPage={setPage} addToCart={addToCart} addToWishlist={addToWishlist} />;
    if (page === "cart")
      return (
        <Cart
          setPage={setPage}
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      );
    if (page === "wishlist")
      return (
        <Wishlist
          setPage={setPage}
          wishlist={wishlist}
          removeFromWishlist={removeFromWishlist}
          addToCart={addToCart}
        />
      );
    if (page === "checkout") return <Checkout cart={cart} setPage={setPage} />;
    if (page === "confirmation") return <Confirmation setPage={setPage} />;
    if (page === "about") return <About />;
    if (page === "contact") return <Contact />;
    if (page === "account") return <Account user={user} setUser={setUser} setPage={setPage} />;

    // 🔒 Admin Routes
    if (page === "admin-login") return <AdminLogin loginAdmin={loginAdmin} />;
    if (page === "dashboard")
      return isAdmin ? (
        <Dashboard cart={cart} wishlist={wishlist} logoutAdmin={logoutAdmin} />
      ) : (
        <AdminLogin loginAdmin={loginAdmin} />
      );

    return <Home setPage={setPage} addToCart={addToCart} addToWishlist={addToWishlist} />;
  };

  return (
    <div>
      <Navbar
        user={user}
        setPage={setPage}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        isAdmin={isAdmin}
      />
      {renderPage()}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
