import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import "./category.style.scss"

function Category({categories,subtitle}) {

  return (
    <div className="categories-container">
         {
           categories.map((category)=>{
            return (
            <CategoryItem  key={category.id} category={category} subtitle={subtitle}/>
            )})}
    </div>
  )
}

export default Category