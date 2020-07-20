import React from 'react';
import '../styles/Article.css'

const Article = (props) => {
   return (
      <>
         <p className="article">
            {props.text}
         </p>
      </>
   );
}

export default Article;