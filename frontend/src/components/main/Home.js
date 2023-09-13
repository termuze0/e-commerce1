import React, { useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import "./css/Home.css"


export default function Home() {

  return (

    <div className='container'>
      <Header />
      <section className='MainSection'>
      <Sidebar />
      </section>
      
    </div>
  )
}

