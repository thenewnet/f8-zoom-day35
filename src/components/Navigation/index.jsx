import { NavLink } from "react-router";
import styles from './Navigation.module.scss'

const navItems = [
    { to: "/", title: " Trang chủ" },
    { to: "/counter", title: "Counter App" },
    { to: "/todo", title: "Todo List App" },
    { to: "/profile", title: "Profile Card" },
    { to: "/products", title: "Product List" },
    { to: "/comments", title: "Comment System" },
    { to: "/weather", title: "Weather App" },
    { to: "/buttons", title: "Button Components " },
]

function Navigation() {
    return (
        <nav>
            <ul className={styles.menu}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) => isActive ? styles.active : ''}
                            to={item.to}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;