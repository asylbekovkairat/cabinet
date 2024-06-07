import { useTranslation } from 'react-i18next';

import { SeoHelmet } from '~shared/lib/seo';

interface IHomePage {}

export function HomePage({}: IHomePage) {
  const { t } = useTranslation();

  return (
    <>
      <SeoHelmet title={t('seo:defaultTitle') || ''} />
      <div className="grid w-full place-items-center min-h-[calc(100vh-228px)] overflow-y-auto max-w-[1352px] m-auto">
        <div className="w-full flex mx-auto items-center flex-wrap justify-center gap-x-20 gap-y-16 pt-[60px] pb-[100px] px-5"></div>
      </div>
    </>
  );
}
