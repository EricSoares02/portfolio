import styled from "styled-components";

const ProjectsCSS = {
  Conteiner: styled.div`
    width: 100%;
    height: auto;
    background-color: red;
  `,

  Text: styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    span{
        font-weight: bolder;
        font-size: 30px;
    }
  `,

  ProjectsConteiner: styled.div`
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 12px;
    justify-content: center;
    background-color: yellow;
    overflow-y: scroll;
  `,

  ProjectsCase: styled.section`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-color: burlywood;
    img{
        object-fit: contain;
        border-radius: 20px;
    }
  `,

  Details: styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: red;
    padding: 10px;
    `,

  ViewProject: styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: darkblue;
`,

};

export { ProjectsCSS };
