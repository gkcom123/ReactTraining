import React from 'react'
import PropTypes from 'prop-types';
import "./Posts.css";

const Posts = ({posts}) => (
  <ul className='list-style'>
    {posts.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
