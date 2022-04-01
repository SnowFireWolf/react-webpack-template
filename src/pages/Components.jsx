import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Flex, Section, Container } from "@/components/base/Layout";
import {
  Display,
  HeadingH1,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH5,
  Subtitle,
  EnglishContent,
  ChineseContent
} from "@/components/base/Typography";
import {
  PrimaryButton,
  PrimaryButtonNoShadow,
  LinkButton,
  FilledLinkButton
} from "@/components/base/Buttons";




const ComponentsHeading = styled(HeadingH3)`
  margin-bottom: .5rem;
`;



export default function Components() {

  return (
    <Container>
      <HeadingH2>組件 Components</HeadingH2>
      <Subtitle>TANFT 的組件列表，包含測試。</Subtitle>

      <Section>
        <ComponentsHeading>按鈕 Buttons</ComponentsHeading>

        <PrimaryButton>一般主色按鈕</PrimaryButton>
        <PrimaryButtonNoShadow>按鈕無陰影</PrimaryButtonNoShadow>
        <LinkButton>一般連結按鈕</LinkButton>
        <FilledLinkButton>填充連結按鈕</FilledLinkButton>
      </Section>

      <Section>
        <ComponentsHeading>標題 Title</ComponentsHeading>

        <Display>Display 72px, <br />In love with Vue.</Display>
        <HeadingH1>Heading (h1) 4.5rem</HeadingH1>
        <HeadingH2>Heading (h2) 3.75rem</HeadingH2>
        <HeadingH3>Heading (h3) 3rem</HeadingH3>
        <HeadingH4>Heading (h4) 2.25rem</HeadingH4>
        <HeadingH5>Heading (h5) 1.5rem</HeadingH5>
      </Section>

      <Section>
        <ComponentsHeading>內文 Content</ComponentsHeading>

        <EnglishContent style={{ maxWidth: "720px", marginTop: "1rem" }}>
          English Test 16px (1rem) <br /><br />
          What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.<br /><br />
          When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.
        </EnglishContent>

        <ChineseContent style={{ maxWidth: "720px", marginTop: "1rem" }}>
          中文排版測試 16px (1rem) <br />
          戰上有際大心傳分天農。己資處由會告呢放；公面母的還助書見小了興外間回長行十目據對書音招習微愛夫界？紀實綠兒後心保寫每多幾林人。然臺大合食活不南解容音不身論。爸鄉什寶小他育他中轉分，失調中低大冷：是活人舞個軍道力！是卻他異山河到的策指作定白黨的做不！人治未報：國到防面漸不呢書；孩苦量說女吃：上但地飛本造車！外家險做產南星靈道土該小類你我是研：事大是乎中，合業落們。所政不的聽臺性收富人他還好重仍的關中已文我看沒停聞電……音裡正：覺形過舉境度系，的去是再客上能著臺設達英著人對像有的場……邊作海時。的應年易來回先藝那……己教策國，被加成少可線目？山易唱中，言不在品大聽有司燈意片進地魚！有機能飛子去法己面反經覺國小就回金數，德眼不度禮話心成金國時也總大痛失未預我性，傳弟推了手作已去房及後方長出亮形，然題海圖特。放出作是的；加險他出，配政一長對足？可區事跟失一收分前、角候方它星早片生爾模兒容他來女最使議見。
        </ChineseContent>
      </Section>

    </Container>
  )
}