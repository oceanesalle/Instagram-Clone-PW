import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';


function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/* header / avatar /username */}
     <div className="post__header">
      <Avatar
      className="post__avatar"
      alt="rafcese"
      src="https://play-lh.googleusercontent.com/-u-oG-Ni_pco9h7zc3CQl-lFkKJjztO3RGZMjnbaDiznnbXoMQZYUjITHN0BVxYHBg"
      />
      <h3>{username}</h3>
      </div>

      {/* image */}
      <img className="post__image" src={imageUrl} alt=""></img>

      {/* username / caption */}
      <h4 className="post__test"><strong>{username}</strong>{caption}</h4>

    </div>
  )
}

export default Post