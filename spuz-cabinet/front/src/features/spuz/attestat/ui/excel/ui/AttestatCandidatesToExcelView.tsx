import { Button } from 'antd';

import dayjs from 'dayjs';

import { useAttestatCandidates } from '~entities/spuz/attestat';

import { ExcelButtonContainer } from '~features/shared/excel';

import { ExcelIcon } from '~shared/ui';

import { convertToExcel } from '../lib';

export const AttestatCandidatesToExcel = () => {
  const attestatCandidates = useAttestatCandidates();

  const exportExcel = () => {
    const HEADER = [
      { value: 'ФИО', width: 35 },
      { value: 'ПИН', width: 18 },
      { value: 'Дата рождение', width: 30 },
      { value: 'Телефон', width: 15 },
      { value: 'Средний балл', width: 15 },
      { value: 'Проф.балл', width: 15 },
      { value: 'Внутр.испытание', width: 15 },
      { value: 'Общая сумма', width: 15 },
      { value: 'Дата регистрации', width: 15 },
    ];

    const BODY = attestatCandidates?.map((candidate) => {
      return [
        candidate.fio,
        candidate.pin,
        candidate.birthdate,
        candidate.telefon,
        candidate.srBall,
        candidate.ballDiscipline,
        candidate.internal_test || 0,
        Math.abs(candidate.summ).toFixed(2),
        dayjs(candidate.DateReg).format('DD.MM.YYYY HH:mm'),
      ];
    });

    convertToExcel({ HEADER, BODY });
  };

  return (
    <>
      <ExcelButtonContainer className="w-min">
        <Button
          className="flex items-center w-min"
          type="primary"
          icon={<ExcelIcon />}
          onClick={exportExcel}
        >
          Excel
        </Button>
      </ExcelButtonContainer>
    </>
  );
};
