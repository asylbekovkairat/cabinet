import { FC, memo } from 'react';
import { Button } from 'antd';

import { RanjirLinkTypes } from '../../model';

interface RanjirLinkViewProps {
  type: RanjirLinkTypes;
  p: number;
  t: number;
}

export const RanjirLinkView: FC<RanjirLinkViewProps> = memo(({ type, p, t }) => {
  const renderLinkContent: Record<keyof typeof RanjirLinkTypes, string> = {
    [RanjirLinkTypes.report]: 'Ранжированный список',
    [RanjirLinkTypes.confirm]: 'Протокол подтверждения',
    [RanjirLinkTypes.confirm_no]: 'Протокол не подтвердивших',
    [RanjirLinkTypes.svod]: 'Сводная ведомость',
    [RanjirLinkTypes.recom]: 'Протокол рекомендаций',
  };

  return (
    <>
      <Button type="link" disabled={!p}>
        <a href={`/spuz/ranjir/${type}?p=${p}&t=${t}`}>{renderLinkContent[type]}</a>
      </Button>
    </>
  );
});
