import './App.css';
import Nav from './components/navbar';
import Intro from './components/intro';
import Contactcard from './components/contactcard';
import data from './data';
// import felix from './images/felix.png';
// import mrwink from './images/mr-whiskerson.png';
// import fluff from './images/fluffykins.png';
// import pump from './images/pumpkin.png';

function App() {
  //console.log(data);
  const cards = data.map((card) => {
    return (
      <Contactcard
        key={card.id}
        {...card}
      />
    );
  });
  return (
    <div >
      <Nav/>
      <Intro/>
      <div className='tt'>
        {cards}
      </div>
    </div>
  );
}
export default App;
