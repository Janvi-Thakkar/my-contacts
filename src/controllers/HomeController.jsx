import { React, useState, useEffect } from "react";
import HomePage from "../components/Home";

import { toast } from "react-toastify";
import { useHistory } from "react-router";
import axios from "axios";

const HomeController = () => {
    const userId = localStorage.getItem('user');
    const apiUrl = "https://my-contact-api-backend.herokuapp.com/api/";
    const history = useHistory();
    const [user, editUser] = useState({ name:"", email:"", avtar: "", mobile: "" })
    const [contacts, EditContacts] = useState([{ name: "", email: "", avtar: "", mobile: "" }])
    const [post, changeCurrent] = useState(true);
    const [isEdit, changeType] = useState(false);
    const [isPopup, changePopup] = useState(false);
    const [PopupTitle, changeTitle] = useState("Add Contact")
    const [editDetail, Edit] = useState([{ name: "", mobile: "", email: "" }])
    const [contactDetail, AddContact] = useState([{ name: "", mobile: "", email: "" }])
    const [editSelf, EditSelf] = useState({ name: "", email: "", avtar: "", mobile: "" })
    const [self, isSelf] = useState(false)
    const [sidebar, openSideBar] = useState(false)
    const [Index,editIndex] =useState(0)


    const selfPopup = () => {
        changePopup(true);
        isSelf(true)
        changeTitle("My Details")
    }

    const editData = (event, which, attr) => {
        if (which == 'self') {
            EditSelf({ name: event.target.value, email: user.email, mobile: user.mobile, avtar: "" })
        }
        else if (which == 'add') {
            if (attr == 'name') {
                AddContact([{ name: event.target.value, mobile: contactDetail[0].mobile, email: contactDetail[0].email }])
            }
            else if (attr == 'email') {
                AddContact([{ name: contactDetail[0].name, mobile: contactDetail[0].mobile, email: event.target.value }])
            }
            else if (attr == 'mobile') {
                AddContact([{ name: contactDetail[0].name, mobile: event.target.value, email: contactDetail[0].email }])
            }
        }
        else if (which == 'edit') {
            if (attr == 'name') {
                Edit([{ name: event.target.value, mobile: editDetail[0].mobile, email: editDetail[0].email }])
            }
            else if (attr == 'email') {
                Edit([{ name: editDetail[0].name, mobile: editDetail[0].mobile, email: event.target.value }])
            }
            else if (attr == 'mobile') {
                Edit([{ name: editDetail[0].name, mobile: event.target.value, email: editDetail[0].email }])
            }
        }
    }
    const editFunc = (index,data) => {
        Edit([{ name: data.name, mobile: data.mobile, email: data.email }]);
        changeType(true);
        changeTitle("Edit Contact");
        changePopup(true);
        isSelf(false)
        editIndex(index)
    }

    const addFunc = () => {
        changeType(false);
        changeTitle("Add Contact");
        changePopup(true)
        isSelf(false)
    }

    const logout = () => {
        localStorage.removeItem('signIn');
        localStorage.removeItem('user');
        localStorage.removeItem('password')
        history.push('/signin')
    }


   

    useEffect(async () => {
        await getUser();
    }, [])


    const postContact = async (event, data) => {
        event.preventDefault();
   
        if (data.email != null && data.mobile.length == 10 && data.name != null) {

            let res = await axios({
                url: apiUrl + "addContact",
                method: 'patch',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': userId
                },
                data: data
            }
            );

            if (res.status == 401) {
                toast.error("Please try again");
            }
            else {
                let newCont = contacts;
                newCont.push(data);
                EditContacts([...newCont])
                changePopup(false)
                AddContact([{ name: "", mobile: "", email: "" }])
                toast.success("Added contact successfully");

            }
        }
        else {
            if (data.email == "" || data.email == null || data.mobile.length == 0 || data.email.length == 0) {
                toast.error("All fields are mandatory");
            }
            else if (data.mobile.length != 0) {
                toast.error("Mobile number should be of 10 digit");
            }
        }

    }


    const delContact = async (index) => {
       
        let data = contacts[index];
        if (data.email != null && data.mobile.length == 10 && data.name != null) {

            let res = await axios({
                url: apiUrl + "delContact",
                method: 'patch',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': userId
                },
                data: data
            }
            );

            if (res.status == 401) {
                toast.error("User has not been deleted");
            }
            else {
                let newCont = contacts;
                newCont.splice(index, index + 1);
                EditContacts([...newCont])
               
                toast.success("Deleted contact successfully");

            }
        }
        else {
              toast.error("User can not be deleted");
          
           
        }

    }


    const patchContact = async (event,data) => {
         
        event.preventDefault();
        if (data.email != null && data.mobile.length == 10 && data.name != null) {

            let res = await axios({
                url: apiUrl + "editContact",
                method: 'patch',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': userId
                },
                data: data
            }
            );

            if (res.status == 401) {
                toast.error("Please try again!");
            }
            else {
                let newCont = contacts;
                newCont[Index] = data;
                EditContacts([ ...newCont ])
                changePopup(false)
                toast.success("Updated successfully");

            }
        }
        else {
            toast.error("Please try again!");

        }
    }

    const editSelfs = async (event,data) => {
        event.preventDefault();
        if ( data.name != null && data.name!="") {

            let res = await axios({
                url: apiUrl + "editUser",
                method: 'patch',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': userId
                },
                data: data
            }
            );

            if (res.status == 401) {
                toast.error("Please try again");
            }
            else {
                let newCont = { name: data.name, email: data.email, mobile: data.mobile, avtar: "" };
                editUser({ ...newCont })
                changePopup(false)
                toast.success("Modified successfully");

            }
        }
        else {
            toast.error("Name should not be null");

        }

    }
    const getUser = async () => {
        let res = await axios({
            url: apiUrl + "user",
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            }
        }
        );

        editUser({ name: res.data.result[0].name, email: res.data.result[0].email, mobile: res.data.result[0].mobile, avtar: "" })
        EditContacts(res.data.result[0].contacts);
        EditSelf({ ...user })

    }
    return (

        <HomePage
            user={user}
            contacts={contacts}
            logout={logout}
            postContact={postContact}
            patchContact={patchContact}
            editSelf={editSelf}
            sidebar={sidebar}
            selfPopup={selfPopup}
            changePopup={changePopup}
            isPopup={isPopup}
            PopupTitle={PopupTitle}
            isEdit={isEdit}
            self={self}
            editData={editData}
            contactDetail={contactDetail}
            editDetail={editDetail}
            EditSelf={EditSelf}
            openSideBar={openSideBar}
            changeCurrent={changeCurrent}
            post={post}
            addFunc={addFunc}
            editFunc={editFunc}
            delContact={delContact}
            editSelfs={editSelfs}
            Index={Index}
            editIndex={editIndex}
        />
    )
}

export default HomeController;