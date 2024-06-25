import { useTranslation } from 'react-i18next';

import { useAbiturientInfo } from '~entities/abiturient';
import { UploadImageView } from '~features/shared/upload';

const UploadAbitDocs = () => {
  const { t } = useTranslation();
  const abiturientInfo = useAbiturientInfo();

  return (
    <section className="flex items-center gap-3 xs:flex-col">
      <div className="w-full flex flex-col gap-3">
        <UploadImageView
          uploadText={t('cm:upload.atestatA')}
          upload_type="atestatA"
          thumbFileName={abiturientInfo?.photoAtestA}
        />
        <UploadImageView
          uploadText={t('cm:upload.atestatB')}
          upload_type="atestatB"
          thumbFileName={abiturientInfo?.photoAtestB}
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <UploadImageView
          uploadText={t('cm:upload.docA')}
          upload_type="documentA"
          thumbFileName={abiturientInfo?.documentA}
        />
        <UploadImageView
          uploadText={t('cm:upload.docB')}
          upload_type="documentB"
          thumbFileName={abiturientInfo?.documentB}
        />
      </div>
    </section>
  );
};

export default UploadAbitDocs;
