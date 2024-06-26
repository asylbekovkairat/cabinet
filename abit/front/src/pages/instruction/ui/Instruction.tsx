import { useTranslation } from 'react-i18next';

import { FileButton } from '~shared/ui';

const InstructionPage = () => {
  const { t } = useTranslation();

  return (
    <section>
      <FileButton
        href="/spuz/pdf/abiturient_spuz.pdf"
        title={`${t('cm:bottomLinks.manual')} PDF`}
        target="_blank"
      />
      <div
        className="youtube-frame"
        style={{ maxWidth: '560px', maxHeight: '315px', margin: '10px 0' }}
      >
        <iframe
          style={{ maxWidth: '560px', maxHeight: '315px', margin: '10px 0' }}
          src="https://www.youtube.com/embed/zB_0vz_Ia68?si=hE8kHl9WdhLLUTqn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div
        className="youtube-frame"
        style={{ maxWidth: '560px', maxHeight: '315px', margin: '10px 0' }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rTsT2DpZXNg?si=L8AtV73zWH3jJdLv"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default InstructionPage;
