import React from "react";
import "./Blog.css";

const Blog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <article className="blog">
            <h3 className="blog-question">{question}</h3>
            <p className="blog-answer">{answer}</p>
        </article>
    );
};

export default Blog;
