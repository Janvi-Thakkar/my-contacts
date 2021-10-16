import { React, useState }from "react";
import HomePage from "../components/Home";
import { useHistory } from "react-router";

const HomeController = () => {
    const history = useHistory();
    const user = useState({name:localStorage.getItem('userName'),email:localStorage.getItem('email'),avtar:localStorage.getItem('picNum')+'.jpg',mobile:localStorage.getItem('mobile')})
    const [contacts, EditContacts] = useState([{ name: "Janvi Thakkar", email: "janvithakkar.583@gmail.com", avtar: "", mobile: "8320996025" }, { name: "Janvi Thakkar", email: "janvithakkar.583@gmail.com", avtar: "", mobile: "8320996025" }, { name: "Janvi Thakkar", email: "janvithakkar.583@gmail.com", avtar: "", mobile: "8320996025" }, { name: "Janvi Thakkar", email: "janvithakkar.583@gmail.com", avtar: "", mobile: "8320996025" }, { name: "Janvi Thakkar", email: "janvithakkar.583@gmail.com", avtar: "", mobile: "8320996025" }, { name: "Janvi Thakkar", email: "janvithakkar.583@gmail.com", avtar: "", mobile: "8320996025" }])
    const logout = () => {
        localStorage.removeItem('signIn');
        history.push('/signin')
    }
    return (
        <HomePage user={user} contacts={contacts} logout={logout}/>
    )
}

export default HomeController;