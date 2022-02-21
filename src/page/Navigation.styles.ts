import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled('nav')(
    () => `
        display: flex;
        flex-direction: row;
        font-size: calc(10px + 2vmin);
        padding-top: 20px;
        padding-bottom: 20px;
`
);

export const NavLink = styled(Link)(
    () => `
    color: white;
    padding-right: 20px;
    padding-left: 20px;

    :hover {
        color: lightgray;
    }
`
)