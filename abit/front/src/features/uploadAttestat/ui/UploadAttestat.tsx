import { UploadImageView } from '~features/shared/upload';

const UploadAttestat = () => {
  return (
    <section className="flex items-center gap-3">
      <div className="w-full flex flex-col gap-3">
        <UploadImageView uploadText="Аттестаттын 1 бетинин cүрөтүн жүктөө" upload_type="atestatA" />
        <UploadImageView uploadText="Аттестаттын 2 бетинин cүрөтүн жүктөө" upload_type="atestatB" />
      </div>
      <div className="w-full flex flex-col gap-3">
        <UploadImageView
          uploadText="Загрузите фото паспорта 1 сторона или свидетельство о рождении"
          upload_type="documentA"
        />
        <UploadImageView
          uploadText="Загрузите фото паспорта 2 сторона или свидетельство о рождении"
          upload_type="documentB"
        />
      </div>
    </section>
  );
};

export default UploadAttestat;
