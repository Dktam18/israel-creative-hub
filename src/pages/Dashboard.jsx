import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/");
                return;
            }
            try {
                const response = await axios.get("http://localhost:5000/user", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            } catch (error) {
                console.error(error);
                navigate("/");
            }
        };
        fetchUserData();
    }, [navigate]);

    return (
        <div>
            <h2>Welcome, {user?.name}</h2>
            <p>Email: {user?.email}</p>
            <button onClick={() => { localStorage.removeItem("token"); navigate("/"); }}>Logout</button>
        </div>
    );
};

export default Dashboard;
