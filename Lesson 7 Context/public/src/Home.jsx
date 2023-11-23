import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserComments from './UserComments';
import UserPosts from './UserPosts';

const Home = () => {
    let [arr, setArr] = useState([]);

    useEffect(() => {
        function fetchData() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((data) => setArr(data));
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Home Component</h1>
            <nav>
                <ul className={'HomeCss'}>
                    <li>
                        <Link id="CommentsID"  to="UserComments/1">User Comments</Link>
                    </li>
                    <li>
                        <Link ID="PostsID"  to="UserPosts/1">User Posts</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="UserComments/:id" element={<UserComments arr={arr} />} />
                <Route path="UserPosts/:id" element={<UserPosts arr={arr} />} />
            </Routes>
        </div>
    );
};

export default Home;