import React, {useEffect, useState} from 'react';
import { getposts } from '../services/postService';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     getposts().then((response) => {
    //         setPosts(response.data);
    //         console.log(response.data);
    //     });
    // }, []);
    useEffect(() => {
            console.log("Load Post");
    }, []);

    return <></>;
}