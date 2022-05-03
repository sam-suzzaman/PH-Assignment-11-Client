import Header from "./Components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import SignleInventory from "./Pages/SingleInventory/SignleInventory";
import Footer from "./Components/Footer/Footer";
import LogInPage from "./Pages/LogInPage/LogInPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/inventory/:id" element={<SignleInventory />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
