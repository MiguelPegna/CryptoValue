import styled from "@emotion/styled";

const Result = styled.div `
    margin-top: 2.5rem;
    color: #26A8F8;
    padding-left: 2rem;
    font-size: 1rem;

`;

const Caja = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Imagen = styled.img`
    display:block;
    width: 5rem;
    height: auto;
    padding:auto;
`;

const Info = styled.p `
    color: #64737C;
    span{
        color: #ccffcc;
    }
`;

const Price = styled.p `
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .5rem;
    span{
        color:#ff0000;
    }
`;

const Quotation= ({result})=>{
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE, FROMSYMBOL} = result;
    return (
        <>
            <Result>
                <Caja>
                    <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt={`${FROMSYMBOL}`} title={`${FROMSYMBOL}`} />
                </Caja>

                <Price>
                    Price is: <span>{PRICE}</span>
                </Price>
                <Info>
                    Highest price today: <span>{HIGHDAY}</span>
                </Info>

                <Info>
                    Lowest price today: <span>{LOWDAY}</span>
                </Info>

                <Info>
                    Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span>
                </Info>

                <Info>
                    Last update: <span>{LASTUPDATE}</span>
                </Info>

            </Result>
        </>
    );
}

export default Quotation;