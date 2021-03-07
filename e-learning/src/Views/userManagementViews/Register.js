import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import green_tick from '../../Assets/green-tick.png'
import red_cross from '../../Assets/red-cross.png'
import Axios from 'axios'
function Register() {

    const [Email,setEmail]=useState('')
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [conPassword,setConPassword]=useState('')
    const [url,setUrl]=useState('')
    const [opacity,setOpacity]=useState(0)
    const [type,setType]=useState('')

    const registerData =()=>{
        Axios.post('http://localhost:3001/api/insert',{email:Email,username:userName,password:password}).then(()=>{
            alert("sucessfull insert")
        })
    }
    
    return (
        <div className="bodyClass">
             <b><h1 className="elearn-heading">E-Learning</h1></b>
                <strong><h4><b>let Learn</b> from <b>Here</b></h4></strong><br/>
                <Container className='Container'>
                    <Row>
                        <Col className='LoginBox'>
                        <form>
                            <input type='text' className='InputBox-1' placeholder='email'  onChange={event=>setEmail(event.target.value)}/><br/>
                            <input type='text' className='InputBox-2' placeholder='username'  onChange={event=>setUserName(event.target.value)}/><br/>
                            <input type='password' name='password' className='InputBox-2'placeholder='password'
                            onChange={event=>setPassword(event.target.value)}/>
                            <br/>
                            <input type='password' name='passwordConfirm'  className='InputBox-2'placeholder='confirm password'
                            onChange={(event)=>{
                            if(password==event.target.value && event.target.value !=""){
                                setUrl(green_tick)
                                setOpacity(1)
                                setConPassword(event.target.value)
                            }
                            else{
                                setUrl(red_cross)
                                setOpacity(1)
                            }
                            }} /><img style={ {opacity : opacity, position : 'absolute', marginTop:'2.5vh', marginLeft:'1vw'} } src={url} height='20' width='20' /><br/>
                            <label style={{fontSize:"13px"}}>Account Type:</label>&nbsp;&nbsp;
                            <select id="account" name="account" onChange={event=>{
                                setType(event.target.value)
                            }} >
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                            </select><br/>
                            <input type='button' className='LoginButton' value='register'onClick={registerData}/>
                            <br/>
                            <p>Have an account? <a href="/">Login</a></p>
                            </form>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
export default Register;
