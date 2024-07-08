import { Tabs, TabsProps } from 'antd';
import { FC, ReactNode } from 'react';

interface AbitDocumentsView {
  attestat1: ReactNode;
  attestat2: ReactNode;
  passport1: ReactNode;
  passport2: ReactNode;
}

export const AbitDocumentsView: FC<AbitDocumentsView> = ({
  attestat1,
  attestat2,
  passport1,
  passport2,
}) => {
  const documentsTabs: TabsProps['items'] = [
    {
      key: '1',
      label: 'Аттестат (1 сторона)',
      children: attestat1,
    },
    {
      key: '2',
      label: 'Аттестат (2 сторона)',
      children: attestat2,
    },
    {
      key: '3',
      label: 'Паспорт (1 сторона)',
      children: passport1,
    },
    {
      key: '4',
      label: 'Паспорт (2 сторона)',
      children: passport2,
    },
  ];

  return <Tabs className="w-min" defaultActiveKey="1" items={documentsTabs} />;
};
