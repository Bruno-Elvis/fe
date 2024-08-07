import { styled, keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; };
  to { opacity: 1; };

`;

const fadeOut = keyframes`
  from { opacity: 1; };
  to { opacity: 0; };

`;

const scaleIn = keyframes`
  from { scale: 0; };
  to { scale: 1; };

`;

const scaleOut = keyframes`
  from { scale: 1; };
  to { scale: 0; };

`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${ fadeIn } 0.5s;

  ${({ isleaving }) => isleaving && css`animation: ${ fadeOut } 0.3s forwards;`};

`;

export const Container = styled.div`
  background: #FFF;
  border-radius: 4px;
  padding: 24px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.84);
  animation: ${ scaleIn } 0.5s;

  ${({ isleaving }) => isleaving && css`animation: ${ scaleOut } 0.5s forwards;`};

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
      danger ? theme.colors.danger.main : theme.colors.primary.dark[900]

    )};

  }

  .modal-body {
    margin-top: 32px;

  }

`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    margin-right: 24px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};
    cursor: pointer;

  }

`;
