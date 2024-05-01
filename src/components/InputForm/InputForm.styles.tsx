import styled from "styled-components";

export const InputFormWrapper = styled.div<{divClass?: string}>`
    display: flex;
    gap: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 600px;

    background-color: #ffffff;
    padding: 20px 40px;
    border-radius: 20px;
    border: 2px solid #0047ab42;

    .Input {
        width: 300px;
        font-size: 22px;
    }

    .Button {
        font-size: 16px;
        background-color: #0047AB;
    }
`;