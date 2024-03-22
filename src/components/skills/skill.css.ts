import styled from "styled-components";

const SkillCSS = {
  Conteiner: styled.div`
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
    background-color: ${(props) => props.theme.colors.lightBlue};
  `,

  Text: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55%;
    height: 20%;
    gap: 5px;
    h1 {
      font-size: 30px;
    }
    p{
      font-size: 12px;
      color: ${(props) => props.theme.colors.shadowcolor};

    }
  `,

  SkillConteiner: styled.div`
    display: grid;
    grid-template-columns: repeat(6, auto);
    gap: 12px;
    width: 55%;
    height: 80%;
    padding: 15px;
    img {
      object-fit: contain;
    }
  `,

  SkillCase: styled.div<{ $display?: string; }>`
    display: block;
    width: 65px;
    height: 80px;
    div{
      width: 100%;
      height: 15px;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-weight: bold;
      display: flex;
    }
  `
};

export { SkillCSS };
