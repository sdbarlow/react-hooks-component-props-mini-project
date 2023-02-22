import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    console.log(posts);
    return <main>{posts.map((post) => (
    <Article 
        key={post.id}
        {...post}/>))}
    </main>
}

export default ArticleList;