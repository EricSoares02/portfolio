import styled from "styled-components";

const ProjectsCSS = {
  Conteiner: styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  `,

  TextConteiner: styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  `,

  TextBox: styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    span {
      font-weight: bolder;
      font-size: 30px;
    }
    p {
      color: ${(props) => props.theme.colors.shadowcolor};
      text-align: center;
    }
  `,

  ProjectsConteiner: styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 70px;
    justify-content: center;
    overflow-y: scroll;
  `,

  ProjectsCase: styled.section`
    width: 400px;
    height: 430px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    img {
      object-fit: cover;
      border-radius: 8px;
    }
  `,

  Details: styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    h1 {
      font-size: 26px;
    }
    p {
      text-align: justify;
      font-size: 12px;
      color: ${(props) => props.theme.colors.shadowcolor};
    }
  `,

  ViewProject: styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    a {
      color: ${(props) => props.theme.colors.headerBlue};
      font-weight: bold;
      font-size: 14px;
      text-decoration: none;
    }
  `,
};

export { ProjectsCSS };
