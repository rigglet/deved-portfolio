//import pages
import AboutUs from "./pages/AboutUs";
//global style
import GlobalStyle from "./components/GlobalStyle";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Film</h1>
      <AboutUs />
    </div>
  );
}

export default App;
