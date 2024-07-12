import { Image, ImageProps } from 'antd';

import { FC, memo, useEffect, useState } from 'react';

import { downloadImage } from '../api';

interface ImageViewProps extends ImageProps {
  fileName: string;
}

export const ImageView: FC<ImageViewProps> = memo(({ fileName }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    if (fileName) {
      handleDownloadImage(fileName);
    }
  }, [fileName]);

  const handleDownloadImage = async (fileName: string): Promise<void> => {
    const response = (await downloadImage(fileName)) as unknown as { exist: true; file: string };

    if (response.exist) {
      setImage(response?.file);
    }
  };

  return <Image src={image} />;
});
