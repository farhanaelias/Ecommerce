import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className = 'descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Esse porro deleniti, voluptatem hic obcaecati similique ad vel 
                velit officiis, fugiat repellat assumenda vitae quasi sint reprehenderit 
                maxime cupiditate tempora iusto?Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Perspiciatis, fugiat!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae</p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
