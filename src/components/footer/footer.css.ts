import styled from "styled-components";

const FooterCSS = {
  Conteiner: styled.footer`
    width: 100%;
    height: 600px;
    color: white;
    background-color: ${(props) => props.theme.colors.footerColor};
    padding: 20px;
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  LogoCase: styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    .line {
        width: 30%;
        height: 2px;
        background-color: white;
    }
  `,

  TCase: styled.div`
    width: 80%;
    height: 80%;
    display: flex;
  `,

  FormCase: styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    `,

   Form: styled.form`
    width: 80%;
    height: 10%;
    position: absolute;
    bottom: 0;
    `,

   Input: styled.input.attrs({type: "text"})`
     width: 70%;
     height: 100%;
     outline: none;
    `,

    Submit: styled.input.attrs({type: "submit"})`
    width: 30%;
    height: 100%;
    outline: none;
   `,

    MediaCase: styled.div`
        width: 50%;
        height: 100%;
        display: block;
        background-color: red;
    `,


};

export { FooterCSS };
