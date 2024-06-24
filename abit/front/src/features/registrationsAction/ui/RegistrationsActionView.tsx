import { Button, Checkbox, ModalProps } from 'antd';
import { FunctionComponent, useMemo, useState } from 'react';

import { RegistrationInfo } from '~entities/registrations';

import { Input, Modal, useNotification } from '~shared/ui';

import { ConfirmType, confirmRegistration } from '../api';

interface Props extends ModalProps {
  info: RegistrationInfo | undefined;
  onActionViewClose: () => void;
  actionType: ConfirmType;
  loadRegistrations: () => void;
}

export const RegistrationsActionView: FunctionComponent<Props> = (props) => {
  const { info, onActionViewClose, actionType, loadRegistrations } = props;

  const notification = useNotification();
  const [cipher, setCipher] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const handleCipher = (value: string): void => {
    const validated = value.replace(/[^0-9]/g, '');

    setCipher(validated);
  };

  const onSubmit = async (type: ConfirmType) => {
    if (cipher === info?.NumberSert || (actionType === ConfirmType.deny && checked)) {
      const params = { id_ReceptInfo: info?.id_ReceptInfo };
      await confirmRegistration(params, type);

      notification.openNotification({
        message: 'success',
        type: 'success',
      });

      onActionViewClose();
      loadRegistrations();
    } else {
      setCipher('');

      notification.openNotification({
        message: `Заполните все поля!`,
        type: 'warning',
      });
    }
  };

  const renderAction = useMemo(() => {
    switch (actionType) {
      case ConfirmType.confirm:
        return (
          <>
            <div className="flex flex-col gap-3">
              <p>
                {info?.specialty} ырастоо үчүн шифрди (шифр - {info?.NumberSert}) киргизиңиз
              </p>
              <Input value={cipher} onChange={({ target }) => handleCipher(target.value)} />
            </div>
            <div className="mt-5 flex gap-3 justify-end">
              <Button type="primary" onClick={() => onSubmit(ConfirmType.confirm)}>
                Ырастоо
              </Button>
              <Button onClick={onActionViewClose}>Жабуу</Button>
            </div>
          </>
        );

      case ConfirmType.deny:
        return (
          <>
            <div className="flex flex-col gap-3">
              <p className="text-left">
                Введите ваш шифр и поставьте галочку, чтобы освободить выделенное Вам место в
                выбранном ранее СПУЗе: <br /> <strong>{info?.specialty}</strong> <br /> ДАЛЕЕ ВЫ
                СМОЖЕТЕ УЧАСТВОВАТЬ В СЛЕДУЮЩЕМ ТУРЕ. <br /> В ЭТОМ ТУРЕ ВЫ НЕ СМОЖЕТЕ ВЫБРАТЬ
                ДРУГУЮ СПЕЦИАЛЬНОСТЬ
              </p>
              <Input value={cipher} onChange={({ target }) => handleCipher(target.value)} />
              <Checkbox checked={checked} onChange={({ target }) => setChecked(target.checked)}>
                <span className="text-red font-bold">
                  Да, я подтверждаю свое желание освободить место
                </span>
              </Checkbox>
            </div>
            <div className="mt-5 flex gap-3 justify-end">
              <Button onClick={onActionViewClose}>Жабуу</Button>
              <Button type="primary" onClick={() => onSubmit(ConfirmType.deny)}>
                Отозвать (отказаться и освободить выделенное Вам место)
              </Button>
            </div>
          </>
        );

      default:
        <></>;
    }
  }, [actionType, checked, cipher, info?.NumberSert, info?.specialty, onActionViewClose]);

  return (
    <>
      {notification.contextHolder}
      <Modal
        className="text-center !w-fit !w-min"
        title={
          actionType === ConfirmType.confirm
            ? 'Чын эле ырастагыңыз келеби?'
            : 'Вы действительно хотите отозвать (отказаться)?'
        }
        onClose={onActionViewClose}
        onCancel={onActionViewClose}
        footer={null}
        {...props}
      >
        {renderAction}
      </Modal>
    </>
  );
};
