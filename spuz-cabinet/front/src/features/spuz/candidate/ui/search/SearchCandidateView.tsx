import { Button, Form } from 'antd';
import { MaskedInput } from 'antd-mask-input';

import { useUserInfo } from '~entities/shared/user';
import { useSetCandidateByPin } from '~entities/candidate/byPin';
import { SearchIcon } from '~shared/ui';

export const SearchCandidateView = () => {
  const [form] = Form.useForm();

  const userInfo = useUserInfo();
  const setCandidateByPin = useSetCandidateByPin();

  const onFinish = async ({ inn }: { inn: string }) => {
    const searchParams = {
      inn,
      id_university: userInfo?.id_university || 0,
      locale: 'ru',
    };

    setCandidateByPin(searchParams);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <div className="flex items-end gap-7">
        <Form.Item className="w-full" label="ПИН" name="inn">
          <MaskedInput mask={/^[0-9]+$/} maxLength={14} />
        </Form.Item>
        <Form.Item>
          <Button
            className="w-min mx-auto flex items-center justify-center pl-10 pr-12"
            htmlType="submit"
            type="primary"
            icon={<SearchIcon stroke="#fff" />}
          >
            Поиск
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
