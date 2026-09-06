import "./style/App.css";
import "./style/Modal.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import ControlPanal from "./component/ControlPanal";
import Orders from "./component/Orders";
import Employees from "./component/Employees";
import Traders from "./component/Traders";
import Deliveries from "./component/Deliveries";
import Cities from "./component/Cities";
import Regions from "./component/Regions";
import TraderView from "./component/TraderVIew";
import Settings from "./component/Settings";
import Permissions from "./component/Permissions";
import FinancialReport from "./component/FinancialReports";

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
        <ControlPanal />
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
        <hr />
        <Settings />
        <hr />
        <Permissions />
        <hr />
        <FinancialReport />
      </div>
    </div>
  );
}

export default App;
