import { Link } from "react-router-dom"
import { useEmails } from "../context/EmailContext"
import { Home } from "./Home"
import { useState } from "react";

export const Inbox = () => {
    const {emailInboxData, handleClick, unReadEmail, readEmail} = useEmails();
    

    return (
        <>
            <Link className="home" to='/'>Get Back to Home Page</Link>
            <Home />
            <div className="position-component">
            <h1>Inbox</h1>
            <p>Unread Emails: {unReadEmail.length} </p>
            <p>Read Emails: {readEmail.length} </p>
            <ul>
                {emailInboxData.map(({id, subject, read}) => (
                    <li key={id}>
                        <Link className="links" to={`/inboxdetails/${id}`}>{subject}</Link>
                        {read ? '' : <button onClick={() => handleClick(id)}>Mark As Read</button>}
                    </li>
                ))}
            </ul>
            </div>
            
        </>
        
    )
}