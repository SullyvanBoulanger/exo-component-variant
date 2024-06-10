import React, { ReactElement } from "react";
import { Game } from "../model/Game";
import Section from "../design/Section";
import SectionTitle from "../design/SectionTitle";
import Subsection from "../design/SectionBody";
import SubsectionTitle from "../design/SubsectionTitle";
import SectionBackgroundImage from "../design/SectionBackgroundImage";
import SectionFooter from "../design/SectionFooter";
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
      <SectionTitle>{title}</SectionTitle>

      <Subsection>
        {subSections.map(({ title, body }, id) => (
          <React.Fragment key={id}>
            <SubsectionTitle>{title}</SubsectionTitle>
            <p>{body}</p>
          </React.Fragment>
        ))}
      </Subsection>

      <SectionFooter>
        <Button variant={Variant.SUCCESS}>J'aime</Button>
        <Button variant={Variant.DANGER}>Je n'aime pas</Button>
      </SectionFooter>
    </Section>
  );
}
