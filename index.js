/*import React from 'react';
import ReactDOM from 'react-dom/client';
const a=10;
const b=20;
const msg=<div><h1>
  sum of a and b {a+b}
</h1>
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(msg);*/

/*import React from 'react';
import ReactDOM from 'react-dom/client';
const x=5;
let text="good bye";
if(x>5){
  text="hello";
}
const msg=<h1>{text}</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(msg);*/
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
const msg=<h1 align="center" className='abc'>hello world</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(msg);*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/

/*var myglobal=10;
function fun1(){
  oopsglobal=5;
}
function fun2(){
  var output="";
  if(typeof myglobal!="undefined"){
    output+="myglobal:"+myglobal;
  }
  if(typeof oopsglobal !="undefined"){
    output+="oopsglobal:"+oopsglobal;
  }
  console.log(output);
}
fun1();
fun2();*/
/*function nextinline(arr,item){
  arr.push(item);
  return arr.shift();
}
var testarr=[1,2,3,4,5];
console.log("before:"+JSON.stringify(testarr));
console.log(nextinline(testarr,6));
console.log("after:"+JSON.stringify(testarr));*/
/*const msg=<div>
  <h1>Welcome to sdm polytechic</h1>
<p>
  <b>branches </b>
  </p>
  <li>mech</li>
  <li>cs</li>
  <li>ec</li>
  <li>civil</li>
  </div>
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(msg);*/

/*function Car(){
  return <h1> i am a car</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div><Car/><Car/></div>);*/
/*class Car extends React.Component{
  render()
    {
      return <h1>i am a car</h1>
    }
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div><Car/><Car/></div>)*/
/*import React from 'react';
import ReactDOM from 'react-dom/client';
function Header() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>SDM POLYTECHNIC</h1>
      <h4>affiliated to AICTE, New Delhi, Recognized by DTE</h4>
    </div>
  );
}

function Section() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Branches Offered</h2>
      <ul>
        <li>CE</li>
        <li>ME</li>
        <li>CS</li>
        <li>EC</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ textAlign: 'center' }}>
      <p>Careers &nbsp;&nbsp; Sitemap &nbsp;&nbsp; About Us</p>
      <small>Copyright @ 2023</small>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Section />
    <Footer />
  </div>
);*/
/*import React from 'react';
import ReactDOM from 'react-dom/client';
function Name(props){
  return <h1>My name {props.name}</h1>
}
function Display(){
  return(<Name name="Kumar"/>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Display/>);*/
/*import React from 'react';
import ReactDOM from 'react-dom';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return (<ul>{listItems}</ul>);
}

const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);*/
/*import React from 'react';
import ReactDOM from 'react-dom';

function Classmates(props) {
  const names = props.names;
  const listItems = names.map((name) => <li>{name}</li>);
  return (<ul>{listItems}</ul>);
}

const names = ["anoop","prakyath","adarsh","vikas"];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Classmates names={names} />);*/
/*import React from 'react';
import ReactDOM from 'react-dom';

function Student(props) {
  return <li>{props.name}</li>;
}

function StudentList(props) {
  const students = props.students;

  return (
    <>
      <h1>List of the students</h1>
      <ul>
        {students.map((student, index) => (
          <Student key={index} name={student} />
        ))}
      </ul>
    </>
  );
}

const students = ["srujan", "shop", "vikith", "abhishek"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StudentList students={students} />);*/


/*import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
  const numbers = props.numbers;
  return (
    <div>
      <ul>
        {numbers.map((x) => (
          <li key={x.toString()}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

const numbers = ['indore', 'mumbai', 'pune', 'hyderabad'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App numbers={numbers} />);*/

/*import React from 'react';
import ReactDOM from 'react-dom';
function Car(props){
  return <h1>name={props.name} color={props.color}</h1>;
}
function App(){
  return (<div>
    <Car name = "tsw" color = "red"/>
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)*/
/*import React from 'react';
import ReactDOM from 'react-dom';
class ClassMates extends React.Component{
  render(){
    return(
      <ChildComponent name={["hello","anoop","prakyath"]}/>);
  }
}
const ChildComponent=(props)=>{
  return<p>{props.name}</p>};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClassMates/>)  */

