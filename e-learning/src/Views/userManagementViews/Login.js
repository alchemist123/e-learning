import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


 function Login() {
    return (
        <div className="bodyClass">
        <b><h1 className="elearn-heading">E-Learning</h1></b>
        <strong><h4><b>Let Learn</b> from <b>Here</b></h4></strong><br/>
        <Container className='Container'>
            <Row>
                <Col className='LoginBox'>
                    <br/>
                   
                    <input type='text' className='InputBox-1' placeholder='email' /><br/>
                    <input type='password' className='InputBox-2' placeholder='password'/><br/>
                    <button className='LoginButton'>Login</button> <br/><br/>
                    <p>Don't have an account ?<a href='/register'>Register</a> </p>
                   
                </Col>
            </Row>
        </Container>
       
    
</div>
    )
}
export default Login;
