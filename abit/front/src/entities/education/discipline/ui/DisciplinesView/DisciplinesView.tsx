import { useTranslation } from 'react-i18next';

import { IDiscipline } from '~entities/education/discipline/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Table, TableColumnsType } from '~shared/ui';

interface IDisciplinesView {
  loading: boolean;
  disciplines: IDiscipline[];
  actionsSlot?: any;
  setDiscipline: any;
}

export const DisciplinesView = ({
  loading,
  disciplines,
  actionsSlot,
  setDiscipline,
}: IDisciplinesView) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as DynamicLocaleType;

  const columns: TableColumnsType<IDiscipline> = [
    {
      title: '№',
      render: (_value, row, idx) => idx + 1,
      align: 'center',
      width: '55px',
    },
    {
      title: t('discipline:title'),
      dataIndex: `discipline_${currentLanguage}`,
      key: `discipline_${currentLanguage}`,
      render: (_value) => (
        <div className="text-left flex justify-between items-center gap-1 pr-1">
          <p>{_value}</p>
        </div>
      ),
      align: 'center',
    },
    {
      title: t('actions.actions'),
      dataIndex: 'operation',
      align: 'center',
      render: (_value, row, _index) => (
        <div onClick={() => setDiscipline(row)} className="flex justify-center items-center gap-4">
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
        dataSource={disciplines}
        columns={columns}
        rowClassName="editable-row"
        pagination={false}
        scroll={{ y: 'calc(100vh - 180px)' }}
        rowKey={(obj) => obj.id_discipline}
        loading={loading}
      />
    </>
  );
};
