import { Button } from 'antd';

import { BorderedLinkContainer, DocsIcon, InstructionIcon, LinkIcon } from '~shared/ui';
import { DocumentButtonContainer } from '~shared/ui';

export const RegisterAbiturientContent = () => {
  return (
    <>
      <p>Абитуриенты должны сами зарегистрироваться в системе по инструкции</p>
      <div className="flex flex-wrap items-center gap-2">
        <DocumentButtonContainer>
          <Button className="flex items-center" type="primary" icon={<DocsIcon />}>
            PDF инструкция для абитуриентов
          </Button>
        </DocumentButtonContainer>
        <Button className="flex items-center" type="primary" icon={<InstructionIcon />}>
          Инструкция регистрации для абитуриентов
        </Button>
        <BorderedLinkContainer>
          <Button className="flex items-center border-1 border" type="link" icon={<LinkIcon />}>
            Страница регистрации для абитуриентов
          </Button>
        </BorderedLinkContainer>
      </div>
    </>
  );
};
