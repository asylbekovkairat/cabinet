import { FC, useState } from 'react';
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
import { EducationPeriodMonthSelector } from '~entities/education/period/ui';
import { EducationPeriodYearSelector } from '~entities/education/period/ui/EducationPeriodYearSelector';
import { IDirection } from '~entities/institution/direction';

import { QualificationSelector } from '~entities/shared/qualification';
import {
  useQualificationsList,
  useSetQualificationsList,
} from '~entities/shared/qualification/model';

import { useUser } from '~entities/shared/user';
import { ApiSpecialtyAddData, addSpecialty } from '~features/institution/specialty/add/api';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import {
  Button,
  Form,
  Input,
  InputKy,
  Modal,
  Spin,
  SquarePlusIcon,
  useNotification,
} from '~shared/ui';

export interface iSpecialtyAddViewProps {
  refetchSpecialtiesList: any;
  learningId?: number | null;
  direction: IDirection | null;
  disabled: boolean;
}

export const SpecialtyAddView: FC<iSpecialtyAddViewProps> = ({
  refetchSpecialtiesList,
  learningId,
  direction,
  disabled,
}) => {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();
  const userInfo = useUser();
  const notification = useNotification();

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const [selectedIndustry, setSelectedIndustry] = useState<number | null>();
  const [selectedQualification, setSelectedQualification] = useState<number>();

  const industriesList = useEducationIndustriesList();
  const setIndustriesList = useSetEducationIndustriesList();

  const qualificationsList = useQualificationsList();
  const setQualificationsList = useSetQualificationsList();

  const educationPeriodYearsList = useEducationPeriodYears();
  const setEducationPeriodYearsList = useSetEducationPeriodYears();

  const educationPeriodMonthsList = useEducationPeriodMonths();
  const setEducationPeriodMonthsList = useSetEducationPeriodMonths();

  const handleAddModal = () => {
    if (modal) {
      setModal(false);
      setLoading(false);
      form.resetFields();
    } else {
      setModal(true);
      setIndustriesList();

      if (!educationPeriodYearsList) {
        setEducationPeriodYearsList();
      }

      if (!educationPeriodMonthsList) {
        setEducationPeriodMonthsList();
      }

      setQualificationsList({ id_org_type: userInfo?.orgTypeId || 0 });
    }
  };

  const onSelectIndustry = (value: number) => {
    setSelectedIndustry(value);
  };

  const onSelectQualification = (value: number) => {
    setSelectedQualification(value);
  };

  const onFinish = async (fieldsData: ApiSpecialtyAddData) => {
    if (!userInfo || !direction?.id_direction || !learningId) {
      return null;
    }

    const data = {
      specialty_cipher: fieldsData.specialty_cipher,
      specialty_ky: fieldsData.specialty_ky,
      specialty_ru: fieldsData.specialty_ru,
      specialty_en: fieldsData.specialty_en,
      id_learning: learningId,
      id_industry: fieldsData.id_industry,
      id_qualification: fieldsData.id_qualification,
      id_direction: direction.id_direction,
      id_education_period_year: fieldsData.id_education_period_year,
      id_education_period_month: fieldsData.id_education_period_month,
    };

    setLoading(true);

    const response = await addSpecialty(data);

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
        disabled={disabled}
        className="flex gap-[6px] items-center px-2 stroke-white fill-white disabled:stroke-stroke disabled:fill-stroke disabled:border-transparent"
      >
        <SquarePlusIcon />
        {t('specialty:add')}
      </Button>
      <Modal open={modal} footer={null} width={580} onCancel={handleAddModal} centered>
        <div className="p-[20px_30px] grid gap-6 sm:p-[30px_0] sm:gap-5">
          <p className="text-center text-[20px]">
            [{direction?.direction_cipher}] -{' '}
            {direction && direction[`direction_${i18n.language as DynamicLocaleType}`]}
          </p>
          <Spin spinning={loading}>
            <Form
              autoComplete="off"
              onFinish={onFinish}
              validateMessages={validateMessages}
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
              <Button size="large" htmlType="submit" type="primary">
                {t('actions.add')}
              </Button>
            </Form>
          </Spin>
        </div>
      </Modal>
    </>
  );
};
