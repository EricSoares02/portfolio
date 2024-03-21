import styled from "styled-components";



const FooterCSS = {

    Conteiner: styled.footer`
        width: 100%;
        height: 600px;
        color: white;
        background-color: black ;//${props=>props.theme.colors.lightBlack};
        padding: 20px;
        position: relative;
        bottom: 0;
    `,


}

export { FooterCSS }