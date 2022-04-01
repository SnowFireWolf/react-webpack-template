import React from 'react';
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'



const StyledPrimaryButton = styled.button`
  display: inline-block;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1.2rem;
  padding: .65rem 1.75rem;
  border: none;
  border-color: #365EFF;
  border-radius: 99rem;
  background-color: #365EFF;
  cursor: pointer;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.26);

  &:hover {
    color: #FFFFFF;
    background: #2852f6;
  }

  &:active {
    color: #FFFFFF;
    background: #365EFF;
    box-shadow: none;
  }
`;

export const PrimaryButton = ({ ...props }) => {
  return (
    <StyledPrimaryButton {...props} />
  )
};



const StyledPrimaryButtonNoShadow = styled(PrimaryButton)`
  box-shadow: none;

  &:hover {
    color: #FFFFFF;
    background: #2852f6;
  }

  &:active {
    color: #e7e7e7;
    background: #2a4cd6;
  }
`;

export const PrimaryButtonNoShadow = ({ ...props }) => (
  <StyledPrimaryButtonNoShadow {...props} />
);



// 連接按鈕 LinkButton
const StyledLinkButton = styled.a`
  display: inline-block;
  color: #757272;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 1.2rem;
  padding: 0.5rem 1.23rem;
  border-radius: 99rem;
  cursor: pointer;

  &:hover {
    color: #474747;
    background: #9cffe1;
  }

  &:active {
    color: #313131;
    background: #2FEDB4;
  }
`;

export const LinkButton = ({ ...props }) => {
  const navigate = useNavigate();

  const handleLinkClick = (event) => {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    if (href) {
      navigate(href);
    }
  }

  return (
    <StyledLinkButton
      onClick={event => handleLinkClick(event)}
      {...props}
    />
  )
};


// 填充連結按鈕 FilledLinkButton
const StyledFilledLinkButton = styled(LinkButton)`
  background-color: #83ffda;
  color: #474747;

  &:hover {
    background-color: #45e9b8;
  }

  &:active {
    background-color: #39cca0;
  }
`;

export const FilledLinkButton = ({ ...props }) => (
  <StyledFilledLinkButton {...props} />
)