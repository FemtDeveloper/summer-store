import mainLogo from "../../../assets/summer-logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img src={mainLogo} alt="logo" className="main-logo" />
        </a>
        <div className="-navigator-container">
          <a href={"contacts/1"}>Hola</a>
          <a href={"contacts/2"}>Hola</a>
          <a href={"contacts/3"}>Hola</a>
          <a href={"contacts/4"}>Hola</a>
        </div>
        <MenuIcon fontSize="large" className="menu-icon" />
      </nav>
    </>
  );
};

export default Navbar;
