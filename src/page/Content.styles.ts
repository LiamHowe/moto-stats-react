import styled from '@emotion/styled';

export const Content = styled('div')(
    () => `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        font-size: calc(10px + 2vmin);
`
);