import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import firebaseAuth from "./../firebase.init";

function RequireAuth({ children }) {
    let location = useLocation();
    const [user, loading] = useAuthState(firebaseAuth);

    if (loading) {
        return (
            <div
                style={{ height: "100vh" }}
                className="w-100 d-flex justify-content-center align-items-center"
            >
                <h2>Loading ... </h2>
            </div>
        );
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;
