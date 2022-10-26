import React from "react";
import rotaractlogo from '../images/rotaractlogo.webp'
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Column2,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <footer style={{backgroundColor:'white',boxShadow:'10px',justifyContent:'center',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
   <img className="foot-img" src={rotaractlogo} alt="pic" />
   <h1 className="foot-head" style={{color:"blue", textAlign: "center", marginTop: "-50px",marginLeft: "67px"}}> Rotaract Club VITCC</h1>
      <br />
      <Container className="foot-co">
        <Row>
 
          <Column >
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          
           <Column>
            <Heading>Contact Us</Heading>
            <p>✉ rotaractclubvitcc@gmail.com</p>
            <p>📞 Saravanan G (President Elect) - 8056158866</p>
            <p>📞 Sathika R (Vice-President Elect) - 7338794662</p>

          </Column>
          
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
          
        </Row>
        <Container className="bg-gray-500 py-4 mt-5 flex items-center justify-center space-x-2" >
        Rotaract Club VITCC
        </Container>
      </Container>
    </footer>
  );
};
export default Footer;