import Profile from "../components/profile";
import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";

const ProfilePage = () => {
    const user = { name: 'Иванов Иван Мванович', email: 'admin@yandex.ru', tel: '+7911-954-45-45', days: 45678 };
    //const [user, setUser] = useState({});
    // setUser(user => ({ ...user, ...pavel }));
    return (        
        <div>
            <Header />
            <Profile data={user}/>
            <Footer />
        </div>
    );
}

export default ProfilePage;