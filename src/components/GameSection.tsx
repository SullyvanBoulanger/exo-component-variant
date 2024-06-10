import React, { ReactElement } from "react";
import { Game } from "../model/Game";
import Section from "../design/section/Section";
import SectionHeader from "../design/section/SectionHeader";
import SectionBody from "../design/section/SectionBody";
import SubSectionTitle from "../design/section/SubSectionTitle";
import SectionBackgroundImage from "../design/section/SectionBackgroundImage";
import SectionFooter from "../design/section/SectionFooter";
import Button from "../design/Button";
import { Variant } from "../design/Variant";

export default function GameSection({
  title,
  backgroundImageSrc,
  subSections,
}: Game): ReactElement {
  return (
    <Section>
      <SectionBackgroundImage src={backgroundImageSrc} />
      <SectionHeader>{title}</SectionHeader>

      <SectionBody>
        {subSections.map(({ title, body }, id) => (
          <React.Fragment key={id}>
            <SubSectionTitle>{title}</SubSectionTitle>
            <p>{body}</p>
          </React.Fragment>
        ))}
      </SectionBody>

      <SectionFooter>
        <Button variant={Variant.SUCCESS}>J'aime</Button>
        <Button variant={Variant.DANGER}>Je n'aime pas</Button>
      </SectionFooter>
    </Section>
  );
}
