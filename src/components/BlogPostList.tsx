import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";

const BlogPostList = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const MdFetch = async (name: string) => {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${name}`
    );
    const resJson = await res.json();
    const newPosts = [...resJson["items"], ...posts];
    setPosts(newPosts);
  };

  useEffect(() => {
    MdFetch("david-nagarpowers");
  }, []);

  return (
    <section className="work" id="blog">
      <div className="row">
        <h2>Blog</h2>
        <div className="work__boxes">
          {posts.map((post) => (
            <BlogPost post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostList;
