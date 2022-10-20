import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigations from "./components/Navigations";
import Footer from "./components/Footer";
import About from "./pages/About";
import MainPage from "./pages/MainPage";
import {TodoProvider} from "./context/todoAppContext"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <TodoProvider>
          <BrowserRouter>
                <Navigations />
                <main>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<MainPage />} />
                    </Routes>
                </main>
              <Footer />
          </BrowserRouter>
          <ToastContainer position="top-right" autoClose={2000} />
      </TodoProvider>
  );
}

export default App;
