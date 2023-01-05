
import './App.css';

import Category  from './components/category/category.component'


function App() {
  const subtitle="Shop Now!"

   const categories=[
    {
      title:"Hat",
      id:1,
      imageUrl:'https://i.ibb.co/cvpntL1/hats.png'

    }, {
      title:"Jackets",
      id:2,
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png'


    },
     {
      title:"Sneaker",
      id:2,
      imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png'


    },
     {
      title:"Women",
      id:3,
      imageUrl:'https://i.ibb.co/GCCdy8t/womens.png'

    },
     {
      title:"Men",
      id:4,
      imageUrl:'https://i.ibb.co/R70vBrQ/men.png'

    },
   ]

  return (
    
    <Category  categories={categories} subtitle={subtitle}/>
    // A draft of each main components
  
  );
}

export default App;
