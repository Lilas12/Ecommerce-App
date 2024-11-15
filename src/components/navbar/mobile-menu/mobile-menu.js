import { Link, useLocation, useNavigate } from "react-router-dom";
import { isStoreSelected, isCartSelected } from "utils/checkRoutes";
function MobileMenu({ closeFn }) {
  const loc = useLocation();
  const navigate = useNavigate();
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">
        <Link
          onClick={closeFn}
          to="/"
          className={`mobile-menu__content__item
              ${
                isStoreSelected(loc.pathname) &&
                "mobile-menu__content__item--selected"
              }`}
        >
          Store
        </Link>
        <Link
          onClick={closeFn}
          to="/cart"
          className={`mobile-menu__content__item
              ${
                isCartSelected(loc.pathname) &&
                "mobile-menu__content__item--selected"
              }`}
        >
          Cart
        </Link>
        <button
          onClick={() => {
            navigate("/authenticate");
            closeFn();
          }}
          className="mobile-menu__content__btn primary"
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default MobileMenu;
