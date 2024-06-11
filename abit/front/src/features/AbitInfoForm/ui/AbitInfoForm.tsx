import { Button, Form, Upload, UploadFile } from 'antd';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { useAbiturientInfo, useSetAbiturientInfo } from '~entities/abiturient';

import { useSetUserEnrolleOrt, useUserEnrollOrt } from '~entities/shared/user';

import { DatePicker, Input, Select } from '~shared/ui';

const AbitInfoForm = () => {
  const { t } = useTranslation();
  const userEnrolleOrt = useUserEnrollOrt();
  const abiturientInfo = useAbiturientInfo();

  const setAbiturientInfo = useSetAbiturientInfo();
  const setUserEnrolleOrt = useSetUserEnrolleOrt();

  useEffect(() => {
    setUserEnrolleOrt();
    setAbiturientInfo();
  }, []);

  console.log('userEnrolleOrt', userEnrolleOrt);
  console.log('abiturientInfo', abiturientInfo);

  const fileList: UploadFile[] = [
    {
      uid: '0',
      name: 'xxx.png',
      status: 'uploading',
      percent: 33,
    },
    {
      uid: '-1',
      name: 'yyy.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'zzz.png',
      status: 'error',
    },
  ];

  return (
    <>
      <Form labelAlign="left" layout="vertical">
        <Form.Item label="Фамилия" required>
          <Input size="middle" />
        </Form.Item>
        <Form.Item label="Имя" required>
          <Input size="middle" />
        </Form.Item>
        <Form.Item label="Отчество">
          <Input size="middle" />
        </Form.Item>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item className="w-full" label="Дата рождения" required>
            <DatePicker className="w-full" size="middle" />
          </Form.Item>
          <Form.Item className="w-full" label="Персональный номер (ИНН)">
            <Input size="middle" />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 items-end xs:flex-col xs:gap-0">
          <Form.Item className="w-full" label="Серия паспорта или свидетельства о рождении">
            <Input size="middle" />
          </Form.Item>
          <Form.Item className="w-full" label="Дата выдачи паспорта">
            <DatePicker className="w-full" size="middle" />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item className="w-full" label="Серия аттестата">
            <Input className="w-full" size="middle" />
          </Form.Item>
          <Form.Item className="w-full" label="Номер аттестата">
            <Input className="w-full" size="middle" />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item className="w-full" label="Адрес" required>
            <Input className="w-full" size="middle" />
          </Form.Item>
          <Form.Item className="w-full" label="Класс">
            <Select className="w-full" size="middle" />
          </Form.Item>
        </div>

        <div className="flex justify-center">
          <Button type="primary" className="mx-auto">
            {t('cm:actions.save')}
          </Button>
        </div>
      </Form>
      <section className="flex items-center gap-3 flex-wrap justify-center">
        <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" listType="picture">
          <Button
            className="h-auto xs:flex xs:flex-col"
            icon={
              <img
                className="w-[100px]"
                src="https://visualpharm.com/assets/826/ID%20Card-595b40b65ba036ed117d09d6.svg"
                alt=""
              />
            }
          >
            Аттестаттын 1 бетинин cүрөтүн жүктөө
          </Button>
        </Upload>
        <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" listType="picture">
          <Button
            className="h-auto xs:flex xs:flex-col"
            icon={
              <img
                className="w-[100px]"
                src="https://visualpharm.com/assets/826/ID%20Card-595b40b65ba036ed117d09d6.svg"
                alt=""
              />
            }
          >
            Аттестаттын 2 бетинин cүрөтүн жүктөө
          </Button>
        </Upload>
        <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" listType="picture">
          <Button
            className="h-auto xs:flex xs:flex-col"
            icon={
              <img
                className="w-[100px]"
                src="https://visualpharm.com/assets/826/ID%20Card-595b40b65ba036ed117d09d6.svg"
                alt=""
              />
            }
          >
            Аттестаттын 3 бетинин cүрөтүн жүктөө
          </Button>
        </Upload>
        <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" listType="picture">
          <Button
            className="h-auto xs:flex xs:flex-col"
            icon={
              <img
                className="w-[100px]"
                src="https://visualpharm.com/assets/826/ID%20Card-595b40b65ba036ed117d09d6.svg"
                alt=""
              />
            }
          >
            Аттестаттын 4 бетинин cүрөтүн жүктөө
          </Button>
        </Upload>
      </section>
    </>
  );
};

export default AbitInfoForm;
