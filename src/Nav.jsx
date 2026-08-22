import FooterNav from "./Nav/FooterNav";
import HeaderNav from "./Nav/HeaderNav";
import ItemButtons from "./Nav/ItemButtons";
import "./Nav/Nav.css";

export default function Nav() {
  return (
    <>
      <div
        style={{
          background: "black",
          minWidth: "250px",
          padding: "10px",
          height: "100%",
          gridArea: "nav",
        }}
      >
        <HeaderNav />
        <ItemButtons />
        <FooterNav />
      </div>
    </>
  );
}
