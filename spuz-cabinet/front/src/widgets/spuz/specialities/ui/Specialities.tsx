import { Modal } from 'antd';
import { useEffect, useState } from 'react';

import { useLearningId } from '~entities/spuz/learning-type';
import {
  SpecialitiesListView,
  useSetSpecialities,
  useSpecialities,
} from '~entities/spuz/specialities';
import {
  SpecialitiesAddView,
  SpecialitiesEditView,
  SpecialityDeleteView,
} from '~features/spuz/specialities';

const Specialities = () => {
  const [isEditingOpen, setIsEditingOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [editInitialValues, setEditInitialValues] = useState<any>(null);
  const [deleteSpecialty, setDeleteSpecialty] = useState<{
    specialty: string;
    id_specialty: number;
  } | null>(null);

  const learningId = useLearningId();
  const specialities = useSpecialities();

  const setSpecialities = useSetSpecialities();

  useEffect(() => {
    if (learningId) {
      setSpecialities({ id_university: 138, id_learning: learningId });
    }
  }, [learningId]);

  const loadSpecialitites = () => {
    if (learningId) {
      setSpecialities({ id_university: 138, id_learning: learningId });
    }
  };

  const onDeleteSpeciality = (info: { specialty: string; id_specialty: number }) => {
    setDeleteSpecialty({ ...info });
    setIsDeleteOpen(true);
  };

  const closeDeleteSpeciality = () => {
    setDeleteSpecialty(null);
    setIsDeleteOpen(false);
  };

  const onEditSpeciality = (data: any) => {
    setIsEditingOpen(true);
    setEditInitialValues(data);
  };

  const closeEditSpeciality = () => {
    setIsEditingOpen(false);
    setEditInitialValues(null);
  };

  return (
    <>
      <Modal open={isEditingOpen} onCancel={closeEditSpeciality} footer={null}>
        <SpecialitiesEditView
          loadSpecialitites={loadSpecialitites}
          initialValues={editInitialValues}
          closeEditSpeciality={closeEditSpeciality}
        />
      </Modal>
      <Modal open={isDeleteOpen} onCancel={closeDeleteSpeciality} footer={null}>
        <SpecialityDeleteView
          speciality={deleteSpecialty}
          loadSpecialitites={loadSpecialitites}
          closeDeleteSpeciality={closeDeleteSpeciality}
        />
      </Modal>
      <SpecialitiesAddView loadSpecialitites={loadSpecialitites} />
      <SpecialitiesListView
        list={specialities?.reverse() ?? []}
        onDelete={onDeleteSpeciality}
        onEdit={onEditSpeciality}
      />
    </>
  );
};

export default Specialities;