/*import React from 'react';
import ReactDOM from 'react-dom';
class Parent extends React.Component{
  render(){
    const variable=5
    return(<div>
      <Child message="message to child"/>
      <Child message={variable}/></div>);
    }
  }
  class Child extends React.Component{
      render()
      {
        return(<h1>{this.props.message}</h1>)
      }
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>);*/
/*import React from 'react';
import ReactDOM from 'react-dom';
class Parent extends React.Component{
  render(){
    const names="name:arun";
    const sem="sem:5";
    const branch="branch:cs";
    return(<div>
      <Child message="resume"/>
      <Child message={names}/>
      <Child message={sem}/>
      <Child message={branch}/></div>);
    }
  }
  class Child extends React.Component{
      render()
      {
        return(<h1>{this.props.message}</h1>)
      }
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>);*/



/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
function Header()
{
    return(
        <div>
            <br/>
            <h1 align="center">Sri DharmasthalaManjunatheswara Polytechnic, ujire</h1>
            <h3 align="center"><u>Affiliated to AICTE, New Delhi, Registered by DTE</u></h3>
            <br/>
            <hr width="100%" size="10px"></hr>
        </div>);}
function Main()
{
    return (
        <div>
            <br/><br/>
            <center><img src= "https://www.sdmesociety.in/wp-content/uploads/2019/06/dip_ujire.jpg" height="50%" width="50%" alt="not found"></img></center>
            <br/>
            <h2 size="50"><u>Branches Offered</u></h2>
            <section size="10">
                <ul>
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Computer Science Engineering</li>
                <li>Electronics and Communication Engineering</li>
                </ul>
            </section></div>);}
function Footer()
{
   return(
        <div><br/>
            <center>
                <small>Copyright @ 2023,sdm polytechnic All rights reserved</small>
            </center><br/>
        </div>);}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<div><Header/><Main /><Footer /></div>);*/

/*import React from 'react';
import ReactDOM from 'react-dom/client';
function Football(){
  const shoot=()=>
  {
    alert("great shot");
  }
  return(
    <button onClick={shoot}>Take the shot</button>
  );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football/>)*/

/*import React from 'react';
import ReactDOM from 'react-dom/client';
function Football(){
  const shoot=(a)=>
  {
    alert(a);
  }
  return(
    <button onClick={shoot("Great shot")}>Take the shot</button>
  );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football/>)*/

/*import React from 'react';
import ReactDOM from 'react-dom/client';
function Football(){
  const shoot=(a,event)=>
  {
    alert(a);
  }
  return(
    <button onClick={(event)=>shoot("goal",event)}>Take the shot</button>
  );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football/>)*/


/*import React from 'react';
import ReactDOM from 'react-dom';

function MissedGoal()
 {
  return (<h1>Missed</h1>);
}

function MadeGoal() 
{
  return (<h1>Goal</h1>);
}

function Goal(props) 
{
  const a = props.isGoal ; 
  if (a) 
  {
    return <MadeGoal/>;
  } 
  else
   {
    return <MissedGoal/>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal="true" />);*/
/*import React from 'react';
import ReactDOM from 'react-dom';
function Garage(props)
{
  const cars=props.cars;
  return(<>
  <h1>Garage</h1>{cars.length>0 &&
  <h2>you have {cars.length} cars in your Garage</h2>
  }
  </>);
}
const cars=["BMW","volvo","Ford"];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars}/>);*/

/*import React from 'react';
import ReactDOM from 'react-dom';

function MissedGoal()
 {
  return (<h1>Missed</h1>);
}

function MadeGoal() 
{
  return (<h1>Goal</h1>);
}

function Goal(props) 
{
  const isGoal = props.isGoal ; 
  return(
    <>
    {isGoal}<MadeGoal/>:<MissedGoal/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal="true" />);*/
/*import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
function Timer(){
  const [count,setcount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{setcount((Count)=>Count+1);},1000);
  },[]);
  return(<h1>I am called {count} times</h1>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer/>);*/

/*import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
function Counter(){
  const[count,setcount]=useState(0);
  const[calculation,setcalculation]=useState(0);
  useEffect(()=>{
    setcalculation(()=>count*2);
  },[count]);
  return(
    <div>
    <p>count:{count}</p>
    <button onClick={()=>setcount((Count)=>Count+1)}></button>
    <p>calculation:{calculation}</p>
    </div>)
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);*/


/*import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Clock() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Time: {hour}:{minute}:{second}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);*/

