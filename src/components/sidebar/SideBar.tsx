interface SideBarProps {
    email: string,
    onClickLogout: () => void
}
const SideBar: React.FC<SideBarProps> = ({email, onClickLogout}) => {
    return ( 
        <div className="sidebar">
            <h1>Hello</h1>
            <p>{email}</p>
            <button onClick={onClickLogout}>Logout</button>
        </div>
     );
}
 
export default SideBar;