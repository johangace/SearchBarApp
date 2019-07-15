import React from 'react';


const DrinkForm = (props) => {
    return(
        <>
        {/* this is the search form */}
          <h2>What's your drink?</h2>
          <br></br>
            <input 
            placeholder="Search Drink"
            // name="nameOfDrink" 
            type="search"
            autoComplete="off"
            onChange={props.getDrinkInfo} 
            /> 
          
          {/* The Search Results should be displayed here
            <div id="drinks">  
            {/* name  
          {this.state.drinkData.map(drink => (
               {/* The below should adopted based on the API */}
            {/* <Link key={drink.xxx} to={`/movies/${drink.xxx}`}>
              <div className="drink"> */}
                {/* <h3>{drink.name}</h3>
                <img src={drink.Poster}/> */}
              {/* </div> */}
            {/* </Link> //connect
           ))}
           </div>  */}
        </>  
    )
}

export default DrinkForm;
