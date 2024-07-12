import { Button, DocsIcon, DocumentButtonContainer } from '~shared/ui';

export const InstructionContent = () => {
  return (
    <>
      <DocumentButtonContainer>
        <Button className="flex items-center" type="primary" icon={<DocsIcon />}>
          Инструкция план набора PDF
        </Button>
      </DocumentButtonContainer>
      <div className="youtube-frame">
        <iframe
          src="https://www.youtube.com/embed/K82QuOcpgM0"
          title="YouTube video player"
          width="560"
          height="315"
          frameBorder="0"
          allow="accelerometer;fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
