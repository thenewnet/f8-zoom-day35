import { useEffect, useState } from 'react'

import styles from './Profile.module.scss';


function ProfileCard() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <>
            {
                loading ? <p>Loading...</p> : (
                    <div className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.left}>Name:</div>
                            <div className={styles.right}>{user.name}</div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.left}>User Name:</div>
                            <div className={styles.right}>{user.username}</div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.left}>Email:</div>
                            <div className={styles.right}>{user.email}</div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.left}>Phone:</div>
                            <div className={styles.right}>{user.phone}</div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.left}>Website:</div>
                            <div className={styles.right}>{user.website}</div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.left}>Address:</div>
                            <div className={styles.right}>{user.address?.street} - {user.address?.city}</div>
                        </div>

                    </div>
                )
            }

        </>

    );
}

export default ProfileCard;