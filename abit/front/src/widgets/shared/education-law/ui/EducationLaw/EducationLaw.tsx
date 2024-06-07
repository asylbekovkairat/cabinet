import { useTranslation } from 'react-i18next';

export function EducationLaw() {
  const { t } = useTranslation();

  return (
    <div className="p-[26px_32px] bg-white border rounded-[10px] w-full">
      <h3 className="text-black text-[20px]">{t('education:lawTitle')}</h3>
      <p className="text-[15px] text-black mt-2 mb-1">{t('education:lawText')}</p>
      <a
        className="text-[#1D65F9] text-xs font-semibold"
        href="https://edu.gov.kg/media/uploads/2022/09/09/ycafrb.pdf"
        target="_blank"
        rel="noreferrer"
      >
        {t('actions.more')}...
      </a>
    </div>
  );
}
