import { React, useState } from "react";
import "../assets/css/home.css";
import profileImg from "../assets/images/profileImg.svg"
const HomePage = (props) => {
    return (
        <>

            <div className="home_container">
                {props.sidebar && <div className="side_bar">
                    <div className="menu_item" onClick={() => { props.selfPopup(true) }}> My Profile</div>
                    <div className="menu_item" onClick={() => { props.logout() }}>Logout</div>
                </div>
                }
                {props.isPopup && <div className="popup">
                    <div className="grayArea" onClick={() => props.changePopup(false)}>
                          
                    </div>
                    <div className="contentArea" >
                        <div className="addContact">
                            <div className="contactTitle">
                                {props.PopupTitle}
                            </div>
                            <div className="popupForm" >
                                {!props.isEdit && !props.self &&<form>
                                    <input name="contact_name" type="text" defaultValue={props.contactDetail[0].name} placeholder="Enter Name" onChange={(event) => { props.editData(event, 'add', 'name') }}/>
                                    <input name="contact_email" type="email" defaultValue={props.contactDetail[0].email} placeholder="Enter Email" onChange={(event) => { props.editData(event, 'add', 'email') }}/>
                                    <input name="contact_mobile" type="string" defaultValue={props.contactDetail[0].mobile} placeholder="Enter Number" onChange={(event) => { props.editData(event, 'add', 'mobile') }}/>

                                    <button onClick={(event) => { props.postContact(event, props.contactDetail[0])}}>
                                        Add Contact
                                    </button>
                                </form>
                                }
                                {
                                    props.isEdit && !props.self && <form>
                                        <input name="edit_name" type="text" defaultValue={props.editDetail[0].name} placeholder="Enter Name" onChange={(event) => { props.editData(event, 'edit', 'name') }}/>
                                        <input name="edit_email" type="email" defaultValue={props.editDetail[0].email} placeholder="Enter Email" onChange={(event) => { props.editData(event, 'edit', 'email') }}/>
                                        <input name="edit_mobile" type="string" defaultValue={props.editDetail[0].mobile} placeholder="Enter Number" readOnly />

                                        <button onClick={(event) => { props.patchContact(event,props.editDetail[0]) }}>
                                            Save
                                    </button>
                                    </form>
                                }
                                {
                                    props.self &&
                                    <form>
                                        <input name="self_name" type="text" defaultValue={props.user.name} placeholder="Enter Name" onChange={(event) => { props.editData(event,'self','name')}}/>
                                        <input name="self_email" type="email" value={props.user.email} placeholder="Enter Email" readOnly/>
                                        <input name="self_mobile" type="string" defaultValue={props.user.mobile} placeholder="Enter Number" readOnly/>

                                        <button onClick={(event) => { props.editSelfs(event,props.editSelf)}}>
                                            Save
                                    </button>
                                    </form>
                                }
                            </div>

                        </div>
                    </div>
                </div>
                }
                <div className="nav_bar">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => { props.openSideBar(!props.sidebar) }}>
                        <g clipPath="url(#clip0_10:5816)">
                            <path d="M6.93408 9.33313H24.2674" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round" />
                            <path d="M6.93408 16H24.2674" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round" />
                            <path d="M6.93408 22.6663H24.2674" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_10:5816">
                                <rect x="5.60059" y="8" width="20" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="nav_right">

                        <div className="profile" onClick={() => { props.selfPopup(true)}}>
                            <img src={profileImg} />
                        </div>
                    </div>

                </div>

                <div className="layout">
                    <div className="post_view" onClick={() => props.changeCurrent(!props.post)}>
                        <span className={props.post ?"active":""}/>
                        <span className={props.post ? "active" : ""} />
                        <span className={props.post ? "active" : ""} />
                        <span className={props.post ? "active" : ""} />

                    </div>

                    <div className="list_icon" onClick={() => props.changeCurrent(!props.post)}>
                        {props.post &&
                            <svg _ngcontent-efy-c16="" onClick={() => props.changeCurrent(!props.post)} className={!props.post ? "active" : ""} xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 12 16" fill="none"><rect _ngcontent-efy-c16="" x="1" y="3" width="10" height="10" rx="1" stroke="#777777" strokeWidth="2"></rect><rect _ngcontent-efy-c16="" x="0.25" y="0.25" width="11.5" height="0.5" rx="0.25" stroke="#777777" strokeWidth="0.5"></rect><rect _ngcontent-efy-c16="" x="0.25" y="15.25" width="11.5" height="0.5" rx="0.25" stroke="#777777" strokeWidth="0.5"></rect></svg>
                        }
                        {!props.post &&
                            <svg _ngcontent-efy-c16="" xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 12 16" fill="none"><rect _ngcontent-efy-c16="" x="1" y="3" width="10" height="10" rx="1" stroke="#565cd4" strokeWidth="2"></rect><rect _ngcontent-efy-c16="" x="0.25" y="0.25" width="11.5" height="0.5" rx="0.25" stroke="#565cd4" strokeWidth="0.5"></rect><rect _ngcontent-efy-c16="" x="0.25" y="15.25" width="11.5" height="0.5" rx="0.25" stroke="#565cd4" strokeWidth="0.5"></rect></svg>
                        }                                             
                    </div>
                    <div className="add" onClick={() => { props.addFunc() }}>
                        <svg fill="blue" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512"  >
                            <polygon fill="#5c56d4" points="512,229.053 451.368,229.053 451.368,168.421 410.947,168.421 410.947,229.053   350.316,229.053 350.316,269.474 410.947,269.474 410.947,330.105 451.368,330.105 451.368,269.474 512,269.474 " />
                            <path fill="#5c56d4" d="M239.915,276.724c33.652-18.238,56.506-53.864,56.506-94.829  c0-59.531-48.259-107.789-107.789-107.789S80.842,122.364,80.842,181.895c0,40.965,22.854,76.591,56.506,94.829  C66.732,283.298,0,352.877,0,437.895h377.263C377.263,352.877,310.531,283.298,239.915,276.724z" />
                            <path fill="#5c56d4" d="M188.632,437.895h188.632c0-85.018-66.732-154.597-137.348-161.171  c33.652-18.238,56.506-53.864,56.506-94.829c0-59.531-48.259-107.789-107.789-107.789V437.895z" />
                            <rect x="451.368" y="229.053" fill="#5c56d4" width="60.632" height="40.421" />
                           
                        </svg>
                    </div>

                </div>
                <div className="contentArea">

                    {props.post &&
                        <div className="grid">
                            {
                                props.contacts.map((data,index) => {
                                    return (

                                        <div className="grid_item" key={index}>
                                            <svg className="edit_icon" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="494.936px" height="494.936px" viewBox="0 0 494.936 494.936" onClick={() => { props.editFunc(index,data)}}>
                                                    <path fill="#5c56d4" d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157    c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21    s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741    c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z" />
                                                    <path fill="#5c56d4" d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069    c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963    c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692    C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107    l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005    c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z" />
                                                    
                                            </svg>
                                            <svg onClick={() => {props.delContact(index)}}xmlns="http://www.w3.org/2000/svg" className="delete_icon" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 297 297" >

                                                <path fill="#5c56d4" d="M229.554,145.738l4.264-51.168h7.462c5.646,0,10.224-4.578,10.224-10.224V65.688c0-17.596-14.316-31.912-31.912-31.912     h-35.564v-4.723C184.028,13.032,170.994,0,154.975,0h-29.82c-16.02,0-29.052,13.032-29.052,29.052v4.723H60.539     c-17.596,0-31.912,14.316-31.912,31.912v18.658c0,5.646,4.578,10.224,10.224,10.224h7.462L60.205,261.3     c1.668,20.019,18.711,35.7,38.799,35.7h82.119c19.849,0,36.715-15.313,38.723-34.991c27.664-5.705,48.527-30.251,48.527-59.579     C268.374,176.649,252.245,154.579,229.554,145.738z M116.551,29.052c0-4.744,3.86-8.604,8.604-8.604h29.82     c4.745,0,8.605,3.86,8.605,8.604v4.723h-47.029V29.052z M49.073,74.123v-8.435c0-6.322,5.143-11.465,11.465-11.465h159.053     c6.322,0,11.465,5.143,11.465,11.465v8.435H49.073z M181.124,276.552H99.005c-9.538,0-17.63-7.445-18.422-16.95L66.83,94.57     h146.469l-3.923,47.076c-0.611-0.018-1.22-0.047-1.835-0.047c-33.543,0-60.831,27.289-60.831,60.831     c0,30.647,22.785,56.06,52.303,60.221C196.942,270.65,189.614,276.552,181.124,276.552z M207.541,242.814     c-22.268,0-40.384-18.116-40.384-40.384s18.116-40.384,40.384-40.384s40.384,18.116,40.384,40.384     S229.809,242.814,207.541,242.814z" />
                                                <path fill="#5c56d4" d="M222.002,202.431l9.64-9.64c3.991-3.993,3.991-10.467-0.002-14.459c-3.994-3.992-10.465-3.992-14.459,0l-9.64,9.64     l-9.64-9.64c-3.994-3.992-10.465-3.992-14.459,0c-3.993,3.993-3.993,10.466,0,14.459l9.64,9.64l-9.64,9.64     c-3.993,3.993-3.993,10.466,0,14.459c1.997,1.996,4.613,2.994,7.23,2.994s5.233-0.998,7.23-2.994l9.64-9.64l9.64,9.64     c1.997,1.996,4.613,2.994,7.23,2.994c2.617,0,5.233-0.998,7.23-2.994c3.993-3.993,3.993-10.466,0-14.459L222.002,202.431z" />


                                            </svg>
                                                <div className="profile">
                                                    <img src={profileImg} />
                                                </div>
                                                <div className="contact_detail">
                                                <span className="name">
                                                    {data.name}
                                                    </span>
                                                <span className="mobile">
                                                    {data.mobile}
                                                </span>
                                                </div>
                                            </div>
                                       
                                    )
                                })
                            }

                        </div>
                    }
                    
                    {!props.post &&
                        <div className="list">
                            {
                            props.contacts.map((data, index) => {
                                return (
                                    <div key= {index}>
                                            <div className="list_item">
                                                <svg className="edit_icon" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="494.936px" height="494.936px" viewBox="0 0 494.936 494.936" onClick={() => { props.editFunc(index,data) }}>
                                                    <path fill="#5c56d4" d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157    c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21    s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741    c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z" />
                                                    <path fill="#5c56d4" d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069    c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963    c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692    C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107    l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005    c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z" />

                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="delete_icon" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 297 297" >
                                                    
                                                    <path fill="#5c56d4"  d="M229.554,145.738l4.264-51.168h7.462c5.646,0,10.224-4.578,10.224-10.224V65.688c0-17.596-14.316-31.912-31.912-31.912     h-35.564v-4.723C184.028,13.032,170.994,0,154.975,0h-29.82c-16.02,0-29.052,13.032-29.052,29.052v4.723H60.539     c-17.596,0-31.912,14.316-31.912,31.912v18.658c0,5.646,4.578,10.224,10.224,10.224h7.462L60.205,261.3     c1.668,20.019,18.711,35.7,38.799,35.7h82.119c19.849,0,36.715-15.313,38.723-34.991c27.664-5.705,48.527-30.251,48.527-59.579     C268.374,176.649,252.245,154.579,229.554,145.738z M116.551,29.052c0-4.744,3.86-8.604,8.604-8.604h29.82     c4.745,0,8.605,3.86,8.605,8.604v4.723h-47.029V29.052z M49.073,74.123v-8.435c0-6.322,5.143-11.465,11.465-11.465h159.053     c6.322,0,11.465,5.143,11.465,11.465v8.435H49.073z M181.124,276.552H99.005c-9.538,0-17.63-7.445-18.422-16.95L66.83,94.57     h146.469l-3.923,47.076c-0.611-0.018-1.22-0.047-1.835-0.047c-33.543,0-60.831,27.289-60.831,60.831     c0,30.647,22.785,56.06,52.303,60.221C196.942,270.65,189.614,276.552,181.124,276.552z M207.541,242.814     c-22.268,0-40.384-18.116-40.384-40.384s18.116-40.384,40.384-40.384s40.384,18.116,40.384,40.384     S229.809,242.814,207.541,242.814z" />
                                                    <path fill="#5c56d4"  d="M222.002,202.431l9.64-9.64c3.991-3.993,3.991-10.467-0.002-14.459c-3.994-3.992-10.465-3.992-14.459,0l-9.64,9.64     l-9.64-9.64c-3.994-3.992-10.465-3.992-14.459,0c-3.993,3.993-3.993,10.466,0,14.459l9.64,9.64l-9.64,9.64     c-3.993,3.993-3.993,10.466,0,14.459c1.997,1.996,4.613,2.994,7.23,2.994s5.233-0.998,7.23-2.994l9.64-9.64l9.64,9.64     c1.997,1.996,4.613,2.994,7.23,2.994c2.617,0,5.233-0.998,7.23-2.994c3.993-3.993,3.993-10.466,0-14.459L222.002,202.431z" />
                                                           
                                                    
                                                </svg>
                                                <div className="profile">
                                                    <img src={profileImg} />
                                                </div>
                                                <div className="contact_detail">
                                                    <span className="name">
                                                        {data.name}
                                                    </span>

                                                    <span className="email">
                                                    {data.email}
                                                    </span>

                                                    <span className="mobile">
                                                        {data.mobile}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    }
                </div>
              

            </div>

        </>
    )
}

export default HomePage;