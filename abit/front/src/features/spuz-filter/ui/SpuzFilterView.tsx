import { Button, Modal } from 'antd';
import { useState } from 'react';

import { SpuzSelectForm } from './SpuzSelectForm';

const SpuzFilterView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen((prev) => !prev);

  return (
    <section>
      <Button type="primary" onClick={onOpen}>
        Выбрать СПУЗ
      </Button>
      <Modal footer={null} open={isOpen} onClose={onClose} onCancel={onClose}>
        <SpuzSelectForm />
      </Modal>
    </section>
  );
};

export default SpuzFilterView;
