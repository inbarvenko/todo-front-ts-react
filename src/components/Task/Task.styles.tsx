import styled, { css } from "styled-components";

type PropsType = {
    completed: boolean;
}

export const TaskWrapper = styled.div<PropsType>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .Text {
      flex: 1;
      padding: 0px 20px;

      font-size: 18px;
      ${props => props.completed && css`
        color: grey;
        text-decoration: line-through;
      `}
    }
`;