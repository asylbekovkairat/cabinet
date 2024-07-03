import { FC } from 'react';

import { Button, Card } from 'antd';

import { AdmissionPlans } from '../../model';

interface AdmissionPlanCardProps {
  info: AdmissionPlans;
}

const AdmissionPlanCardView: FC<AdmissionPlanCardProps> = ({ info }) => {
  return (
    <Card
      hoverable
      key={info.id_admission_plan}
      title={`Форма оплаты: ${info.bk}`}
      actions={[
        <Button className="bg-red flex items-center justify-center mx-auto text-white" key="delete">
          Удалить
        </Button>,
      ]}
    >
      <div className="flex flex-col gap-2">
        <p>
          {info.specialty} {info.voucher_plan && <span className="text-[#d3ae26]">(Ваучер)</span>}
        </p>
        <p>Количество плановых мест: {info.kol_plan}</p>
        <p>Сумма за прием документов: {info.smeta_doki}</p>
        <p>Сумма за обучение: {info.smeta_education}</p>
        <p>Дисциплина: {info.discipline}</p>
      </div>
    </Card>
  );
};

export default AdmissionPlanCardView;
