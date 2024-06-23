import GridPage from "./GridePage";
import Header from "./Header";
import PermanentDrawerLeft from "./SideBar";

function App() {
  return (
    <div>
      <PermanentDrawerLeft />
      <Header />
      <GridPage />
    </div>
  );
}

export default App;
