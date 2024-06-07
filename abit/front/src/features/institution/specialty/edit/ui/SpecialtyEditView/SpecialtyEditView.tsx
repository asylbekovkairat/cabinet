import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  useEducationIndustriesList,
  useSetEducationIndustriesList,
} from '~entities/education/industry';

import { EducationIndustrySelector } from '~entities/education/industry/ui';
import {
  useEducationPeriodMonths,
  useEducationPeriodYears,
  useSetEducationPeriodMonths,
  useSetEducationPeriodYears,
} from '~entities/education/period';
import {
  EducationPeriodMonthSelector,
  EducationPeriodYearSelector,
} from '~entities/education/period/ui';

import { ISpecialty } from '~entities/institution/specialty';
import { QualificationSelector } from '~entities/shared/qualification';
import {
  useQualificationsList,
  useResetQualificationsList,
  useSetQualificationsList,
} from '~entities/shared/qualification/model';
import { useUser } from '~entities/shared/user';
import { ApiSpecialtyEditData, editSpecialty } from '~features/institution/specialty/edit/api';
import { Button, Form, Input, InputKy, Modal, PencilIcon, Spin, useNotification } from '~shared/ui';

export interface iSpecialtyEditViewProps {
  refetchSpecialtiesList: any;
  directionId: number;
  specialty: ISpecialty | null;
}

