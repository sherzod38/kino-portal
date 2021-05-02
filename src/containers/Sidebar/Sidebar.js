import './Sidebar.scss'


const Sidebar = ({isOpened}) => {
    return (
        <div className={`sidebar ${isOpened ? 'opened' : '' } `}>
            <h4>Top</h4>
            <h4>Popular</h4>
            <h4>New movies</h4>
            <h4>Childern movies</h4>
        </div>
    )
}

export default Sidebar;