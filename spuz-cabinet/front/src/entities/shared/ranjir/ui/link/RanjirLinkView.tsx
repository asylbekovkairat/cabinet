import { FC, memo } from 'react';
import { Button } from 'antd';

import { LinkIcon } from '~shared/ui';

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
      <Button className="flex items-center" type="link" disabled={!p} icon={<LinkIcon />}>
        <a href={`/spuz/ranjir/${type}?p=${p}&t=${t}`} target="_blank">
          {renderLinkContent[type]}
        </a>
      </Button>
    </>
  );
});
