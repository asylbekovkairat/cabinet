import { FC } from 'react';
import { Button } from 'antd';

import { PrinterIcon } from '~shared/ui';

interface PrintButtonViewProps {
  tableName: string;
}

export const PrintButtonView: FC<PrintButtonViewProps> = ({ tableName }) => {
  const onPrint = () => {
    const printContents = document.querySelector(tableName)?.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents || '';
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <>
      <Button
        className="flex items-center w-min"
        type="primary"
        icon={<PrinterIcon />}
        onClick={onPrint}
      >
        Print
      </Button>
    </>
  );
};
