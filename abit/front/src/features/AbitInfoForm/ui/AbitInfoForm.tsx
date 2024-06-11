import { Button, Form, Upload, UploadFile } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { useAbiturientInfo, useSetAbiturientInfo } from '~entities/abiturient';
import { ClassSelector } from '~entities/shared/class';
import { useClassList, useSetClassList } from '~entities/shared/class/model';

import { useSetUserEnrolleOrt, useUserEnrollOrt } from '~entities/shared/user';

import { DatePicker, Input, Select } from '~shared/ui';

const AbitInfoForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const userEnrolleOrt = useUserEnrollOrt();
  const abiturientInfo = useAbiturientInfo();
  const classesList = useClassList();

  const setAbiturientInfo = useSetAbiturientInfo();
  const setUserEnrolleOrt = useSetUserEnrolleOrt();
  const setClassesList = useSetClassList();

  useEffect(() => {
    setUserEnrolleOrt();
    setClassesList();
  }, []);

  useEffect(() => {
    if (userEnrolleOrt?.id_enrollee_ORT) {
      setAbiturientInfo(userEnrolleOrt.id_enrollee_ORT);
    }
  }, [userEnrolleOrt]);

  useEffect(() => {
    form.setFieldsValue(abiturientInfo);
  }, [abiturientInfo]);

  return (
    <>
      <Form form={form} labelAlign="left" layout="vertical" initialValues={{ ...abiturientInfo }}>
        <Form.Item name="surname" label="Фамилия" required>
          <Input size="middle" disabled />
        </Form.Item>
        <Form.Item name="names" label="Имя" required>
          <Input size="middle" disabled />
        </Form.Item>
        <Form.Item name="patronymic" label="Отчество">
          <Input size="middle" />
        </Form.Item>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item className="w-full" label="Дата рождения" required>
            <DatePicker
              value={dayjs(abiturientInfo?.birthdate)}
              className="w-full"
              size="middle"
              disabled
            />
          </Form.Item>
          <Form.Item name="inn" className="w-full" label="Персональный номер (ИНН)">
            <Input size="middle" disabled />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 items-end xs:flex-col xs:gap-0">
          <Form.Item
            name="serial_pas"
            className="w-full"
            label="Серия паспорта или свидетельства о рождении"
          >
            <Input size="middle" disabled />
          </Form.Item>
          <Form.Item className="w-full" label="Дата выдачи паспорта">
            <DatePicker
              value={dayjs(abiturientInfo?.date_given_pas)}
              className="w-full"
              size="middle"
              disabled
            />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item className="w-full" label="Серия аттестата">
            <Input className="w-full" size="middle" />
          </Form.Item>
          <Form.Item name="id_enrollee_ORT" className="w-full" label="Номер аттестата">
            <Input className="w-full" size="middle" />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item className="w-full" label="Адрес" required>
            <Input className="w-full" size="middle" />
          </Form.Item>
          <Form.Item className="w-full" label="Класс">
            <ClassSelector size="middle" classList={classesList || []} />
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
