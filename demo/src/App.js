import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MenuView from "./views/MenuView";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/menu" element={<MenuView />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
