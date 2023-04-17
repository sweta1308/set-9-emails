import { NavLink } from "react-router-dom"

export const Home = () => {

    const activeState = ({isActive}) => ({
        color: isActive ? 'rgb(235, 184, 184)' : '',
        fontWeight: isActive ? 'bold' : ''
    })
    return (
        <>
            <h1>My Mail Box</h1>
            <NavLink className='inbox-link' style={activeState} to='/inbox'>Inbox</NavLink> <br />  
            <NavLink className='sent-link' style={activeState} to='/sent'>  Sent</NavLink>

        </>
    )
}