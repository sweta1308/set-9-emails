import { useParams } from "react-router";
import { useEmails } from "../context/EmailContext"
import { Home } from "./Home";
import { Link } from "react-router-dom";

export const SentDetails = () => {
    const {emailSentData} = useEmails();
    const {id} = useParams()

    const findSentEmail = emailSentData.find(email => email.id === Number(id))

    return (
        <>
            <Link className="home" to='/'>Get Back to Home Page</Link>
            <Home />
            <div className="position-component">
            <h2>Sent Email Details</h2>
            <h3>{findSentEmail?.subject}</h3>
            <p>To: {findSentEmail?.to}</p>
            <p>Message: {findSentEmail?.message}</p>
            </div>
        </>
    )
}