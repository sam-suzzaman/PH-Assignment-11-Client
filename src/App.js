import Header from "./Components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import SignleInventory from "./Pages/SingleInventory/SignleInventory";
import Footer from "./Components/Footer/Footer";
import LogInPage from "./Pages/LogInPage/LogInPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./utilities/RequireAuth";
import InventoriesPage from "./Pages/InventoriesPage/InventoriesPage";
import AddItemPage from "./Pages/AddItemPage/AddItemPage";
import MyItemsPage from "./Pages/MyItemsPage/MyItemsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route
                    path="/inventory/:id"
                    element={
                        <RequireAuth>
                            <SignleInventory />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/additem"
                    element={
                        <RequireAuth>
                            <AddItemPage />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/allinventories"
                    element={
                        <RequireAuth>
                            <InventoriesPage />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/myitems"
                    element={
                        <RequireAuth>
                            <MyItemsPage />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
