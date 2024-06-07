import { useTranslation } from 'react-i18next';

import { IDirection } from '~entities/institution/direction/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Table, TableColumnsType } from '~shared/ui';

interface IDirectionsView {
  loading: boolean;
  directions: IDirection[];
  actionsSlot?: any;
  setDirection: any;
}

export const DirectionsView = ({
  loading,
  directions,
  actionsSlot,
  setDirection,
}: IDirectionsView) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as DynamicLocaleType;

  const columns: TableColumnsType<IDirection> = [
    {
      title: '№',
      render: (_value, row, idx) => idx + 1,
      align: 'center',
      width: '55px',
    },
    {
      title: t('direction:code'),
      dataIndex: 'direction_cipher',
      key: 'direction_cipher',
      align: 'center',
      width: '100px',
    },
    {
      title: t('direction:title'),
      dataIndex: `direction_${currentLanguage}`,
      key: `direction_${currentLanguage}`,
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
        <div onClick={() => setDirection(row)} className="flex justify-center items-center gap-4">
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
        dataSource={directions}
        columns={columns}
        rowClassName="editable-row"
        pagination={false}
        scroll={{ y: 'calc(100vh - 284px)' }}
        rowKey={(obj) => obj.direction_cipher}
        loading={loading}
      />
    </>
  );
};
