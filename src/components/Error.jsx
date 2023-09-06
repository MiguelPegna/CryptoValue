import styled from "@emotion/styled";

const MsgError = styled.div `
    color: #C70039;
    background-color: #FF5733;
    padding: 1rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    text-align: center;
    border-radius: 0.5rem;
    border-color: #900C3F;
    border-style: solid;
    border-width: 3px;

    &:hover{
        background-color: #F84B26;
        color:F84B26;
        border-color: #fff;
    }
`;

const Error = ({children})=>{
    return (
        <>
            <MsgError>
                { children }
            </MsgError>
        </>
    );
}

export default Error;