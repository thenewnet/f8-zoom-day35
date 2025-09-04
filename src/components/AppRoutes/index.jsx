import { BrowserRouter as Router, Routes, Route } from "react-router";

import Navigation from '../Navigation';
import TodoApp from '../../pages/Todo';
import Home from "../../pages/Home";
import Counter from "../../pages/Counter";
import ProfileCard from "../../pages/Profile";
import Products from "../../pages/Products";
import Comments from "../../pages/Comments";
import Weather from "../../pages/Weather";
import Buttons from "../../pages/Button";
import styles from './AppRoutes.module.scss';

function AppRoutes() {
    return (
        <Router>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>F8 - Learning React - Day 35</h1>

                <Navigation />
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/todo" element={<TodoApp />} />
                        <Route path="/profile" element={<ProfileCard />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/comments" element={<Comments />} />
                        <Route path="/weather" element={<Weather />} />
                        <Route path="/buttons" element={<Buttons />} />
                    </Routes>
                </div>
            </div>

        </Router>
    )
}

export default AppRoutes;