import { Button, ModalProps } from 'antd';
import { FunctionComponent } from 'react';

import { Input, Modal } from '~shared/ui';

interface Props extends ModalProps {}

export const RegistrationsConfirmView: FunctionComponent<Props> = (props) => {
  const handleConfirm = async () => {};

  return (
    <Modal
      className="text-center"
      title="Чын эле ырастагыңыз келеби?"
      footer={
        <div className="mt-5 flex gap-3 justify-end">
          <Button type="primary" onClick={handleConfirm}>
            Ырастоо
          </Button>
          <Button onClick={props.onClose}>Жабуу</Button>
        </div>
      }
      {...props}
    >
      <div className="flex flex-col gap-3">
        <p>
          Тандап алган адистигиңизди "Nomad" колледж УНПК "МУК" [070602] Дизайн (по отраслям) (
          Очное [9 класс]) 19.06.2024 02:26 ырастоо үчүн шифрди (шифр - 191285) киргизиңиз{' '}
        </p>
        <Input />
      </div>
    </Modal>
  );
};
