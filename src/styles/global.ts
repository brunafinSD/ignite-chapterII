import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        
        --background: #f0f2f5;
        --shape: #ffffff;

        --red: #e52e4d;
        
        --blue: #5429cc;
        --blue-light: #6933ff;
        
        --text-title: #363f5f;
        --text-body: #969cb3;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px (Desktop)
    // 16 * 0,9375 = 15px
    // 16 * 0,875 = 14px

    // REM = 1rem = tamanho font-size da página
    // se o font-size da página for 16px 1 rem vale 16px
    // se diminuirmos em porcentagem a fonte, o rem ajusta automaticamente o tamanho
    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }



    body{
        background: var(---background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    //tudo que tiver desabilitado
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed; // simbolo de proibido
    }


`;