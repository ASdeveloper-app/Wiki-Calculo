import React from "react"
import Header from '../components/header'
import Topics from '../components/topics'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Form from '../components/form'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Topics/>
      <Form/>
      <Footer/>
    </div>
    )
}
