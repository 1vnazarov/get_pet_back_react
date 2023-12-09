import { useEffect } from "react";
import Profile from "../components/profile";
import Footer from "../components/footer";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import CheckToken from "../modules/checkToken";

const ProfilePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
            if (!CheckToken()) {
                console.log("should go to login!!!!!")
                navigate("/login");
        }
    })
    return (        
        <div>
            <Header />
            <Profile/>
            <Footer />
        </div>
    );
}

export default ProfilePage;