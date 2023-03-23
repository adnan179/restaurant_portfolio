import React, { useState } from 'react';
import Menu from './menu';
import Categories from './categories';
import items from './data';
import './menu.css';
const allCategories = ['all',...new Set(items.map(item => item.category))];

const Menupage=({handleChange})=> {
  const [menuItems,setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return <main>
    <section className='menu section'>
      <button className='goback'
        onClick={()=>{
          handleChange(false);
        }}
      >&#x2190; Back </button>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default Menupage;