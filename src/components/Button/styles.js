import { styled, css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  padding: 0 16px;
  border: none;
  background: ${ ({ theme }) => theme.colors.primary.main };
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.84);
  font-weight: bold;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  transition: background 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${ ({ theme }) => theme.colors.primary.light };

  }

  &:active {
    background: ${ ({ theme }) => theme.colors.primary.dark };

  }

  &[disabled] {
    background: rgb(204, 204, 204) !important;
    cursor: default !important;

  }

  ${({theme, danger}) => danger && css`
    background: ${ theme.colors.danger.main };

    &:hover {
    background: ${ theme.colors.danger.light };

    }

    &:active {
      background: ${ theme.colors.danger.dark };

    }

  `}

`;
