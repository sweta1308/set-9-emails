import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch";

const EmailContext = createContext();

export const EmailProvider = ({children}) => {
    const [emailInboxData, setEmailInboxData] = useState([])
    const [emailSentData, setEmailSentData] = useState([])
    
    const getInboxData = async () => {
        try {
            const response = await fakeFetch('https://example.com/api/allemails')
            if (response.status === 200) {
                setEmailInboxData(response.data.emails)
                setEmailSentData(response.data.sentEmails)
            }
        } catch (response) {
            console.error(response.message)
        }
    }

    const handleClick = (id) => {
        const updateEmail = emailInboxData.map((email) => {
            if (email.id === id) {
                email.read = true
            }
            return email
        })
        setEmailInboxData(updateEmail)
    }

    const readEmail = [];
    const unReadEmail = []
    const emailsList = emailInboxData.map((mail) => mail.read ? readEmail.push(mail) : unReadEmail.push(mail) )

    useEffect(() => {
        getInboxData()
    }, [])

    return (
        <EmailContext.Provider value={{emailInboxData, emailSentData, handleClick, readEmail, unReadEmail}}>
            {children}
        </EmailContext.Provider>
    )
}

export const useEmails = () => useContext(EmailContext)