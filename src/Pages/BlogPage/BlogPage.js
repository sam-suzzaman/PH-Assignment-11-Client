import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import SecTitle from "../../Components/SecTitle/SecTitle";
import Blog from "../../Components/Blog/Blog";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((result) => setBlogs(result))
            .catch((err) => console.log(err));
    }, []);
    return (
        <section className="blog-wrapper">
            <SecTitle />
            <div className="blog-row">
                {blogs.map((blog) => (
                    <Blog key={blog._id} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default BlogPage;
