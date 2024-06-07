import { useTranslation } from 'react-i18next';

import { useSettings } from '~entities/shared/settings';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import manualPreviewKy from '~shared/assets/ManualPreviewKy.png';
import manualPreviewRu from '~shared/assets/ManualPreviewRu.png';
import { DocumentIcon, useNotification } from '~shared/ui';

interface IUsingManual {}

export function UsingManual({}: IUsingManual) {
  const { t, i18n } = useTranslation();
  const notification = useNotification();
  const settings = useSettings();

  const instructionVideo = settings?.find(
    (el) => el.settings_name === `manualVideo_${i18n.language as DynamicLocaleType}`
  )?.settings_value;

  const instructionPDF = settings?.find(
    (el) => el.settings_name === `manualPdf_${i18n.language as DynamicLocaleType}`
  )?.settings_value;

  const instructionPreview = {
    ky: manualPreviewKy,
    ru: manualPreviewRu,
  };

  const onClickVideo = () => {
    window.open(instructionVideo);
  };

  return (
    <>
      {notification.contextHolder}
      <div className="bg-white p-[21px_24px_18px] rounded-[10px] flex flex-col gap-4 w-full justify-center">
        {/* <ReactPlayer
        playIcon={<PlayVideoIcon />}
        url={instructionVideo}
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
        className="rounded-[10px] border-style-solid border-[#1269FF] border-1 w-full overflow-hidden"
        width="100%"
        controls
      /> */}
        <img
          src={instructionPreview[i18n.language as DynamicLocaleType]}
          onClick={onClickVideo}
          alt="PREVIEW"
          className="rounded-[10px] border-solid border-[#1269FF] border-[1px] w-full overflow-hidden object-cover"
        />
        <div className="flex items-center gap-2 stroke-primary">
          <p className="w-[18px] h-[22px]">
            <DocumentIcon />
          </p>
          <a
            href={instructionPDF}
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-primary"
          >
            <span>{t('education:manual')}</span> <span className="uppercase">{t('appName')}</span>
          </a>
        </div>
      </div>
    </>
  );
}
