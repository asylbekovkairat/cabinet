import { useTranslation } from 'react-i18next';

import { ISpecialty } from '~entities/institution/specialty/model';
import { Table, TableColumnsType } from '~shared/ui';

interface ISpecialtiesView {
  loading: boolean;
  specialties: ISpecialty[];
  actionsSlot?: any;
  setSpecialty: any;
}

export const SpecialtiesView = ({
  loading,
  specialties,
  actionsSlot,
  setSpecialty,
}: ISpecialtiesView) => {
  const { t } = useTranslation();

  const columns: TableColumnsType<ISpecialty> = [
    {
      title: '№',
      render: (_value, row, idx) => idx + 1,
      align: 'center',
      width: '55px',
    },
    {
      title: t('specialty:code'),
      dataIndex: 'specialty_cipher',
      key: 'specialty_cipher',
      align: 'center',
      width: '100px',
    },
    {
      title: t('specialty:title_ru'),
      dataIndex: 'specialty_ru',
      key: 'specialty_ru',
      render: (_value, row) => (
        <div className="text-left flex flex-col justify-between items-start gap-1 pr-1">
          <p>{_value}</p>
          {row.qualification_ru ? (
            <p className="flex justify-center">
              <span className="text-black/50">{row.qualification_ru}</span>
            </p>
          ) : null}
          {row.industry_ru ? (
            <p>
              <span className="text-black/50">{row.industry_ru}</span>
            </p>
          ) : null}
        </div>
      ),
      align: 'center',
    },
    {
      title: t('specialty:title_ky'),
      dataIndex: 'specialty_ky',
      key: 'specialty_ky',
      render: (_value, row) => (
        <div className="text-left flex flex-col justify-between items-start gap-1 pr-1">
          <p>{_value}</p>
          {row.qualification_ky ? (
            <p className="flex justify-center">
              <span className="text-black/50">{row.qualification_ky}</span>
            </p>
          ) : null}
          {row.industry_ky ? (
            <p>
              <span className="text-black/50">{row.industry_ky}</span>
            </p>
          ) : null}
        </div>
      ),
      align: 'center',
    },
    {
      title: t('specialty:title_en'),
      dataIndex: 'specialty_en',
      key: 'specialty_en',
      render: (_value, row) => (
        <div className="text-left flex flex-col justify-between items-start gap-1 pr-1">
          <p>{_value}</p>
          {row.qualification_en ? (
            <p className="flex justify-center">
              <span className="text-black/50">{row.qualification_en}</span>
            </p>
          ) : null}
          {row.industry_en ? (
            <p>
              <span className="text-black/50">{row.industry_en}</span>
            </p>
          ) : null}
        </div>
      ),
      align: 'center',
    },
    {
      title: t('specialty:period'),
      dataIndex: 'education_period',
      key: 'education_period',
      align: 'center',
      width: '100px',
    },
    {
      title: t('actions.actions'),
      dataIndex: 'operation',
      align: 'center',
      render: (_value, row, _index) => (
        <div onClick={() => setSpecialty(row)} className="flex justify-center items-center gap-4">
          {actionsSlot}
        </div>
      ),
      width: '100px',
    },
  ];

  return (
    <>
      <Table
        bordered
        size="small"
        dataSource={specialties}
        columns={columns}
        rowClassName="editable-row"
        pagination={false}
        scroll={{ y: 'calc(100vh - 284px)' }}
        rowKey={(obj) => obj.specialty_cipher}
        loading={loading}
      />
    </>
  );
};
