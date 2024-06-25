import { Button, Modal } from 'antd';
import { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { SpuzSelectForm } from './SpuzSelectForm';
import { SpuzSelectConfirmView } from './SpuzSelectConfirmView';

interface Props {
  loadRegistrations: () => void;
}

const SpuzFilterView: FC<Props> = ({ loadRegistrations }) => {
  const { t } = useTranslation();
  const [FormOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const onOpen = () => setFormOpen(true);
  const closeFormModal = () => setFormOpen((prev) => !prev);

  const openConfirmModal = () => {
    closeFormModal();
    setConfirmOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmOpen((prev) => !prev);
  };

  return (
    <section>
      <Button type="primary" onClick={onOpen}>
        {t('cm:selectSpuz')}
      </Button>
      <Modal footer={null} open={FormOpen} onClose={closeFormModal} onCancel={closeFormModal}>
        <SpuzSelectForm openConfirmModal={openConfirmModal} />
      </Modal>
      <Modal
        footer={null}
        open={confirmOpen}
        onCancel={closeConfirmModal}
        onClose={closeConfirmModal}
        title={<p className="text-center">{t('cm:register')}</p>}
      >
        <SpuzSelectConfirmView
          loadRegistrations={loadRegistrations}
          closeConfirmModal={closeConfirmModal}
        />
      </Modal>
    </section>
  );
};

export default SpuzFilterView;
