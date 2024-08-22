import { useEffect,useState } from "react";
import "./personajes.css"
import PropTypes from 'prop-types';
import Loader from "./Loader";
import { motion } from 'framer-motion';


export const Personajes = ({searchTerm}) => {
  const [character,setCharacter]=useState(null)
  const [loading,setLoading]=useState(false)

  useEffect(()=>{

    if (searchTerm!="")
    { 
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
      

      fetch(`https://dragonball-api.com/api/characters?name=${searchTerm}`)
        .then(response=>response.json())
          .then((data)=>{


            if (data.length>0)
              {
              setCharacter(data)
              setLoading(true)
              }
            else{
              setCharacter(null)
              }
            })
            .catch((error)=>{console.log(error)})
      }else{
        setCharacter(null)
      }

  },[searchTerm])
  

  return (
    <div className="boxCharacter">
      {loading ? (<Loader />)
      : character ? ( 
        
        character.map((a)=>{
          return (
            <motion.div
              initial={{ scale: 0, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                duration: 1.5,
                delay: a.id*0.1
              }} className="card"  key={a.id}>

              <img  src={a.image} />
              <div className="card_name">{a.name}</div>
          </motion.div>
          )
        })
        


       ):null}
    </div>
  );

}

Personajes.propTypes = {
    searchTerm: PropTypes.object.isRequired,
  };
  