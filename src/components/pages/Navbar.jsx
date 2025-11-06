export default function Navbar({ setPage, cartCount, wishlistCount, user, loginAdmin }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
      <span className="navbar-brand fw-bold" style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
        LooQue
      </span>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item "><span className="nav-link" onClick={() => setPage("home")}>Home</span></li>
          <li className="nav-item"><span className="nav-link" onClick={() => setPage("shop")}>Shop</span></li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => setPage("wishlist")}>
              Wishlist ❤️ ({wishlistCount})
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => setPage("cart")}>
              Cart 🛒 ({cartCount})
            </span>
          </li>

          <li className="nav-item">
            <span className="nav-link" onClick={() => setPage("account")}>
              {user ? (
                <span
                  className="rounded-circle bg-black text-white d-inline-block text-center"
                  style={{
                    width: "21px",
                    height: "21px",
                    lineHeight: "22px",
                    fontSize: "10px",
                    fontWeight: "500",
                  }}
                >
                  {user.email.charAt(0).toUpperCase()}
                </span>
              ) : "Account"}
            </span>
          </li>

          <li className="nav-item"><span className="nav-link" onClick={() => setPage("about")}>About</span></li>
          <li className="nav-item"><span className="nav-link" onClick={() => setPage("contact")}>Contact</span></li>

<li className="nav-item">
  <button
    className="nav-link btn btn-link"
    onClick={() => setPage("admin-login")}
  >
    Admin
  </button>
</li>

        </ul>
      </div>
    </nav>
  );
}