import './MainPage.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function MainPage() {
    const [currentvalue,setCurrentvalue] = useState()

    const addition=(value)=>{
        const numericValue = parseFloat(value); // or parseInt(value, 10) if you want an integer

        // Perform the addition
        const result = numericValue + numericValue;
      
        // Update the state or perform any other actions with the result
        console.log(result);
    }

  return (
    <div className='main-body'>
        <Card body>
              <Form>
                 <input type='text' value={currentvalue}/>
              </Form>
            
            
            <div className='main-body'>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={7} onClick={(e)=> setCurrentvalue(e.target.value)}>7</Button>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={8} onClick={(e)=> setCurrentvalue(e.target.value)}>8</Button>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={9} onClick={(e)=> setCurrentvalue(e.target.value)}>9</Button>
               <Button variant="dark" size="lg" className='mx-2 mt-2' onClick={()=>addition(currentvalue)}>*</Button>
            </div>
            <div className='main-body'>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={4} onClick={(e)=> setCurrentvalue(e.target.value)}>4</Button>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={5} onClick={(e)=> setCurrentvalue(e.target.value)}>5</Button>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={6} onClick={(e)=> setCurrentvalue(e.target.value)}>6</Button>
               <Button variant="dark" size="lg" className='mx-2 mt-2' value={7} onClick={(e)=> console.log(e.target.value)}>-</Button>
            </div>
            <div className='main-body'>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={1}  onClick={(e)=> setCurrentvalue(e.target.value)}>1</Button>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={2} onClick={(e)=> setCurrentvalue(e.target.value)}>2</Button>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={3} onClick={(e)=> setCurrentvalue(e.target.value)}>3</Button>
               <Button variant="dark" size="lg" className='mx-2 mt-2' value={7} onClick={(e)=> console.log(e.target.value)}>+</Button>
            </div>
            <div className='main-body'>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={7} onClick={(e)=> setCurrentvalue(e.target.value)}>.</Button>
               <Button variant="outline-dark" size="lg" className='mx-2 mt-2' value={7} onClick={(e)=> setCurrentvalue(e.target.value)}>0</Button>
               <Button variant="dark" size="lg" className='mx-2 mt-2' value={7} onClick={(e)=> setCurrentvalue(e.target.value)}>= </Button>
               <Button variant="dark" size="lg" className='mx-2 mt-2' value={7} onClick={(e)=> console.log(e.target.value)}>/</Button>
               
            </div>
        </Card>
    </div>
  )
}
