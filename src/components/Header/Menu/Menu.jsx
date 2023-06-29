import "./Menu.css";

const Menu = ({onClick, isActiveMenu}) => {
    return (
        <div className={isActiveMenu ? 'burger active' : 'burger'} onClick={onClick}>
            <span className='burger__center'></span>
        </div>
    )
}

export default Menu;
