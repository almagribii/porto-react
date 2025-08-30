import React from "react";
import portfolioData from "../data/portfolioData.json";
import { Link } from "react-router-dom";

function BlogPage() {
    const { blogPosts } = portfolioData;
    
    return (
        <div style={{ padding: '2rem' }}>
      <h1>Blog</h1>
      {blogPosts.map(post => (
        <div key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0', marginBottom: '1rem' }}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <small>{post.date}</small>
          <Link to={`/blog/${post.slug}`} style={{ marginLeft: '1rem' }}>Baca Selengkapnya</Link>
        </div>
      ))}
    </div>
    );
}

export default BlogPage;
    