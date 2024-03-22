import { devices } from "@/app/global.screen";
import styled from "styled-components";

const BusinessCSS = {
  Conteiner: styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  `,

  Align: styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  BusinessAndApllications: styled.div`
    width: 65%;
    height: 90%;
    display: flex;
    @media ${devices.lg} {
      display: block;
    }
  `,

  Text: styled.section`
    width: 45%;
    height: 100%;
    display: flex;
    padding-top: 100px;
    h1 {
      font-size: 30px;
    }
    @media ${devices.lg} {
      width: 100%;
      height: 30%;
      margin-bottom: 70px;
      h1 {
        font-size: 25px;
      }
    }
  `,

  BusinessAndApllicationsCase: styled.section`
    width: 55%;
    height: 100%;
    display: block;
    overflow-y: scroll;
    @media ${devices.lg} {
      translate: 150px 0;
      width: 100%;
      height: 50%;
    }
    @media ${devices.sm} {
      translate: 100px 0;
    }
    @media (max-width: 500px) {
      translate: 50px 0;
    }
  `,

  Cases: styled.section`
    width: 100%;
    height: 200px;
    display: block;
    border-bottom: 1px solid ${(props) => props.theme.colors.shadowcolor};
  `,

  Title: styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    span {
      font-size: 22px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.lightBlack};
      transition: ${(props) => props.theme.transition};
      &:hover {
        color: ${(props) => props.theme.colors.blue};
      }
    }
    @media (max-width: 500px) {
      height: 25%;
      span {
        font-size: 18px;
      }
    }
  `,

  Details: styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    padding: 10px;
    p {
      font-size: 14px;
      color: ${(props) => props.theme.colors.shadowcolor};
      text-align: justify;
    }
    @media (max-width: 500px) {
      height: 75%;
      p {
        font-size: 12px;
      }
    }
  `,
};

export { BusinessCSS };
