import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';


function Post() {
  return (
    <div className="post">
      {/* header / avatar /username */}
     <div className="post__header">
      <Avatar
      className="post__avatar"
      alt="rafcese"
      src="https://play-lh.googleusercontent.com/-u-oG-Ni_pco9h7zc3CQl-lFkKJjztO3RGZMjnbaDiznnbXoMQZYUjITHN0BVxYHBg"
      />
      <h3>Username</h3>
      </div>

      {/* image */}
      <img className="post__image" src="https://www.igeeksblog.com/wp-content/uploads/2022/01/By-the-sea-630x450.jpg" alt=""></img>

      {/* username / caption */}
      <h4 className="post__test"><strong>Username</strong>caption</h4>

    </div>
  )
}

export default Post