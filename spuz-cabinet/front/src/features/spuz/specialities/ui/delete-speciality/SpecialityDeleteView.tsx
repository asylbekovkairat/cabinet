import { FC } from 'react';

import { Button } from 'antd';

import { useNotification } from '~shared/ui';

import { deleteSpecialty } from '../../api';

interface SpecialityDeleteProps {
  speciality: { specialty: string; id_specialty: number } | null;
  loadSpecialitites: () => void;
  closeDeleteSpeciality: () => void;
}
// TRANSLATE

const SpecialityDeleteView: FC<SpecialityDeleteProps> = ({
  speciality,
  loadSpecialitites,
  closeDeleteSpeciality,
}) => {
  const notification = useNotification();

  const onDeleteSpecialty = async (id_specialty?: number) => {
    if (id_specialty) {
      const response = (await deleteSpecialty(id_specialty)) as { res: boolean };

      if (response.res) {
        notification.openNotification({
          message: 'success!',
          type: 'success',
        });

        closeDeleteSpeciality();
        loadSpecialitites();
      }
    }
  };

  return (
    <>
      {notification.contextHolder}
      <div className="flex flex-col gap-4">
        <p>Вы действительно хотите удалить специальность - "{speciality?.specialty}"?</p>
        <Button
          className="w-1/2 self-center"
          type="primary"
          onClick={() => onDeleteSpecialty(speciality?.id_specialty)}
        >
          Удалить
        </Button>
      </div>
    </>
  );
};

export default SpecialityDeleteView;
