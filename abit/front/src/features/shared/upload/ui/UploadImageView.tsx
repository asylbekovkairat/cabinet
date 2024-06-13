import { Button, Upload, UploadProps } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import { UploadFile } from 'antd/lib';
import { FC, useMemo, useState } from 'react';

import { ReactComponent as UploadIcon } from '~shared/assets/UploadIcon.svg';
import { validateFileType } from '~shared/lib/utils';

import { useNotification } from '~shared/ui';

import { useUserEnrollOrt } from '~entities/shared/user';

import { uploadImage } from '../api';

interface Props extends UploadProps {
  uploadText: string;
  upload_type: string;
}

const UploadImageView: FC<Props> = ({ uploadText, upload_type }) => {
  const notification = useNotification();
  const userEnrolleOrt = useUserEnrollOrt();
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

  const handleUpload: (info: UploadChangeParam<UploadFile<any>>) => void = async (info) => {
    console.log('event', info);
    const formData = new FormData();

    formData.append('file', info.fileList[0].originFileObj as any);
    formData.append('id_abiturient', userEnrolleOrt.id_enrollee_ORT as any);
    formData.append('type', upload_type as any);

    const response = await uploadImage(formData);
    console.log('response', response);
  };

  return (
    <Upload
      className="w-full"
      maxCount={1}
      listType="picture"
      onChange={handleUpload}
      {...uploadProps}
    >
      <Button className="w-full h-auto " icon={<UploadIcon className="w-[20px]" />}>
        {uploadText}
      </Button>
    </Upload>
  );
};

export default UploadImageView;
