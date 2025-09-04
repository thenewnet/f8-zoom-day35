import { useState, useEffect } from 'react';


import styles from './Comments.module.scss';

function Comments() {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState('');

    const timeArray = ["2 giờ trước", "1 ngày trước"];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => response.json())
            .then(data => {
                setComments(data.map((comment) => {
                    return {
                        ...comment,
                        time: timeArray[Math.floor(Math.random() * timeArray.length)]
                    }
                }));
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleAddComment = () => {
        newComment.trim() && setComments([
            {
                id: comments.length + 1,
                name: 'TrungBQ',
                email: 'trungbqf8@fullstack.edu.vn',
                body: newComment,
                time: '1 phút trước'
            },
            ...comments
        ]);
        setNewComment('');
    }

    return (
        <>
            {
                loading ? <p>Loading...</p> : (
                    <>
                        <div className={styles.wrapper}>
                            <div className={styles.comment_wrapper}>

                                <div className={styles.comment_input}>
                                    <img
                                        src="https://i.pravatar.cc/40"
                                        alt="avatar"
                                        className={styles.avatar}
                                    />
                                    <div className={styles.input_box}>
                                        <textarea
                                            className={styles.textarea}
                                            placeholder="Post your reply"
                                            rows={2}
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                        />
                                        <button className={styles.reply_btn} onClick={handleAddComment}>
                                            Reply
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.comments_list}>
                                    {comments.map((c) => (
                                        <div key={c.id} className={styles.comment_item}>
                                            <img
                                                src={`https://ui-avatars.com/api/?name=${c.name}&background=random`}
                                                alt="avatar"
                                                className={styles.avatar}
                                            />
                                            <div className={styles.comment_body}>
                                                <div className={styles.comment_header}>
                                                    <span className={styles.name}>{c.name}</span>
                                                    <span className={styles.email}>{c.email}</span>
                                                    <span className={styles.time}>· {c.time}</span>
                                                </div>
                                                <p className={styles.content}>{c.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>

    );

}

export default Comments;