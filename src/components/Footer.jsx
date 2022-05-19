import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    ${mobile({ display: "none" })}
`;
const Logo = styled.h1`
    margin: 10px 0;
`;
const Description = styled.p`
    padding: 2opx 0;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px ;
    cursor: pointer;
`;
const Center = styled.div`
    flex: 1;
    padding: 10px;
`;
const Title = styled.h3`
    margin-bottom: 10px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`;

const Right = styled.div`
    flex: 1
    padding: 20px;
    margin-top: 10px;
`;
const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MAXAOH</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Earum, doloribus nemo! Ut, in optio?
                Aspernatur quidem molestias mollitia aut voluptates ut ullam eveniet iure, ab at dolore odit possimus rerum!
            </Description>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon>
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
              <Title>Usefull Links</Title> 
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Man Fashion</ListItem>
                  <ListItem>Woman Fashion</ListItem>
                  <ListItem>Accessories</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Terms</ListItem>
              </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem><Room style={{marginRight:"10px"}} />Lviv, Petlyury 12</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}} />+380123456789</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}} />maxaon.otto@gmail.com</ContactItem>    
            <Payment src="https://inlegal.eu/wp-content/uploads/2019/05/visa-mastercard-paypal.png"/>
        </Right>
    </Container>
  );
}

export default Footer;
