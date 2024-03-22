import styled from "styled-components";

const HeaderCSS = {
  Header: styled.header`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    box-shadow: 0 0 7px ${(props) => props.theme.colors.shadowcolor};
    transition: ${(props) => props.theme.transition};
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.white};
      &:hover {
        color: ${(props) => props.theme.colors.purple};
      }
    }
    .division1 {
      width: 40%;
    }
    .division2 {
      width: 10%;
    }
    .division3 {
      width: 40%;
    }
  `,

  Conteiner: styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,

  Divisions: styled.section`
    height: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
  `,

  MyName: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    h1 {
      font-size: 16px;
    }
  `,

  List: styled.ul`
    width: auto;
    height: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  `,

  Inside_list: styled.li`
    list-style: none;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    a {
      transition: ${(props) => props.theme.transition};
    }
  `,

  Language_options: styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    border: none;
    img {
      border-radius: 9999px;
      object-fit: cover;
    }
  `,
};

export { HeaderCSS };
