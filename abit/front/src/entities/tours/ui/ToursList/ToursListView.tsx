import { FC, useMemo } from 'react';

import { Card } from 'antd';

import dayjs from 'dayjs';

import { Tour } from '~entities/tours/model';

interface Props {
  list: Tour[];
}

export const ToursListView: FC<Props> = ({ list }) => {
  const renderTours = useMemo(
    () =>
      list
        .sort((a, b) => (a.tour < b.tour ? -1 : 1))
        .map((item, index) => (
          <Card
            className="w-[300px] text-center"
            title={`${item.tour} Тур`}
            key={`${item.bk}_${index}`}
          >
            <p className="tracking-wider mb-[24px]">{item.bk}</p>
            <div className="mb-[24px]">
              <p className="text-[#D87E2E] text-lg tracking-wide">Регистрация</p>
              <p>Башталышы: {dayjs(item.begin_date).format('DD:MM:YYYY')}</p>
              <p>Аяктоо: {dayjs(item.end_date).format('DD:MM:YYYY')}</p>
            </div>
            <div>
              <p className="text-[#D87E2E] text-lg tracking-wide">Подтверждение</p>
              <p>Башталышы: {dayjs(item.confirm_begin_date).format('DD:MM:YYYY')}</p>
              <p>Аяктоо: {dayjs(item.confirm_end_date).format('DD:MM:YYYY')}</p>
            </div>
          </Card>
        )),
    [list]
  );

  return <section className="flex flex-wrap justify-center gap-20">{renderTours}</section>;
};
