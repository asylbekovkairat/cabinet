import { useState } from 'react';

import { useAbiturientInfo } from '~entities/abiturient';
import { usePaymentTypes } from '~entities/shared/payment-type';
import { useTourByBk } from '~entities/tours';
import { i18n } from '~shared/lib/i18n';

import { Button, Input, useNotification } from '~shared/ui';

import { confirmSpuzRegister } from '../api';

const SpuzSelectConfirmView = () => {
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
        message: 'Введите верный шифр',
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
          <span>Урматтуу абитуриент!</span> <br /> Тандап алган адистикке катталуу үчүн, шифр
          киргизиңиз ({abiturientInfo?.NumberAD})
        </p>
        <Input value={cipher} onChange={({ target }) => handleCipher(target.value)} />
        <div className="flex justify-center items-center gap-3">
          <Button className="bg-red text-white">Отмена</Button>
          <Button type="primary" onClick={onSubmit}>
            Регистрация
          </Button>
        </div>
      </div>
    </>
  );
};

export default SpuzSelectConfirmView;
