import React from 'react';
import Navbar from '../../components/navbar/';
import ContentPosts from '../../components/content_posts/';

const Posts = () => {
    return(
        <React.Fragment>
            <Navbar show/>
            <ContentPosts />
        </React.Fragment>
    );
}

export default Posts;
