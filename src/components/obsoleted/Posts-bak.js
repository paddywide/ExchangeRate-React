import React, {useEffect, useState} from 'react';
import { getposts } from '../../services/postService-bak';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getposts().then((response) => {
            setPosts(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    // useEffect(() => {
    //         console.log("Load Post"); 
    // }, []); 

    return <></>;
}