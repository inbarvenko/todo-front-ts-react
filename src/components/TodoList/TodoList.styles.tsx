import styled from "styled-components";

export const TodoListWrapper = styled.div`
    padding: 30px 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;

    .Title {
        font-size: 42px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        align-items: center;
    }

    .TodoList {
        width: 80%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;

        justify-content: space-around;
    }

    .Empty {
        font-size: 30px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        align-items: center;
        display: flex;
        justify-content: center;
    }
`;