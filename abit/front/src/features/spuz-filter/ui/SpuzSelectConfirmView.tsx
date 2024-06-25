import { FC, useState } from 'react';

import { useAbiturientInfo } from '~entities/abiturient';
import { usePaymentTypes } from '~entities/shared/payment-type';
import { useTourByBk } from '~entities/tours';
import { i18n, useTranslation } from '~shared/lib/i18n';

import { Button, Input, useNotification } from '~shared/ui';

import { confirmSpuzRegister } from '../api';

interface Props {
  loadRegistrations: () => void;
  closeConfirmModal: () => void;
}

export const SpuzSelectConfirmView: FC<Props> = ({ loadRegistrations, closeConfirmModal }) => {
  const { t } = useTranslation();
  const notification = useNotification();
  const [cipher, setCipher] = useState('');

  const abiturientInfo = useAbiturientInfo();
  const paymentTypes = usePaymentTypes();
  const tourByBk = useTourByBk();

  const handleCipher = (value: string): void => {
    const validated = value.replace(/[^0-9]/g, '');

    setCipher(validated);
  };

  const onSubmit = async () => {
    if (cipher === abiturientInfo?.NumberAD) {
      const data = {
        id_admission_plan: paymentTypes?.[0].id_admission_plan,
        NumberSert: abiturientInfo?.NumberAD,
        tour: tourByBk?.[0].tour,
        bk: paymentTypes?.[0].id_bk,
        lang: i18n.language === 'ru' ? 1 : 2,
      };

      const response = (await confirmSpuzRegister(data)) as any;

      if (abiturientInfo?.NumberAD === cipher) {
        if (response?.res) {
          notification.openNotification({
            message: response.msg,
            type: 'success',
          });

          loadRegistrations();
          closeConfirmModal();
        } else {
          notification.openNotification({
            message: response.msg,
            type: 'error',
          });
        }
      } else {
        notification.openNotification({
          message: response.msg,
          type: 'error',
        });
      }
    } else {
      notification.openNotification({
        message: t('cm:correctCipher'),
        type: 'warning',
      });

      setCipher('');
    }
  };

  return (
    <>
      {notification.contextHolder}
      <div className="flex flex-col gap-3">
        <p className="text-center">
          <span>{t('cm:dearAbit')}</span> <br />
          &nbsp;{t('cm:enterCipher')}&nbsp;({abiturientInfo?.NumberAD})
        </p>
        <Input value={cipher} onChange={({ target }) => handleCipher(target.value)} />
        <div className="flex justify-center items-center gap-3">
          <Button type="primary" onClick={onSubmit}>
            {t('cm:regTalon')}
          </Button>
        </div>
      </div>
    </>
  );
};
