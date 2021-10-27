import Menu from "./components/Menu";
import './main.css';

// Pages
import MainPage from "./components/MainPage";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import StageThree from "./components/StageThree";
import LastPage from "./components/LastPage";


function App() {
  return (
    <div className="col-12 m-0 p-0 d-flex flex-column align-items-center">
      <Menu/>
      <MainPage/>
      <StageOne/>
      <StageTwo/>
      <StageThree/>
      <LastPage/>
    </div>
  );
}

export default App;
