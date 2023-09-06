import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label `
    color: #fff;
    display: block;
    font-size: 2rem;
    margin: 15px 0;
`;

const Select = styled.select `
    width:100%;
    display: block;
    font-size: 1.8rem;
    padding: 0.5rem;
    margin: 15px 0;
    border-radius: 0.7rem;
`;

const useSelectMoney  = (label, options) =>{

    const [ state, setState ] = useState('');
    
    const SelectMoney = () => (
        <>
            <Label> { label } </Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">Choose Currency</option>
                { options.map(option =>(
                    <option
                        key={option.id}
                        value={option.id}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
        </>
    );
    return [state, SelectMoney];
}

export  default useSelectMoney;