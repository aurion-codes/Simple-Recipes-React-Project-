    import { useState } from 'react'
    import React from 'react'


function Form({addNewRecipe, formData, setFormData}){
    
    // // const [formData, setFormData]=useState({
    // "name":"",
    // "ingredients":"",
    // "instructions":"",
    // "image":""
    // })

  
    
      function handleOnChange(e){
          setFormData({...formData, [e.target.name]: e.target.value})
        
      }

      function handleSubmit(e){
          e.preventDefault()
          addNewRecipe(formData)
      }






    
    
    // function handleOnChange(e){
    //     console.log(formData)
    //     setFormData({...formData,[e.target.name] : e.target.value})
    // }


   

    return(
        <div className='new-recipe'>
            <h2>New Recipe </h2>
                
            
        <form onSubmit={handleSubmit}>
        <input  onChange={handleOnChange} type="text" name="ingredients" placeholder="Ingredients" />
        <input onChange={handleOnChange} type="text" name="instructions" placeholder="Instructions" />
        <input onChange={handleOnChange} type="text" name="image" placeholder="Image" /> 
        <input  onChange={handleOnChange} type="text" name="calories" placeholder="Calories" />
        <button type="submit">Submit</button>
                
    </form>
    </div>
    
    )
}

export default Form