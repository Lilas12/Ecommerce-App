import { Link, useLocation, useNavigate } from "react-router-dom";
import { isStoreSelected, isCartSelected } from "utils/checkRoutes";
function DesktopMenu() {
  const loc = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Link
        to="/"
        className={`navbar__right-side__item
              ${
                isStoreSelected(loc.pathname) &&
                "navbar__right-side__item--selected"
              }`}
      >
        Store
      </Link>
      <Link
        to="/cart"
        className={`navbar__right-side__item
              ${
                isCartSelected(loc.pathname) &&
                "navbar__right-side__item--selected"
              }`}
      >
        Cart
      </Link>
      <button
        onClick={() => navigate("/authenticate")}
        className="navbar__right-side__btn primary"
      >
        Login
      </button>
    </>
  );
}
export default DesktopMenu;
