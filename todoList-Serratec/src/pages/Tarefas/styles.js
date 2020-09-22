import styled from 'styled-components';
import { shade } from 'polished'



export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    margin-bottom: 40px;

    ul{
        display: flex;
        list-style: none;
    }

    li{
        margin-left: 7px;
        font-size: 16px;
    }

    a{
        color: #333;
        text-decoration: none;
    }

    &:hover {
        color: #04d361;
    }
`;



export const Title = styled.h1`
    font-size: 36px;
    color: ${props => props.ativo ? "#fff" : "000"};
`;

export const Form = styled.form`
    margin-top: 25px;
    max-width: 700px; 
    display: flex; 
    
    input {
        flex: 1;
        height: 50px;
        padding: 0 25px;
        border:0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
    }

    &::placeholder {
        color: #a8a8b3
    }

    button{
        width: 120px;
        height: 50px;
        background: #04d361;
        border:0;
        border-radius: 0 5px 5px 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.5s;

        &:hover{
            background: ${shade(0.2, '#04d361')}
        };
    };
`;


export const ErrorMessage = styled.span`
    display: block;
    color: #c53030;
    margin-top: 10px;
`;

export const Tasks = styled.div`
    margin-top: 40px;
    max-width: 700px;

    div{
        background: #fff;
        border-radius: 5px;
        padding: 25px;
        text-decoration: none;
        align-items: center;
        transition: transform 0.5;

        /* sempre q tiver uma div dps */
        & + div{
            margin-top: 16px;
        }

        &:hover{
            transform: translateX(10px);
        }

        strong{
            font-size: 20px;
            color: #3d3d4d;
            margin-right: 25px;
        }

        span {
            margin-left: 0;
        }

        svg{
            color: #cbcbd6;
            cursor: pointer;
        }
    }
`;