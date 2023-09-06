import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imgApp from './img/imagen-criptos.png';
import Formulario from './components/Formulario';
import Quotation from './components/Quotation';
import Spinner from './components/Spinner';

//make component container
const Container = styled.div `
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width:992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

//make component for img
const Pic = styled.img `
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
//make componenet with styled
const Heading = styled.h1 `
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 3rem;
  color: #FFC300;

  &::after {
    content: '';
    width: 100px;
    height: 10px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;
function App() {
  //define new state for query API
  const [ currencies, setCurrencies] = useState({});
  const [ result, setResult] = useState({});
  //spinner
  const [ loading, setLoading] = useState(false);


  useEffect(()=>{
    if(Object.keys(currencies).length >0){
      //consult API
      const cryptoValue = async()=>{
        setLoading(true);
        setResult({});
        const { currency, cryptoCurrency} = currencies;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
        //response from API
        const request = await fetch(url);
        const response = await request.json();
        
        setResult(response.DISPLAY[cryptoCurrency][currency]);
        setLoading(false);
      }
      cryptoValue();
    }
  }, [currencies]);

  return (
    <>
      <Container>
        <Pic
          src= { imgApp }
          alt = 'Crypto Value'
          title = 'Crypto Value'
        />
        <div>
          <Heading>Trade Cryptocurrency</Heading>
          <Formulario 
            setCurrencies={setCurrencies}
          />

          
          {loading && <Spinner />}
          {result.PRICE && <Quotation result={result} />}
        </div>
      </Container>
    </>
  )
}

export default App
