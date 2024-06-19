import { FunctionComponent, MouseEventHandler, SetStateAction, useMemo } from 'react';

import { Button, Card, Col } from 'antd';

import { MergedRegistrations } from '../model';

interface Props {
  registrationList: MergedRegistrations;
  onConfirm?: (value: SetStateAction<boolean>) => void;
}

export const RegistrationsListView: FunctionComponent<Props> = ({
  registrationList,
  onConfirm,
}) => {
  const renderRegistrations = useMemo(
    () =>
      registrationList.map(
        ({ id_bk, specialty, status, tours, visible_button_zabra, visible_button_confirm }) => (
          <>
            <Col className="w-full" key={id_bk}>
              <Card
                title={
                  <p>
                    Тур: {`${tours} `}
                    <span className={id_bk === 1 ? 'text-yellow' : 'text-black'}>[Контракт]</span>
                  </p>
                }
                bordered={false}
              >
                <section className="flex justify-between items-center">
                  <div>
                    {specialty}
                    <br />
                    <br />
                    <span>{status}</span>
                  </div>
                  {visible_button_zabra && (
                    <Button
                      type="primary"
                      onClick={onConfirm as unknown as MouseEventHandler<HTMLElement>}
                    >
                      Баш тартуу (Сизге бөлүнгөн орунду бошотуу)
                    </Button>
                  )}
                  {visible_button_confirm && (
                    <Button
                      type="primary"
                      onClick={onConfirm as unknown as MouseEventHandler<HTMLElement>}
                    >
                      Подтвердить
                    </Button>
                  )}
                </section>
              </Card>
            </Col>
          </>
        )
      ),
    [registrationList]
  );

  return <section className="w-full flex flex-col gap-5">{renderRegistrations}</section>;
};
