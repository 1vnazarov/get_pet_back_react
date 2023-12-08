import Profile from "../components/profile";
import Footer from "../components/footer";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const user = { name: 'Иванов Иван Мванович', email: 'admin@yandex.ru', tel: '+7911-954-45-45', days: 45678 };
    const navigate = useNavigate();
    if (!localStorage.getItem("token")) navigate("/login");
    return (        
        <div>
            <Header />
            <Profile data={user}/>
            <Footer />
        </div>
    );
}

export default ProfilePage;