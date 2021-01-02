import React, { useState, useEffect } from "react"

// Scss file
import '../../assets/stylesheets/components/_tags.scss'

const Tags = () => {

  const [tagWidth, setTagsWidth] = useState(0)
  let counter = 0

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === 0) {
        setTagsWidth(tagWidth => tagWidth - 100 );
        counter += 1
      } else {
        setTagsWidth(tagWidth => tagWidth + 100 );
        counter = 0
      }
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <div className="tags-container">
        <div className="tag-container" id="tag-1">
          <h3 style={{marginLeft: `${tagWidth}%`}}>TITRE DE SÉJOUR</h3>
          <h3>DIVOCRE</h3>
        </div>
        <div className="tag-container" id="tag-2">
          <h3 style={{marginLeft: `${tagWidth}%`}}>REGROUPEMENT FAMILIAL</h3>
          <h3>DROIT PUBLIC</h3>
        </div>
        <div className="tag-container" id="tag-3">
          <h3 style={{marginLeft: `${tagWidth}%`}}>VISA</h3>
          <h3>DROIT DES CONTRATS</h3>
        </div>
        <div className="tag-container" id="tag-4">
          <h3 style={{marginLeft: `${tagWidth}%`}}>RÉFÉRÉ LIBERTÉ</h3>
          <h3>PROPRIÉTÉ INTELECTUELLE</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tags
