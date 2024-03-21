import styled from "styled-components";

const AboutMeCSS = {
  Conteiner: styled.section`
    width: 100%;
    height: 542px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.beige};
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
      font-size: 30;
      display: flex;
      align-items: center;
      gap: 5px;
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
