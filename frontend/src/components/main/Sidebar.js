import React ,{useState }from 'react'
import "./css/Sidebar.css"


export default function  Sidebar(){
  const [selectedCategory, setSelectedCategory] = useState(null);
  
    const categories  = [
      
      {id:1,name:"Clothing",subcategories:["Shirts","Pants","Dresses","Jackets","Underwear","Accessories"]},
      
      {id:2,name:"Shoes",subcategories:["Sneakers","Boots","Sandals","High heels","Athletic shoes"]},
  
      {id:3,name:"Consumer Electronics",subcategories:["Smartphones","Laptops","Tablets","Televisions","Cameras","Headphones"]},
  
      {id:4,name:"Books, Movies, Music, and Games",subcategories:["Fiction books","Non-fiction books","DVDs","Blu-rays","CDs","Video games"]},
  
      {id:5,name:"Personal Care and Beauty",subcategories:["Skincare products","Makeup","Haircare products","Fragrances","Bath and body products","Grooming tools"]},
  
        
      {id:6 , name:"Food and Beverage",subcategories:["Snacks","Beverages (soft drinks, juices, teas, coffees)","Cereals","Canned goods","Baking supplies","Frozen foods"]}
      
   
  ];
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };
    
  
    return(
      <div className="sidebar">
      {!selectedCategory ? (
        <>
          <h2 className="sidebar-title">Categories</h2>
          <ul className="category-list">
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className="category-item"
              >
                {category.name}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className="sidebar-title">Subcategories of {selectedCategory.name}</h2>
          <button onClick={handleBackToCategories} className="back-button">
            Back to Categories
          </button>
          <ul className="subcategory-list">
            {selectedCategory.subcategories.map((subcategory, index) => (
              <li key={index} className="subcategory-item">
                {subcategory}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
    );
  }