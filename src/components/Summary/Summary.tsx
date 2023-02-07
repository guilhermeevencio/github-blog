import {
  SummaryContainer,
  ImageContainer,
  NameContainer,
  BioContent,
  LinksContainer,
  InfoContainer,
} from './style'

export function Summary() {
  return (
    <SummaryContainer>
      <ImageContainer>
        <img
          src="https://avatars.githubusercontent.com/u/93713979?v=4"
          alt="profile image"
        />
      </ImageContainer>
      <InfoContainer>
        <NameContainer>
          <h1>Guilherme Luz</h1>
          <a href="https://github.com/guilhermeevencio">Github</a>
        </NameContainer>
        <BioContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae
          doloremque ratione veniam fugit repellendus itaque ipsa aliquid
          provident reprehenderit omnis fuga minima delectus est officia,
          tenetur minus odio illo.
        </BioContent>
        <LinksContainer>
          <a href="https://github.com/guilhermeevencio">Github</a>
          <a href="https://linkedin.com/in/guilhermeevencio">Linkedin</a>
          <p>Rocketseat</p>
          <p>50 seguidores</p>
        </LinksContainer>
      </InfoContainer>
    </SummaryContainer>
  )
}
