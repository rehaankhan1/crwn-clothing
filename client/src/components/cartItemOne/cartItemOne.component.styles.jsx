import styled from 'styled-components';



export const Date = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 21px;
line-height: 25px;

color: #8C8C8C;
`

export const Address = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 21px;
line-height: 25px;
max-width:400px;
color: #000000;
`

export const AddressOwner = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 21px;
line-height: 25px;
margin-top:10px;
color: #000000;
`

export const Billed = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.1em;
margin-top: 50px;
color: #858585;
`

export const Division = styled.div`
display: flex;
flex-direction: row; 
`

export const Heading = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 49px;

color: #000000;
`
export const HeadingLight = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: initial;
font-size: 30px;
line-height: 49px;
margin-left: 8px;
color: #000000;
`

export const StatusPending = styled.div`
font-family: Roboto;
font-style: dark;
font-weight: bold;
font-size: 20px;
line-height: 19px;

color: #938B8B;
`
export const StatusCancelled = styled.div`
font-family: Roboto;
font-style: dark;
font-weight: bold;
font-size: 20px;
line-height: 19px;

color: #FF4136;
`

export const StatusSuccessful = styled.div`
font-family: Roboto;
font-style: dark;
font-weight: bold;
font-size: 20px;
line-height: 19px;

color: #079F49;
`


export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  margin-top:30px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%
    &:last-child {
      width: 12%;
    }
  }
`;

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;