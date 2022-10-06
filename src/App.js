import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigations from "./components/Navigations";
import Footer from "./components/Footer";
import About from "./pages/About";
import MainPage from "./pages/MainPage";
import {TodoProvider} from "./context/TodoAppContext"

function App() {
  return (
      <TodoProvider>
          <BrowserRouter><div className="flex flex-col h-screen">
              <Navigations />
              <main>
                  <Routes>
                      <Route path="/about" element={<About />} />
                      <Route path="/" element={<MainPage />} />
                  </Routes>
              </main>
              <Footer />
          </div>
          </BrowserRouter>
      </TodoProvider>
  );
}

export default App;