/*import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Clock() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [recordedTimes, setRecordedTimes] = useState([]);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setSecond(second + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  });

  return (
    <div>
      <p>Time: {hour}:{minute}:{second}</p>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => {
        setHour(0);
        setMinute(0);
        setSecond(0);
      }}>Reset</button>
      <button onClick={() => {
        const recordedTime = {
          hour,
          minute,
          second
        };

        setRecordedTimes([...recordedTimes, recordedTime]);
      }}>Record</button>
      <ul>
        {recordedTimes.map((recordedTime) => (
          <li key={recordedTime.hour + recordedTime.minute + recordedTime.second}>
            {recordedTime.hour}:{recordedTime.minute}:{recordedTime.second}
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);*/


/*import React from 'react';
import ReactDOM from 'react-dom';
class Message extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message:'welcome'
    }
  }
  ChangeMessage(){
  this.setState(
    {message:'Thank you for subscribing'})
  }
render(){
  return(<div>
    <h1>{this.state.message}</h1>
    <button onClick={()=>{this.ChangeMessage()}}>subscribe</button>
  </div>)
}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Message/>);*/



/*import React from 'react';
import ReactDOM from 'react-dom';
class Message extends React.Component{
 constructor(props){
    super(props);
    this.state={
      names:'prashu',
      sem:'5th'
}
 }
render(){
  return(<div>
    <h1>name={this.state.names}</h1><br></br>
    <h1>sem={this.state.sem}</h1>
    </div>)
    }
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Message/>);*/

/*import React from 'react';
import ReactDOM from 'react-dom';
class Message extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  ChangeMessage(){
  this.setState(
    {count:this.state.count+1});
  }
render(){
  return(<div>
    <h1>count:{this.state.count}</h1>
    <button onClick={()=>{this.ChangeMessage()}}>Increment</button>
  </div>)
}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Message/>);*/


/*import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Component() {
  const [user, setUser] = useState("jesse");
  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}
function Component2({ user }) {
  return (
    <>
      <h1>Component2</h1>
      <Component3 user={user} />
    </>
  );
}
function Component3({ user }) {
  return (
    <>
      <h1>Component3</h1>
      <Component4 user={user} />
    </>
  );
}
function Component4({ user }) {
  return (
    <>
      <h1>Component4</h1>
      <Component5 user={user} />
    </>
  );
}
function Component5({ user }) {
  return (
    <>
      <h1>Component5</h1>
      <h2>{`Hello ${user} again`}</h2>
    </>
  );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component />);*/


/*import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Page(){
  const [subscribed,setSubscribed]=useState(false);
  const handleSubsribe=()=>{
    setSubscribed(true);
  };
  return(<div>
    {!subscribed && <h1>Welcome</h1>}
    <button onClick={handleSubsribe}>Subscibe</button>
    {subscribed && <h1>Thank you for subscribing</h1>}
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);*/

/*import React, { useState,useContext } from 'react';
import ReactDOM from 'react-dom';
function Component1() {
  const [user,setUser] = useState("jesse");
  return (<>
    <useContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component1/>
      </useContext.Provider>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1/>)*/

/*import React, { useState,useEffect,useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
const sdm=createContext();
function Component() {
  const [user, setUser] = useState("jesse");
  return (
    <>
    <sdm.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
      </sdm.Provider>
    </>
  );
}
function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3  />
    </>
  );
}
function Component3() {
  return (
    <>
      <h1>Component3</h1>
      <Component4  />
    </>
  );
}
function Component4() {
  return (
    <>
      <h1>Component4</h1>
      <Component5  />
    </>
  );
}
function Component5() {
  const abc=useContext(sdm);
  return (
    <>
      <h1>Component5</h1>
      <h2>{`Hello ${abc} again`}</h2>
    </>
  );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component />);*/


/*import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <h1>Character count: {count.current}</h1> 
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/



/*import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
function App() {
  const [inputValue, setInputValue] = useState("");
  const prevInputValue=useRef("")
  useEffect(() => {
    prevInputValue.current=inputValue;
  },[inputValue]);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <h1>current value: {inputValue}</h1> 
      <h1>previous value: {prevInputValue.current}</h1> 
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/


/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }

  render() {
    return (
      <h1>My favorite color is {this.state.favoritecolor}</h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol="yellow" />);*/


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 10000);
  }

  render() {
    return (
      <h1>My favorite color is {this.state.favoritecolor}</h1>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);