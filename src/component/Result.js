import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../css/resul.css'
const Result = () => {
  let header = useNavigate()
   let location = useLocation();
   let params = new URLSearchParams(location.search);
 const score = params.get('score')
 const questions = params.get('noq')
 const mod = params.get('md')
useEffect(()=>{
  if(!score){
header('/error?scroe')
  }
  if(!questions){
    header('/error?questions')
      }
      if(!mod){
        header('/error?mod')
          }   
},[])
  return (
    <div className='centered'>
<div className="scorer">
  <h2>REPORT CARD</h2>
<table className="responsive-table" border={'1'} >
  <tbody>
    <tr >
     <td className='name'>Modular Name</td>
     <td  className='name'>{mod}</td>
      </tr>

    <tr>
      <td  className='name'>No Of Questions</td>
      <td  className='name'>{questions}</td>
    </tr>
    <tr>
      <td  className='name'> Correctly Answered</td>
      <td  className='name'> {score} </td>
    </tr>
    <tr>
      <td  className='name'>Total Marks</td>
      <td  className='name'>15</td>
    </tr>
    <tr>
      <td  className='name'>Marks Obtained</td>
      <td  className='name'>{Math.ceil((score/questions*100)/100*15)}</td>
    </tr>
    <tr>
      <td  className='name'> Percentage</td>
      <td  className='name'>{Math.ceil(score/questions*100)}%</td>
    </tr>
    <tr>
      <td  className='name'>Result:</td>
      <td  className='name'>{Math.ceil(score/questions*100)>=40?'Passed':'Failed'}</td>
    </tr>
  </tbody>
</table>
<br />
<button className='btn'><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Back To Home</Link></button>
</div>
   
    
    </div>
  )
}

export default Result
