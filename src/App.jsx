import { useState } from "react";
import imgLogo from "./assets/logo.png";
import './App.css';
import InputSearch from "./components/InputSearch";
import { Personajes } from "./components/Personajes";
import { motion } from "framer-motion"

function App() {

  const [search,setSearch]=useState("")

  const searchFu=(term)=>{
    setSearch(term)
  }

  return (
    <div className='container'>
      
     <motion.div initial={{ y: -100, opacity: 0 }}  animate={{ y: 0, opacity: 1 }}  transition={{type: "spring",stiffness: 300, damping: 10,duration: 12}} className="logo">
        <img src={imgLogo} alt="Dragon Ball" />
        <h1>Buscador de Personajes</h1>
      </motion.div>
  
      <InputSearch onSearch={searchFu} />

      <Personajes searchTerm={search} />

    </div>
  )
}

export default App
