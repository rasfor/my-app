import module from "./ProfileInfo.module.css";
import React from "react";

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={module.contacts}>
        <b>{contactTitle} :</b>
        {contactValue}
    </div>
}

export default Contacts;