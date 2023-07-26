import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import img from './gmc-hub.jpg';
import photo2 from './photo2.png';


function Car ({make, image, image2, carNamez}) {
  // const img = require('./gmc-hub.jpg')
  const name = 'Tobi'
  const x = false 
  return (
    <div>
      <h1>Hello, I am a {make} car!</h1>
      <h2>Hello {name}</h2>
      {(carNamez.length) > 1  && <h3> I have {carNamez.length} cars!!</h3> }
      <p>Say {x ? 'Welcome user' : 'Not recognized'}</p>
      {/* <img src ={img} alt='gmc-hub' /> */}
      <img src={image} alt="gmc-hub" />
      <p><img src="./logo192.png" alt="" /></p>
      <div><img src={image2} alt="" /></div>
      <div>
      <img src="./photo1.png" alt="bag" />
      </div>
    </div>
  )
};

//if conditional rendering
const madeGoal = 'Goal!';
const missedGoal = 'Missed!';

const Goal = (props) => {
  const isGoal = props.status;
  return (
    <>
      {
    (isGoal) ? <h1>{madeGoal}</h1> : <h1>{missedGoal}</h1>
  }
    </>
  )
  //   if (isGoal) {
  //   return <h1>{madeGoal}</h1>
  // }
  // return <h1>{missedGoal}</h1>
  
}
function Description () {
  return <p>I am a V-6 Engine with Alloyed wheels and can run at 120/km in 30secs.</p>
}

function Football () {
  const shoot = () => {
    document.write('You can make good use of me by purchasing me!')
  }
  return (
    <button onClick={shoot} type="button">Click here</button>
  )
}

function PassArgument () {
  const shoot = (y) => {
    document.write(y)
  }
  return (
    <button onClick ={() => {

    shoot ('This is great!')}} type="button">Click Here</button>
  )
}

const SayHello = () => {
  return (
    <button value ='Hello' onClick ={(e) => {alert(e.target.value)}}>Show</button>
  )
}

const CarList = () => {
  const list = ['Toyota', 'Benz', 'Ford', 'Volkswagen', 'Chevrolet', 'Puegeot', 'Nissan', 'Burgati'];
  const myList = list.map((car, index) => <li key={index}>{car}</li> 
  )
    return (
    <div>
    <p>Below are the list of common Cars</p>
    <ol>{myList}</ol>
      {/* <ol>{list.map((car) => <li>{car}</li>)}</ol> */}
    </div>
  )
} 

function NameList (props) {
  return (
    <div>
    {/* <p>{props.favouriteCars}</p> */}
    <li>{props.favouriteCars}</li>
    </div>
  )
  
}

function Garage () {
  const make = 'Toyota'
  const carNames = ['Toyota', 'Benz', 'Ford', 'Volkswagen', 'Chevrolet', 'Puegeot'];
  const carListz = ['Ford', 'Toyota', 'Volks', 'Benz']
  // const myCars = carNames.map((cars1) => <li>{cars1}</li>)
  
  
      return (
    <div>
      <h2>Who lives in my garage?</h2>
      <img src={photo2} alt="shoe" />
      {/* <Car data={make} /> */}
      <Car make = 'Toyota' image ={img} image2 = './logo512.png' carNamez ={carListz}/>
      <Description />
      <p>How can i make good use of you?</p>
      <Football />
      <PassArgument />
      <p><SayHello /></p>
      <CarList />
      <ul>{carNames.map((cars1) => <NameList favouriteCars ={cars1}/>)}</ul>
      {/* <NameList favouriteCars = <ul>{carNames.map((cars1) => <li>{cars1}</li>)}</ul> /> */}
      {/* <NameList favouriteCars =<ul>{myCars}</ul> /> */}
      <Goal status ={false} />
    </div>
  )
  
}

// const x = prompt(parseInt('enter figure'));
// let text = 'Goodbye';
// if (x <Car 10) {
//   text = 'Come to Daddy'
// }
// const myElement = (
//   <div>
//     <ul>
//       <li>Bananas</li>
//       <li>Apples</li>
//       <li>Oranges</li>
//     </ul>
//     <p>This is the day that the lord has made, I will rejoice and be glad in it!!</p>
//     <div>
//       <h1>We are what we are by habit</h1>
//       <h2>{text}</h2>
//       <h3>{(x) < 10? 'Hello' : 'Goodbye'}</h3>
//     </div>
//   </div>
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
