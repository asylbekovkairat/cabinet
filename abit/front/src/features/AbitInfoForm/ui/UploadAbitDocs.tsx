import { useAbiturientInfo } from '~entities/abiturient';
import { UploadImageView } from '~features/shared/upload';

const UploadAbitDocs = () => {
  const abiturientInfo = useAbiturientInfo();

  return (
    <section className="flex items-center gap-3 xs:flex-col">
      <div className="w-full flex flex-col gap-3">
        <UploadImageView
          uploadText="Аттестаттын 1 бетинин cүрөтүн жүктөө"
          upload_type="atestatA"
          thumbFileName={abiturientInfo?.photoAtestA}
        />
        <UploadImageView
          uploadText="Аттестаттын 2 бетинин cүрөтүн жүктөө"
          upload_type="atestatB"
          thumbFileName={abiturientInfo?.photoAtestB}
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <UploadImageView
          uploadText="Загрузите фото паспорта 1 сторона или свидетельство о рождении"
          upload_type="documentA"
          thumbFileName={abiturientInfo?.documentA}
        />
        <UploadImageView
          uploadText="Загрузите фото паспорта 2 сторона или свидетельство о рождении"
          upload_type="documentB"
          thumbFileName={abiturientInfo?.documentB}
        />
      </div>
    </section>
  );
};

export default UploadAbitDocs;
