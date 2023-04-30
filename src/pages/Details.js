import { useParams } from "react-router";
import { useEmails } from "../context/EmailContext"
import { Home } from "./Home";
import { Link } from "react-router-dom";

export const Details = () => {
    const {emailInboxData} = useEmails();
    const {id} = useParams()

    const findEmail = emailInboxData.find(email => email.id === Number(id))
    console.log(findEmail) 
    return (
        <>
            <Link className="home" to='/'>Get Back to Home Page</Link>
            <Home />
            <div className="position-component">
                <h2>Email Details</h2>
                <h3>{findEmail?.subject}</h3>
                <p>From: {findEmail?.sender}</p>
                <p>Message: {findEmail?.message}</p>
            </div>
        </>
    )
}