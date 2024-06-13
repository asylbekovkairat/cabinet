import { UploadFile } from 'antd';

export const validateFileType = ({ type }: UploadFile, allowedTypes?: string | string[]) => {
  if (!allowedTypes) {
    return true;
  }

  if (type) {
    return allowedTypes.includes(type);
  }
};
