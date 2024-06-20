import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useAbiturientInfo, useSetAbiturientInfo } from '~entities/abiturient';
import { Benefits, BenefitsCategoriesView, useBenefits, useSetBenefits } from '~entities/benefits';
import { ClassSelector } from '~entities/shared/class';
import { useClassList, useSetClassList } from '~entities/shared/class/model';

import { useSetUserEnrolleOrt, useUserEnrollOrt } from '~entities/shared/user';

import { DatePicker, Input, useNotification } from '~shared/ui';

import { updateAbitInfo } from '../api';

import BenefitProof from './BenefitProof';

const AbitInfoForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const notification = useNotification();

  const userEnrolleOrt = useUserEnrollOrt();
  const abiturientInfo = useAbiturientInfo();
  const classesList = useClassList();
  const benefits = useBenefits();

  const setClassesList = useSetClassList();
  const setBenefits = useSetBenefits();

  const [selectedBenefit, setSelectedBenefit] = useState(0);

  const [subCategories, setSubCategories] = useState<Benefits[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(1);
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    setBenefits();
  }, []);

  useEffect(() => {
    if (benefits && selectedBenefit) {
      const filtered = benefits.filter((benefit) => benefit.id_abiturient_type === selectedBenefit);
      setSubCategories(filtered);
    }
  }, [benefits, selectedBenefit]);

  useEffect(() => {
    setClassesList();
  }, []);

  useEffect(() => {
    const values = { ...abiturientInfo };
    form.setFieldsValue(values);

    setSelectedSubCategory(abiturientInfo?.id_abiturient_category || 0);
    setInitialValues(values);
  }, [abiturientInfo, userEnrolleOrt]);

  useEffect(() => {
    if (selectedSubCategory === 2 || selectedSubCategory === 4) {
      setSelectedBenefit(2);
      form.setFieldsValue({ benefit: 2 });
    } else if (
      selectedSubCategory === 8 ||
      selectedSubCategory === 9 ||
      selectedSubCategory === 10
    ) {
      setSelectedBenefit(4);
      form.setFieldsValue({ benefit: 4 });
    } else {
      setSelectedBenefit(1);
      form.setFieldsValue({ benefit: 1 });
    }
  }, [abiturientInfo, selectedSubCategory]);

  const onSubmit = async (values: any) => {
    const data = {
      ...values,
      beneficiary_status: values.benefit === 1 ? false : values.beneficiary_status,
      NumberAD: Number(values.id_abiturient),
      SeriesAD: values.attestat_ser || '',
      id_abiturient: userEnrolleOrt.NumberSert,
      StreetHomeAddress: values.StreetHomeAddress || '',
      id_enrollee_ORT: userEnrolleOrt.id_enrollee_ORT,
      male: values.inn.at(0) === 2,
      number_pas: values.number_pas || '',
      learn: values.id_learning || '',
      id_abiturient_category: selectedBenefit === 1 ? selectedBenefit : selectedSubCategory,
    };

    await updateAbitInfo(data);

    notification.openNotification({
      message: 'Данные сохранены успешно',
      type: 'success',
    });
  };

  const onValuesChange = ({ benefit }: any) => {
    if (benefit) {
      setSelectedBenefit(benefit);
    }
  };

  const handleBeneficiary = (value: number): void => {
    form.setFieldsValue({ beneficiary_status: true });
    setSelectedSubCategory(value);
  };

  return (
    <>
      {notification.contextHolder}
      <Form
        form={form}
        onFinish={onSubmit}
        onValuesChange={onValuesChange}
        labelAlign="left"
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item name="surname" label={t('auth:form.surname')} required>
          <Input size="middle" disabled />
        </Form.Item>
        <Form.Item name="names" label={t('auth:form.name')} required>
          <Input size="middle" disabled />
        </Form.Item>
        <Form.Item name="patronymic" label={t('auth:form.patronymic')}>
          <Input size="middle" />
        </Form.Item>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item
            name="birthdate"
            valuePropName="date"
            className="w-full"
            label={t('auth:form.birthDate')}
            required
          >
            <DatePicker
              value={dayjs(abiturientInfo?.birthdate)}
              className="w-full"
              size="middle"
              disabled
            />
          </Form.Item>
          <Form.Item name="inn" className="w-full" label={t('auth:pin')}>
            <Input size="middle" disabled />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 items-end xs:flex-col xs:gap-0">
          <Form.Item name="serial_pas" className="w-full" label={t('auth:form.passportNumber')}>
            <Input size="middle" disabled />
          </Form.Item>
          <Form.Item
            name="date_given_pas"
            valuePropName="date"
            className="w-full"
            label="Дата выдачи паспорта"
          >
            <DatePicker
              value={dayjs(abiturientInfo?.date_given_pas)}
              className="w-full"
              size="middle"
              disabled
            />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item name="attestat_ser" className="w-full" label="Серия аттестата">
            <Input className="w-full" size="middle" />
          </Form.Item>
          <Form.Item name="id_abiturient" className="w-full" label="Номер аттестата">
            <Input className="w-full" size="middle" />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item name="StreetHomeAddress" className="w-full" label="Адрес" required>
            <Input className="w-full" size="middle" />
          </Form.Item>
          <Form.Item name="id_learning" className="w-full" label="Класс">
            <ClassSelector size="middle" classList={classesList || []} />
          </Form.Item>
        </div>
        <div className="flex flex-row justify-between gap-4 xs:flex-col xs:gap-0">
          <Form.Item className="w-full" name="benefit">
            <BenefitsCategoriesView value={selectedBenefit} />
          </Form.Item>
          <Form.Item className="w-full" name="beneficiary_status">
            {selectedBenefit > 1 && (
              <BenefitProof
                key={selectedBenefit}
                handleBeneficiary={handleBeneficiary}
                defaultValue={selectedSubCategory}
                subCategories={subCategories}
              />
            )}
          </Form.Item>
        </div>

        <div className="flex justify-center">
          <Button type="primary" htmlType="submit" className="mx-auto">
            {t('cm:actions.save')}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AbitInfoForm;
