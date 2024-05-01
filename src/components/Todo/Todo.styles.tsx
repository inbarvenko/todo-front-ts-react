import styled from "styled-components";

export const TodoWrapper = styled.div`
    width: 450px;
    /* height: 250px; */
    background-color: white;
    padding: 10px 40px 40px 40px;
    border-radius: 20px;
    border: 1px solid #0047ab;

    .Header {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: space-between;

        &-Title {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
    }
`;