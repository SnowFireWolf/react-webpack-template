import React from "react";
import styled from "@emotion/styled";
import { FilledLinkButton } from "@/components/base/Buttons";
import { Wrapper } from "@/components/base/Layout";



const Title = styled.h1`
  font-size: 6em;
`;

const Subtitle = styled.p`
  font-size: 2em;
`;

const NotFoundButton = styled(FilledLinkButton)`
  margin-top: 1rem;
`;



export default function NotFound() {
  return (
    <Wrapper>
      <Title>Page Not Found</Title>
      <Subtitle>你似乎走錯地方惹。</Subtitle>

      <NotFoundButton href="/">回到首頁</NotFoundButton>
    </Wrapper>
  )
}