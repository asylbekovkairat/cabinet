import { Button, Checkbox, ModalProps } from 'antd';
import { FunctionComponent, useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();
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
        message: t('cm:notify.success'),
        type: 'success',
      });

      onActionViewClose();
      loadRegistrations();
    } else {
      setCipher('');

      notification.openNotification({
        message: t('cm:fillAllFields'),
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
                {t('cm:confirmEnrolle', {
                  yourCipher: info?.NumberSert,
                  specialty: info?.specialty,
                })}
              </p>
              <Input value={cipher} onChange={({ target }) => handleCipher(target.value)} />
            </div>
            <div className="mt-5 flex gap-3 justify-end">
              <Button type="primary" onClick={() => onSubmit(ConfirmType.confirm)}>
                {t('cm:confirm')}
              </Button>
            </div>
          </>
        );

      case ConfirmType.deny:
        return (
          <>
            <div className="flex flex-col gap-3">
              <p className="text-left">
                {t('cm:denyEnrolle1')}
                <br />
                <strong>{info?.specialty}</strong> <br />
                {t('cm:denyEnrolle2')}
                <br />
                {t('cm:denyEnrolle3')}
              </p>
              <Input value={cipher} onChange={({ target }) => handleCipher(target.value)} />
              <Checkbox checked={checked} onChange={({ target }) => setChecked(target.checked)}>
                <span className="text-red font-bold">{t('cm:denyConfirm')}</span>
              </Checkbox>
            </div>
            <div className="mt-5 flex gap-3 justify-end">
              <Button type="primary" onClick={() => onSubmit(ConfirmType.deny)}>
                {t('cm:denyBtn')}
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
        className="text-center !w-fit !w-min min-w-[calc(100%-250px)]"
        title={
          actionType === ConfirmType.confirm
            ? t('cm:confirmEnrolleTitle')
            : t('cm:denyEnrolleTitle')
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
