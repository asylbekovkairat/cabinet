import { Button, Image, Upload, UploadProps } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import { UploadFile } from 'antd/lib';
import { FC, useEffect, useMemo, useState } from 'react';

import { ReactComponent as UploadIcon } from '~shared/assets/UploadIcon.svg';
import { validateFileType } from '~shared/lib/utils';

import { useNotification } from '~shared/ui';

import { useUserEnrollOrt } from '~entities/shared/user';

import { downloadImage, uploadImage } from '../api';

interface Props extends UploadProps {
  uploadText: string;
  upload_type: string;
  thumbFileName?: string;
}

const UploadImageView: FC<Props> = ({ uploadText, upload_type, thumbFileName }) => {
  const notification = useNotification();
  const userEnrolleOrt = useUserEnrollOrt();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const uploadProps = useMemo(
    () => ({
      accept: 'image/*',
      beforeUpload: (file: UploadFile) => {
        const isAllowedType = validateFileType(file, ['image/png', 'image/jpg', 'image/jpeg']);
        console.log('file', file);

        if (!isAllowedType) {
          setFileList((state) => [...state]);

          notification.openNotification({
            message: `${file.name} is not PNG file`,
            type: 'error',
          });

          return false;
        }

        return true;
      },
      onRemove: (file: UploadFile) => {
        if (fileList.some((item) => item.uid === file.uid)) {
          setFileList((fileList) => fileList.filter((item) => item.uid !== file.uid));

          return true;
        }

        return false;
      },
      fileList,
    }),
    [fileList]
  );

  const handleUploadImage: (info: UploadChangeParam<UploadFile<any>>) => void = async (info) => {
    const formData = new FormData();

    formData.append('file', info.fileList[0].originFileObj as any);
    formData.append('id_abiturient', Number(userEnrolleOrt.NumberSert) as any);
    formData.append('type', upload_type as any);

    const file = (await uploadImage(formData)) as { res: number; name: string; type: string };
    handleDownloadImage(file.name);
  };

  const handleDownloadImage = async (fileName: string): Promise<void> => {
    const response = (await downloadImage(fileName)) as { exist: true; file: string };
    setPreviewImage(response?.file);
  };

  useEffect(() => {
    if (thumbFileName) {
      handleDownloadImage(thumbFileName);
    }
  }, [thumbFileName]);

  return (
    <>
      <div className="flex bg-white items-center rounded-lg">
        <Upload
          className="w-full"
          maxCount={1}
          listType="picture"
          onChange={handleUploadImage}
          {...uploadProps}
        >
          <Button
            className="w-full h-auto border-none flex justify-start"
            icon={<UploadIcon className="w-[20px]" />}
          >
            <p>{uploadText}</p>
          </Button>
        </Upload>
        {previewImage && (
          <div className="rounded-lg">
            <Image
              className="max-w-[100px] min-w-[100px] max-h-[100px] min-h-[100px] w-[100px] h-[100px] object-cover rounded-lg"
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
              }}
              src={`data:image/png;base64,${previewImage}`}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UploadImageView;
