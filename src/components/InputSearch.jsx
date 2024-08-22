import "./InputSearch.css"
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import PropTypes from 'prop-types';


export default function InputSearch({onSearch}) {
  const [inputValue,setInputValue]=useState("")

  const handleInputChange =(e)=>{
      setInputValue (e.target.value)  
  }

  const deleteInput =(e)=>{
    setInputValue ("")
    onSearch("");
  }

  const enviarBusqueda=(e)=>{
    if (e.key === 'Enter') {
      onSearch(inputValue);
    }
  }

    return (
        
    <div className="inputsearch">
        <div className="inputsearch_icono"><AiOutlineSearch /></div>
        <div className="inputdelete_icono"><AiOutlineClose onClick={deleteInput}/></div>
        <input type="text" onChange={handleInputChange} onKeyDown={enviarBusqueda} placeholder="Busca al personaje que quieras..." value={inputValue} maxLength={30} />

    </div>
  )
}

InputSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
