import React from 'react';
import styled from '@emotion/styled';
import { ChineseContent, HeadingH5 } from '@/components/base/Typography';



const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f6f6f6;
  padding: 2rem 0;
  border-top: 1px solid #d8d8d8;
`;

const StyledFooterHeading = styled(HeadingH5)`
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledFooterDescription = styled(ChineseContent)`
  text-align: center;
`;



export default function MenuButton({ ...props }) {
  return (
    <StyledFooter {...props}>
      <div>
        <StyledFooterHeading>科宅工作室</StyledFooterHeading>
        <StyledFooterDescription>(02) 2427-8338</StyledFooterDescription>
        <StyledFooterDescription>基隆市中正區正義路74巷3-1號</StyledFooterDescription>
      </div>
    </StyledFooter>
  )
}