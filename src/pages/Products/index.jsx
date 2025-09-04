import { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './Products.module.scss';


function Products() {
    const [articles, setArticles] = useState({});
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
            .then(response => response.json())
            .then(data => {
                setArticles(data.map(article => ({
                    ...article,
                    title: article.title[0].toUpperCase() + article.title.slice(1),
                    bodyFixLength: article.body.length > 100 ? article.body.slice(0, 100) + '...' : article.body
                })));
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleView = (article) => {
        console.log(article);
        setArticle(article);
    }

    return (
        <>
            {
                loading ? <p>Loading...</p> : (
                    <>
                        <div className={styles.cards}>
                            {articles.map((article, index) => (
                                <div className={styles.card} key={index}>
                                    <div className={styles.row}>
                                        <div className={styles.left}>Id:</div>
                                        <div className={styles.right}>{article.id}</div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.left}>Title:</div>
                                        <div className={styles.right}>{article.title}</div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.left}>Body:</div>
                                        <div className={styles.right}>{article.bodyFixLength}</div>
                                    </div>

                                    <div className={clsx(styles.row, styles.button_row)}>
                                        <button className={styles.btn_view} onClick={() => handleView(article)}>Xem tiếp</button>
                                    </div>

                                </div>
                            ))}
                        </div>
                        {article &&
                            <div className={styles.modal_overlay} onClick={() => setArticle(null)}>
                                <div className={styles.modal} onClick={e => e.stopPropagation()}>
                                    <button className={styles.close_btn} onClick={() => setArticle(null)}>✖</button>
                                    <h2 className={styles.title}>{article.title}</h2>
                                    <p>{article.body}</p>
                                </div>
                            </div>
                        }
                    </>
                )
            }

        </>

    );
}

export default Products;