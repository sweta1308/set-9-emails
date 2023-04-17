import { useEmails } from "../context/EmailContext";
import { Home } from "./Home";
import { Link } from "react-router-dom";

export const Sent = () => {

    const {emailSentData} = useEmails();

    return (
        <>
            <Link className="home" to='/'>Get Back to Home Page</Link>
            <Home />
            <div className="position-component">
            <h1>Sent Emails</h1>
            <ul>
                {emailSentData.map(({id, subject}) => (
                    <li key={id}>
                        <Link className="links" to={`/sentdetails/${id}`}>{subject}</Link>
                    </li>
                ))}
            </ul>
            </div>
            
        </>
        
    )
}