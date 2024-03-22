import { devices } from "@/app/global.screen";
import styled from "styled-components";

const AboutMeCSS = {
  Conteiner: styled.section`
    width: 100%;
    height: 542px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.beige};
    @media ${devices.sm} {
      height: 500px;
    }
  `,

  AlignConteiner: styled.div`
    width: 80%;
    height: 100%;
    display: flex;
  `,

  Division: styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Me: styled.div`
    width: 80%;
    height: 80%;
    display: block;
    align-items: center;
    justify-content: center;
    gap: 50px;
    h1 {
      font-size: 70px;
    }
    span {
      color: ${(props) => props.theme.colors.purple};
    }
    h2 {
      font-size: 18px;
      color: ${(props) => props.theme.colors.shadowcolor};
      padding-bottom: 20px;
    }
    p {
      text-align: justify;
      padding-bottom: 40px;
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.purple};
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    @media ${devices.xl} {
      h1 {
        font-size: 60px;
      }
      h2 {
        font-size: 14px;
        padding-bottom: 10px;
      }
      p {
        font-size: 15px;
        padding-bottom: 30px;
      }
    }
    @media ${devices.lg} {
      h1 {
        font-size: 50px;
      }
      h2 {
        font-size: 14px;
        padding-bottom: 5px;
      }
      p {
        font-size: 14px;
        padding-bottom: 20px;
      }
    }
    @media ${devices.md} {
      h1 {
        font-size: 45px;
      }
      h2 {
        font-size: 12px;
        padding-bottom: 5px;
      }
      p {
        font-size: 12px;
        padding-bottom: 10px;
      }
    }
    @media ${devices.sm} {
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 12px;
        padding-bottom: 5px;
      }
      p {
        font-size: 12px;
        padding-bottom: 10px;
      }
      a{
        font-size: 12px;
      }
    }
    @media (max-width: 500px) {
      z-index: 500;
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 12px;
        padding-bottom: 5px;
      }
      p {
        font-size: 10px;
        padding-bottom: 10px;
      }
    }
    @media ${devices.xs}{
      white-space: pre-wrap;
      z-index: 500;
      h1 {
        font-size: 20px;
      }
      h2 {
        font-size: 12px;
        padding-bottom: 5px;
      }
      p {
        font-size: 10px;
        padding-bottom: 10px;
      }
    }
  `,

  AvatarCase: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export { AboutMeCSS };