export const SpecialtyEditView: FC<iSpecialtyEditViewProps> = ({
  refetchSpecialtiesList,
  directionId,
  specialty,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const userInfo = useUser();
  const notification = useNotification();

  const [specialtyInitial, setSpecialtyInitial] = useState<any>();
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>();
  const [isFormChanged, setIsFormChanged] = useState(false);

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const [selectedQualification, setSelectedQualification] = useState<number>();

  const qualificationsList = useQualificationsList();
  const setQualificationsList = useSetQualificationsList();
  const resetQualificationsList = useResetQualificationsList();

  const industriesList = useEducationIndustriesList();
  const setIndustriesList = useSetEducationIndustriesList();

  const educationPeriodYearsList = useEducationPeriodYears();
  const setEducationPeriodYearsList = useSetEducationPeriodYears();

  const educationPeriodMonthsList = useEducationPeriodMonths();
  const setEducationPeriodMonthsList = useSetEducationPeriodMonths();

  useEffect(() => {
    if (specialty && modal && directionId) {
      const data = {
        id_specialty: specialty.id_specialty,
        specialty_cipher: specialty.specialty_cipher,
        specialty_ky: specialty.specialty_ky,
        specialty_ru: specialty.specialty_ru,
        specialty_en: specialty.specialty_en,
        id_industry: specialty.id_industry,
        id_qualification: specialty.id_qualification,
        id_education_period_year: specialty.id_education_period_year,
        id_education_period_month: specialty.id_education_period_month,
        id_direction: directionId,
      };

      form.setFieldsValue(data);
      setSpecialtyInitial(data);
      setLoading(false);
    }
  }, [specialty, modal]);

  const handleAddModal = () => {
    if (modal) {
      setModal(false);
      form.resetFields();
      resetQualificationsList();
      setLoading(false);
    } else {
      setModal(true);
      setIndustriesList();
      setEducationPeriodYearsList();
      setEducationPeriodMonthsList();
      setQualificationsList({ id_org_type: userInfo?.orgTypeId || 0 });
    }
  };

  const onSelectQualification = (value: number) => {
    setSelectedQualification(value);
  };

  const onSelectIndustry = (value: number) => {
    setSelectedIndustry(value);
  };

  const onFinish = async (fieldsData: ApiSpecialtyEditData) => {
    if (!userInfo || !directionId || !specialty) {
      return null;
    }

    const data = {
      id_specialty: specialty.id_specialty,
      specialty_cipher: fieldsData.specialty_cipher,
      specialty_ky: fieldsData.specialty_ky,
      specialty_ru: fieldsData.specialty_ru,
      specialty_en: fieldsData.specialty_en,
      id_learning: specialty.id_learning,
      id_industry: fieldsData.id_industry,
      id_qualification: fieldsData.id_qualification,
      id_direction: specialty.id_direction,
      id_education_period_year: fieldsData.id_education_period_year,
      id_education_period_month: fieldsData.id_education_period_month,
    };

    setLoading(true);

    const response = await editSpecialty(data);

    if (response?.data[0]) {
      notification.openNotification({
        message: response?.data[0].sms || t('notify.succesSaved'),
        type: 'success',
      });

      setLoading(false);
      setModal(false);
      refetchSpecialtiesList();
    }

    if (response?.error) {
      notification.openNotification({
        message: response.message ?? t('notify.error'),
        type: 'error',
      });

      setLoading(false);
    }

    setLoading(false);
    handleAddModal();
  };

  const onFormValuesChange = (_: any, values: any) => {
    if (!specialty) {
      return null;
    }

    setIsFormChanged(
      Object.entries(values).some(([key, value]) => (specialtyInitial as any)[key] !== value)
    );
  };

  const trimWhitespace = (data: any, value: string) => {
    const trimmedValue = value?.trimStart() || '';
    form.setFieldValue(`${data.field}`, trimmedValue);

    if (trimmedValue.length === 0) {
      return Promise.reject(t('notify.full'));
    }

    return Promise.resolve(trimmedValue);
  };

  const validateMessages = {
    required: t('notify.full'),
  };

  return (
    <>
      <Button
        onClick={handleAddModal}
        type="primary"
        size="small"
        className="grid place-items-center"
        icon={<PencilIcon className="fill-white" />}
      />
      <Modal open={modal} footer={null} width={580} onCancel={handleAddModal} centered>
        <div className="p-[20px_30px] grid gap-6 sm:p-[30px_0] sm:gap-5">
          <p className="text-center text-[20px]">{t('specialty:title')}</p>
          <Spin spinning={loading}>
            <Form
              autoComplete="off"
              onFinish={onFinish}
              validateMessages={validateMessages}
              onValuesChange={onFormValuesChange}
              form={form}
              className="grid gap-3.5"
            >
              <Form.Item
                name="specialty_cipher"
                rules={[{ required: true, validator: trimWhitespace }]}
                className="m-0"
              >
                <Input placeholder={t('specialty:code') ?? ''} />
              </Form.Item>
              <Form.Item
                name="specialty_ky"
                rules={[{ required: true, validator: trimWhitespace }]}
                className="m-0"
              >
                <InputKy placeholder={t('specialty:title_ky') ?? ''} />
              </Form.Item>
              <Form.Item
                name="specialty_ru"
                rules={[{ required: true, validator: trimWhitespace }]}
                className="m-0"
              >
                <Input placeholder={t('specialty:title_ru') ?? ''} />
              </Form.Item>
              <Form.Item
                name="specialty_en"
                rules={[{ required: true, validator: trimWhitespace }]}
                className="m-0"
              >
                <Input placeholder={t('specialty:title_en') ?? ''} />
              </Form.Item>
              <Form.Item name="id_qualification" rules={[{ required: true }]} className="m-0">
                <QualificationSelector
                  placeholder={t('specialty:qualification') ?? ''}
                  qualificationsList={qualificationsList || []}
                  value={selectedQualification}
                  onSelect={onSelectQualification}
                />
              </Form.Item>
              <Form.Item name="id_industry" rules={[{ required: true }]} className="m-0">
                <EducationIndustrySelector
                  placeholder={t('specialty:industry')}
                  educationIndustriesList={industriesList || []}
                  value={selectedIndustry}
                  onSelect={onSelectIndustry}
                />
              </Form.Item>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                <Form.Item
                  name="id_education_period_year"
                  rules={[{ required: true }]}
                  className="m-0"
                >
                  <EducationPeriodYearSelector
                    placeholder={t('specialty:years')}
                    educationPeriodYears={educationPeriodYearsList || []}
                  />
                </Form.Item>
                <Form.Item
                  name="id_education_period_month"
                  rules={[{ required: true }]}
                  className="m-0"
                >
                  <EducationPeriodMonthSelector
                    placeholder={t('specialty:months')}
                    educationPeriodMonths={educationPeriodMonthsList || []}
                  />
                </Form.Item>
              </div>
              <Button size="large" htmlType="submit" type="primary" disabled={!isFormChanged}>
                {t('actions.save')}
              </Button>
            </Form>
          </Spin>
        </div>
      </Modal>
    </>
  );
};
