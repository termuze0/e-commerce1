import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Card from './Card'
import "./css/Home.css"
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Home() {

  let jsonData = [
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 1",
      "price": "$10",
      "description": "This is the description for Card 1."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 2",
      "price": "$20",
      "description": "This is the description for Card 2."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 3",
      "price": "$15",
      "description": "This is the description for Card 3."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 4",
      "price": "$12",
      "description": "This is the description for Card 4."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 5",
      "price": "$18",
      "description": "This is the description for Card 5."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 6",
      "price": "$25",
      "description": "This is the description for Card 6."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 7",
      "price": "$14",
      "description": "This is the description for Card 7."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 8",
      "price": "$22",
      "description": "This is the description for Card 8."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 9",
      "price": "$17",
      "description": "This is the description for Card 9."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 10",
      "price": "$30",
      "description": "This is the description for Card 10."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 11",
      "price": "$16",
      "description": "This is the description for Card 11."
    },
    {
      "imageSrc": "https://htdraw.com/wp-content/uploads/2021/11/How-To-Draw-Rigby-From-Regular-Show-300x169.jpg",
      "title": "Card 12",
      "price": "$28",
      "description": "This is the description for Card 12."
    }
  ];

  return (

    <div className='homecontainer'>
      <Header />
      <section className='MainSection'>
        <div className="row">
          <div className="col-3"><Sidebar /></div>
          <div className="col-7">
            <div className='cards' >
            
            {
            
            
            
            jsonData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          price={card.price}
          description={card.description}
        />
      ))}
              
            </div>
          </div>
          <div className="col-2">col-sm</div>
        </div>

      </section>

    </div>
  )
}

