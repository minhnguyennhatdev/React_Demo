import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MenuView from "./views/MenuView";
import CartView from "./views/CartView";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/menu" element={<MenuView />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
