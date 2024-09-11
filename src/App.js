import './index.css';
import Emoji from "./emojiCard";
import emojiInfo from "./emojipedia"

// import Card from './card';
// import NavBar from './header';
// import Footer from './footer';
// import Content from './content';
// import recipeCards from './recipeCards';


// const createCard = (reci) =>{
//   return (
//     <Card
//       key= {reci.id}
//       name= {reci.name}
//       image= {reci.image}
//       recipe= {reci.recipe}
//       publisher= {reci.publisher}
//     />
//   )
// }


const createEmoji = (icon) => {
  return ( 
    <Emoji
      emoji = {icon.emoji}
      name = {icon.name}
      meaning = {icon.meaning}
    />
   )
}
 



function App() {
  return (
    <div className="App">
       {/* <NavBar/>
       <Content/>
       <Footer/> */}
      {/* <h1>My recipes</h1>
     {recipeCards.map(createCard)} */}

        {/* <Card
        name= {recipeCard[0].name}
        image= {recipeCard[0].image}
        recipe= {recipeCard[0].recipe}
        publisher= {recipeCard[0].publisher}   
        />

       <Card
        name= {recipeCard[1].name}
        image= {recipeCard[1].image}
        recipe= {recipeCard[1].recipe}
        publisher= {recipeCard[1].publisher}   
        />

      <Card
        name= {recipeCard[2].name}
        image= {recipeCard[2].image}
        recipe= {recipeCard[2].recipe}
        publisher= {recipeCard[2].publisher}   
        />

       <Card
        name= {recipeCard[3].name}
        image= {recipeCard[3].image}
        recipe= {recipeCard[3].recipe}
        publisher= {recipeCard[3].publisher}   
        /> */}

          <div className='emojiSpan'>
              <h1>Emojipedia</h1>
          </div>
         <div className="emojiCards">{emojiInfo.map(createEmoji)}</div> ;

    </div>

  );
}

export default App;




