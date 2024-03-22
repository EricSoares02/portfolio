import styled from "styled-components";

const ContactCSS = {
  Conteiner: styled.section`
    width: 100%;
    height: 300px;
    display: block;
    justify-content: center;
    margin-bottom: 100px;
  `,

  Text: styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 30px;
    }
  `,

  Contacts: styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  `,
};

export { ContactCSS };
