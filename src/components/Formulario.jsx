import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMoney from "../hooks/useSelectMoney";
import { money } from "../data/moneys";
import Error from "./Error";

const CotizarBtn = styled.input `
    background-color: #48AAEE;
    color: #ccc;
    font-weight: bold;
    font-size: 2rem;
    border:none;
    border-radius: 2%;
    width: 80%;
    padding: 1rem;
    text-transform: uppercase;
    transition: background-color .3s ease;
    display:block;
    margin-top: 2rem;
    margin-left: 2rem;

    &:hover{
        cursor: pointer;
        background-color: #2977AE;
        color: #fff;
    }

`;

const Formulario = ({setCurrencies})=>{
    //create useState for changes of currencies
    const [ cryptos, setCryptos ] = useState([]);
    const [ error, setError ] = useState(false);
    //State of currencies
    const [ currency, SelectMoney ] = useSelectMoney('Choose Currency', money);
    const [ cryptoCurrency, SelectCrypto ] = useSelectMoney('Choose CryptoCurrency', cryptos);

    useEffect(() => {
        const requestAPI = async() =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const request = await fetch(url);
            const response = await request.json();
            //filter info api
            const arrayData = response.Data.map(crypto =>{
                const objeto ={
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName,
                };
                return objeto;
            });
            setCryptos(arrayData);
        }
        requestAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if([currency, cryptoCurrency].includes('')){
            setError(true);
            return;
        }
        //if send the form correctly
        setError(false);
        setCurrencies({
            currency,
            cryptoCurrency
        });
    }

    return(
        <>
            {error && <Error>Select both types of currency</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMoney />
                <SelectCrypto />
                <CotizarBtn 
                    type="submit" 
                    value="quote"
                />
            </form>
        </>
    );
}

export default Formulario;