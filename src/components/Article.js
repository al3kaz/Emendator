import React from 'react';

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