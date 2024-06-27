import { useMemo } from 'react';

import { Link } from 'react-router-dom';

import { Trans, useTranslation } from 'react-i18next';

import { RoutesUrls } from '~shared/lib/router';

import { Breadcrumb, FileButton, IDCardIcon, LigotIcon, SertificateIcon } from '~shared/ui';

const InstructionPage = () => {
  const { t } = useTranslation();

  const renderBreadCrumbs = useMemo(
    () => [
      {
        title: (
          <Link className="!text-[#D87E2E]" to={RoutesUrls.personalInfo}>
            {t('cm:routes.personalInfo')}
          </Link>
        ),
      },
      {
        title: (
          <Link className="!text-[#D87E2E]" to={RoutesUrls.selectSpuz}>
            {t('cm:routes.selectSpuz')}
          </Link>
        ),
      },
      {
        title: (
          <Link className="!text-[#D87E2E]" to={RoutesUrls.viewRegistrations}>
            {t('cm:routes.viewRegistrations')}
          </Link>
        ),
      },
      {
        title: (
          <Link className="!text-[#D87E2E]" to={RoutesUrls.tours}>
            {t('cm:routes.tours')}
          </Link>
        ),
      },
    ],
    [t]
  );

  return (
    <>
      <Breadcrumb className="text-[16px] mb-8" items={renderBreadCrumbs} />
      <FileButton
        href="/spuz/pdf/abiturient_spuz.pdf"
        title={`${t('cm:bottomLinks.manual')} PDF`}
        target="_blank"
      />
      <section className="flex mb-5 sm:flex-col gap-7">
        <div className="w-1/2 sm:w-full flex flex-col gap-5">
          <h1 className="text-[#12212f] font-bold text-lg text-center">{t('cm:needDocs')}</h1>
          <div className="flex items-center gap-6">
            <IDCardIcon />
            <Trans i18nKey="cm:needPassport" components={{ 1: <br /> }} />
          </div>
          <div className="flex items-center gap-8">
            <SertificateIcon />
            <Trans i18nKey="cm:needSertificate" components={{ 1: <br /> }} />
          </div>
        </div>
        <div className="w-1/2 sm:w-full flex flex-col gap-3">
          <h1 className="text-[#12212f] font-bold text-lg text-center">{t('cm:ifLigot')}</h1>
          <div className="flex items-center gap-6">
            <LigotIcon />
            {t('cm:needLigotDocs')}
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-3">
        <div className="w-fit">
          <iframe
            src="https://www.youtube.com/embed/rTsT2DpZXNg?si=L8AtV73zWH3jJdLv"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-fit">
          <iframe
            src="https://www.youtube.com/embed/Z-JC__U6RnM?si=2c1HA3iOvZqVZrHT"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-fit">
          <iframe
            src="https://www.youtube.com/embed/CkzT9Xx2QB4?si=Gx47Cuwke0crtWCE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-fit">
          <iframe
            src="https://www.youtube.com/embed/5Ch7R1p0ijY?si=RhzXIgjlbbfRwVSa"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-frame">
          <iframe
            src="https://www.youtube.com/embed/FTvU-KLiMso?si=KEEckE8-x7x97ALn"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default InstructionPage;
