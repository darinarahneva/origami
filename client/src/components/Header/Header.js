import style from './Header.module.css';
import NavigationItem from './NavigationItem';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem">
                    <img src="/white-origami-bird.png" className='logo'  alt="white origami" />
                </li>
                <a  href="home.html" >
                    <NavigationItem>Home</NavigationItem>
                </a>
                <a  href="home.html">
                    <NavigationItem>About</NavigationItem>
                </a>
                <a  href="home.html">
                    <NavigationItem>Contact Us</NavigationItem>
                </a>
            </ul>
        </nav>
    );
};

export default Header;