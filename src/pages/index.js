import React from "react"
import Header from '../components/header'
import Topics from '../components/topics'
import Ecuation from '../components/ecuation'
import Footer from '../components/footer'
import Form from '../components/form'

export default function Home() {
  return (
    <div>
      <Header/>
      <Ecuation/>
      <Topics/>
      <Form/>
      <Footer/>
    </div>
    )
}
