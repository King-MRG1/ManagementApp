import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import ControlPanal from "./ControlPanal";
import Orders from "./Orders";
import Employees from "./Employees";
import Traders from "./Traders";
import Deliveries from "./Deliveries";
import Cities from "./Cities";
import Regions from "./Regions";
import TraderView from "./TraderVIew";
import Settings from "./Settings";

function App() {
  return (
    <div className="app">
      {/* to-do  Header */}
      <div className="app-header-area">
        <Header />
      </div>
      {/* Nav bar */}
      <Nav />
      {/* Nav bar */}
      <div className="app-body-area">
        {/* <ControlPanal />
        <hr />
        <Orders />
        <hr />
        <Traders />
        <hr />
        <Deliveries />
        <hr />
        <Employees />
        <hr />
        <Cities />
        <hr />
        <Regions />
        <hr />
        <TraderView />
        <hr /> */}
        <Settings />
      </div>
    </div>
  );
}

export default App;
