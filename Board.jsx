import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import {useState,useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Column } from './FooterStyles';
export function Board() {
  return (
    <div>
      <Navbar/>
      <br/><br/>
      <br/>
      <div style={{textAlign:'center',color:'#0d6efd'}}>
      <h1 style={{fontSize:'xxx-large'}}>Our Board</h1>
</div>
      <div className='board-row'>
        <div className='board-column'>      
        <Card className='box-card'>
        <Card.Img variant="top" src="holder.js/100px180" style={{marginTop:200,}}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      <div className='board-column'>
      <Card className='box-card'>
        <Card.Img variant="top" src="holder.js/100px180" style={{marginTop:200,}}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      <div className='board-row'>
        <div className='board-column'>      
        <Card className='box-card'>
        <Card.Img variant="top" src="holder.js/100px180" style={{marginTop:200,}}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      <div className='board-column'>      
        <Card className='box-card'>
        <Card.Img variant="top" src="holder.js/100px180" style={{marginTop:200,}}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
      </div>
      <br/><br/>
      <br/>
      <Footer/>
    </div>
  )
}

