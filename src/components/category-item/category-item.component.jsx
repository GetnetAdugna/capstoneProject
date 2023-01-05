import React from 'react'
import  './category-item.style.scss'
function CategoryItem({category,subtitle}) {
  const {id,imageUrl,title}=category
    
  return (
        
            <div  key ={id} className="category-container">
              <div className="background-image" style={{
                backgroundImage:`url(${imageUrl})`
              }
              }/>
                <div className="category-body-container">
                  <h1>
                    {title}
                  </h1>
                  <p>
                    {subtitle} 
                  </p>
                 
                 </div>
              </div>
          )
        
      }
    

   
  

export default CategoryItem