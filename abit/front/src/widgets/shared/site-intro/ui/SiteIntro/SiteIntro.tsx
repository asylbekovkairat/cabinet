import { useTranslation } from 'react-i18next';

import { ReactComponent as AttestatCard } from '~shared/assets/AttestatCard.svg';
import { ReactComponent as KubolukCard } from '~shared/assets/KubolukCard.svg';
interface ISiteIntro {}

export function SiteIntro({}: ISiteIntro) {
  const { t } = useTranslation();

  return (
    <div className="md:max-w-[428px] max-w-[550px] ">
      <div className="text-left xs:text-left md:text-center">
        <h1 className="font-['Noto_Serif'] text-[42px] xs:text-[30px] xs:leading-[44px] uppercase font-normal leading-[54px] mb-4">
          {t('site:registry')}
        </h1>
        <div>
          <p className="font-[Roboto] text-[18px]">{t('site:searchDoc')}</p>
        </div>
      </div>
      <div className="flex flex gap-8 mf:justify-center xs:gap-4 mt-10">
        <div className="w-1/2 max-w-[200px]">
          <AttestatCard className="w-full" />
        </div>
        <div className="w-1/2 max-w-[200px]">
          <KubolukCard className="w-full" />
        </div>
        {/* <div className="w-1/2 max-w-[142px]">
          <DiplomCard className="w-full" />
        </div> */}
      </div>
    </div>
  );
}
