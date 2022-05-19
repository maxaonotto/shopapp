import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})}

`;
const Title = styled.h1`
    font-weight: 400;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButtom = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
    ${mobile({ display: "none"})}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`;
const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`;
const Image = styled.img`
    width: 300px;
    ${mobile({ width: "200px"})}
`;
const Details = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-around;
    flex-direction: column;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${(props)=>props.color}
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    font-weight: 600;
    ${mobile({ margin: "5px 15px"})}

`;
const ProductPrice = styled.div`
    font-weight: 500;
    font-size: 30px;
    ${mobile({ marginBottom: "15px"})}

`;
const Hr = styled.hr`
    border: none;
    background-color: #eee;
    height: 2px;
    margin: 10px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    font-weight: 700;
    heght: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 800;
`;
const SummaryItem = styled.div`
    margin: 30px 0;
    display flex;
    justify-content: space-between;
    font-weight: ${(props)=>props.type === "total" && "900"};
    font-size: ${(props)=>props.type === "total" && "30px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
  return (
      <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
            <Title>Your Cart</Title>  
            <Top>
                <TopButtom>Continue Shopping</TopButtom>
                <TopTexts>
                    <TopText>Shopping Cart(2)</TopText>
                    <TopText>WishList (1)</TopText>
                </TopTexts>
                <TopButtom type="filled">CheckOut Now</TopButtom>
            </Top> 
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/736x/f7/33/a8/f733a8f972a8b0038b62b9c848eb1071.jpg"/>
                                <Details>
                                    <ProductName><b>Product: </b>Casual Cotton Jacket</ProductName>
                                    <ProductId><b>ID: </b>987654321</ProductId>
                                    <ProductColor color="916d4e"/>
                                    <ProductSize><b>Size: </b>36.5</ProductSize>
                                </Details>
                            </ProductDetail> 
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove/>
                                    <ProductAmount>1</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 49.9</ProductPrice>
                            </PriceDetail>   
                        </Product> 
                        <Hr/>   
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.garphyttan.eu/8611-medium_default/garphyttan-crafter-carpenter-shirt-red-m.jpg"/>
                                <Details>
                                    <ProductName><b>Product: </b>Carpenter Shirt</ProductName>
                                    <ProductId><b>ID: </b>123456789</ProductId>
                                    <ProductColor color="ec2137"/>
                                    <ProductSize><b>Size: </b>37</ProductSize>
                                </Details>
                            </ProductDetail> 
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove/>
                                    <ProductAmount>2</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 29.9</ProductPrice>
                            </PriceDetail>   
                        </Product> 
                    </Info>   
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>   
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ 79.8</SummaryItemPrice>
                        </SummaryItem> 
                        <SummaryItem>
                            <SummaryItemText>Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.5</SummaryItemPrice>
                        </SummaryItem> 
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>$ 9.9</SummaryItemPrice>
                        </SummaryItem> 
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ total</SummaryItemPrice>
                        </SummaryItem> 
                        <SummaryButton>CheckOut Now</SummaryButton>
                    </Summary> 
                </Bottom> 
          </Wrapper>
          <Footer/>      
    </Container>
  );
}

export default Cart;
