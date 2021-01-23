import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import {Canvas} from './canvas'
function App() {
  const onClick = () => { 

  }
  return<Container>
    <Row>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col><h1>BLACK FRIDAY</h1></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row>
    <Row></Row>
    <Row>
      <Col></Col>
      <Col></Col>
    <Button onClick={onClick}
    variant="outline-primary" id="Button-1" size="lg">Play Now
    </Button>{'  '}
    <Col></Col>
    <Canvas></Canvas>
    <Col></Col>
    </Row>
  </Container>
}

export default App;
