import styled from "@emotion/styled";



export const Display = styled.p`
  font-size: 4.5rem;
  /* light */
  font-weight: 400;
`;

export const HeadingH1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeadingH2 = styled.h2`
  font-size: 3.75rem;
  /* medium */
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeadingH3 = styled.h3`
  font-size: 3rem;
  font-weight: 500;
`;

export const HeadingH4 = styled.h4`
  font-size: 2.25rem;
  font-weight: 400;
`;

export const HeadingH5 = styled.h5`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Subtitle = styled.p`
  font-size: 1.75rem;
`;




export const EnglishContent = styled.p`
  white-space: pre-wrap;
  line-height: 1.4;
  word-wrap:break-word;
`;

export const ChineseContent = styled.p`
  white-space: pre-wrap;
  line-height: 1.7;
  word-break: break-all;

  a {
    color: #0070f3;
  }

  a:hover {
    color: #005cc5;
    text-decoration: underline;
  }
`;