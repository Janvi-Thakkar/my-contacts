import { React, useState } from "react";
import "../assets/css/home.css";
import profileImg from "../assets/images/profileImg.svg"
const HomePage = (props) => {
    const [post, changeCurrent] = useState(true);

    return (
        <>

            <div className="home_container">
                <div className="nav_bar">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_10:5816)">
                            <path d="M6.93408 9.33313H24.2674" stroke="white" stroke-width="3" stroke-miterlimit="1" stroke-linecap="round" />
                            <path d="M6.93408 16H24.2674" stroke="white" stroke-width="3" stroke-miterlimit="1" stroke-linecap="round" />
                            <path d="M6.93408 22.6663H24.2674" stroke="white" stroke-width="3" stroke-miterlimit="1" stroke-linecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_10:5816">
                                <rect x="5.60059" y="8" width="20" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="nav_right">

                        <div className="profile">
                            <img src={profileImg} />
                        </div>
                    </div>

                </div>

                <div className="layout">
                    <div className="post_view" onClick={() => changeCurrent(!post)}>
                        <span className={post ?"active":""}/>
                        <span className={post ? "active" : ""} />
                        <span className={post ? "active" : ""} />
                        <span className={post ? "active" : ""} />

                    </div>

                    <div  onClick={() => changeCurrent(!post)}>
                        {post &&
                            <svg _ngcontent-efy-c16="" onClick={() => changeCurrent(!post)} classname={!post ? "active" : ""} xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 12 16" fill="none"><rect _ngcontent-efy-c16="" x="1" y="3" width="10" height="10" rx="1" stroke="#777777" stroke-width="2"></rect><rect _ngcontent-efy-c16="" x="0.25" y="0.25" width="11.5" height="0.5" rx="0.25" stroke="#777777" stroke-width="0.5"></rect><rect _ngcontent-efy-c16="" x="0.25" y="15.25" width="11.5" height="0.5" rx="0.25" stroke="#777777" stroke-width="0.5"></rect></svg>
                        }
                        {!post &&
                            <svg _ngcontent-efy-c16="" xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 12 16" fill="none"><rect _ngcontent-efy-c16="" x="1" y="3" width="10" height="10" rx="1" stroke="#565cd4" stroke-width="2"></rect><rect _ngcontent-efy-c16="" x="0.25" y="0.25" width="11.5" height="0.5" rx="0.25" stroke="#565cd4" stroke-width="0.5"></rect><rect _ngcontent-efy-c16="" x="0.25" y="15.25" width="11.5" height="0.5" rx="0.25" stroke="#565cd4" stroke-width="0.5"></rect></svg>
                        }
                    </div>

                    <div className="filter">

                    </div>
                </div>
                <div className="contentArea">

                    {post &&
                        <div className="grid">
                            {
                                props.contacts.map((data,index) => {
                                    return (

                                        <div className="grid_item" key={index}>
                                                <div className="profile">
                                                    <img src={profileImg} />
                                                </div>
                                                <div className="contact_detail">
                                                <span className="name">
                                                    {data.name}
                                                    </span>

                                                    {/*<span claassName="email">*/}
                                                    {/*{data.email}*/}
                                                    {/*</span>*/}

                                                    <span claassName="mobile">
                                                    {data.mobile}
                                                    </span>
                                                </div>
                                            </div>
                                       
                                    )
                                })
                            }

                        </div>
                    }
                    
                    {!post &&
                        <div className="list">
                            {
                                props.contacts.map(() => {
                                    return (
                                        <>
                                            <div className="List_item">

                                            </div>
                                        </>
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