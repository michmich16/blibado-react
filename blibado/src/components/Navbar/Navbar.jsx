import style from './Navbar.module.scss'

export const Navbar = () => {

return(
    <nav className={style.navbarStyle}>
   <ul>
    <li><a href="#">Om Os</a></li>
    <li><a href="#">Locations</a></li>
    <li><a href="#">Aktuelt</a></li>
    <li><a href="#">SignUp</a></li>
   </ul>
    </nav>
)

}