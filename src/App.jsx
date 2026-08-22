import "./App.css";
import ControlPanal from "./ControlPanal";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/* to-do  Header */}
      <div style={{ gridArea: "header" }}>
        <Header />
      </div>
      {/* Nav bar */}
      <Nav />
      {/* Nav bar */}
      <div style={{ gridArea: "body" }}>
        <ControlPanal />
      </div>
      {/* to-do Body */}
    </div>
  );
}

export default App;
