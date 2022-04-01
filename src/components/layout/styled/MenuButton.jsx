import React from 'react';
import styled from '@emotion/styled';

const StyledMenuButton = styled.div`
  cursor: pointer;
  & span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #707070;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }
  & span:first-of-type {
    transform-origin: 0% 0%;
  }
  & span:nth-last-of-type(2) {
    transform-origin: 0% 100%;
  }
  &.active span {
    opacity: 1;
    transform: rotate(-46deg) translate(-5px, -1px);
    background: #232323;
  }
  &.active span:nth-last-of-type(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  &.active span:nth-last-of-type(3) {
    transform: rotate(46deg) translate(0, -1px);
  }
`;

export default function MenuButton ({ ...props }) {
  return (
    <StyledMenuButton {...props} />
  )
}