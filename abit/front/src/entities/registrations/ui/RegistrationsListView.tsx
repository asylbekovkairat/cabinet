import { Fragment, FunctionComponent, useMemo } from 'react';

import { Button, Card, Col } from 'antd';

import { useTranslation } from 'react-i18next';

import { ConfirmType } from '~features/registrationsAction';

import { MergedRegistrations, RegistrationInfo } from '../model';

interface Props {
  registrationList: MergedRegistrations;
  onActionViewOpen?: (data: RegistrationInfo, type: ConfirmType) => void;
}

export const RegistrationsListView: FunctionComponent<Props> = ({
  registrationList,
  onActionViewOpen = () => {},
}) => {
  const { t } = useTranslation();

  const getColor = (status: string) => {
    const color =
      status.trim() === 'Подтверждено абитуриентом'
        ? '#008000'
        : status.trim().includes('Забрал')
        ? '#ff4d4f'
        : status.trim() === 'Рекомендован'
        ? '#009100'
        : status.trim() === 'Подтверждено спузом'
        ? '#005D00'
        : '#8b8b8b';

    return color;
  };

  const renderRegistrations = useMemo(
    () =>
      registrationList
        .sort((a, b) => (a.tours < b.tours ? -1 : 1))
        .map((register) => {
          const {
            id_bk,
            specialty,
            status,
            tours,
            visible_button_zabra,
            visible_button_confirm,
            bk,
          } = register;

          const statusTags = status.split(',');

          return (
            <Fragment key={id_bk}>
              <Col className="w-full">
                <Card
                  title={
                    <p>
                      Тур: {`${tours} `}
                      <span className={id_bk === 1 ? 'text-yellow' : 'text-black'}>[{bk}]</span>
                    </p>
                  }
                  bordered={false}
                >
                  <section className="flex justify-between items-center">
                    <div className="w-">
                      {specialty}
                      <br />
                      <br />
                      <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                        {statusTags.map((status) => (
                          <span
                            key={status}
                            style={{
                              color: getColor(status),
                            }}
                          >
                            {status}
                          </span>
                        ))}
                      </div>
                    </div>
                    {visible_button_zabra && (
                      <Button
                        type="primary"
                        onClick={() => onActionViewOpen(register, ConfirmType.deny)}
                      >
                        {t('cm:denyRegister')}
                      </Button>
                    )}
                    {visible_button_confirm && (
                      <Button
                        type="primary"
                        onClick={() => onActionViewOpen(register, ConfirmType.confirm)}
                      >
                        {t('cm:confirm')}
                      </Button>
                    )}
                  </section>
                </Card>
              </Col>
            </Fragment>
          );
        }),
    [registrationList]
  );

  return <section className="w-full flex flex-col gap-5">{renderRegistrations}</section>;
};
