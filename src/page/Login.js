import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) =>{ //event를 넘겨주고받음
    event.preventDefault(); // 함수를 실행시킬 때 마다 refresh를 막아주는 함수
    setAuthenticate(true)
    navigate("/");
  }
  
  //밑에 보면 Form, Summit 함수가 있는데 Form 함수는 중요한 값을 넘겨주는 값
  //그리고 Summit은 받는 역활을 하는 함수인데 onClick 이벤트가 아닌  onSummit로 넘겨줘야한다
  return (
    <div>
      <Container>
        <Form onSubmit={(event)=>loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
        </Container>
    </div>
  )
}

export default Login