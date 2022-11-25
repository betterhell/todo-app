import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigations from "./components/Navigations";
import Footer from "./components/Footer";
import About from "./pages/About";
import TodosPage from "./pages/TodosPage";
import {TodoProvider} from "./context/todoAppContext"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from "./components/ForgotPassword";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
      <TodoProvider>
          <BrowserRouter>
              <Navigations />
                  <Routes>
                      <Route path="/sign-up" element={<SignUp />} />
                      <Route path="/sign-in" element={<SignIn />} />
                      <Route path="/forgot-password" element={<ForgotPassword />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/" element={<TodosPage />} />
                  </Routes>
              <Footer />
          </BrowserRouter>
          <ToastContainer position="top-right" autoClose={2000} />
      </TodoProvider>
  );
}

export default App;
