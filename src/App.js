import Header from "./Components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import SignleInventory from "./Pages/SingleInventory/SignleInventory";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/inventory/:id" element={<SignleInventory />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
