import styled from "styled-components";

const SkillCSS = {
  Conteiner: styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-bottom: 200px;
    background-color: ${(props) => props.theme.colors.beige};
  `,

  Align: styled.div`
    width: 80%;
    height: 100%;
    display: block;
  `,

  Text: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
  `,

  SkillConteiner: styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 90%;
  `,

  SkillCases: styled.section`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 12px;
    justify-content: center;
    width: 400px;
    height: 100%;
    padding: 10px;
    background-color: white;
  `,

  TechCase: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: green;
    img {
      object-fit: contain;
    }
  `,
};

export { SkillCSS };
