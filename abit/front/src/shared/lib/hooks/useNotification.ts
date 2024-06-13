import { App } from 'antd';
import { MessageType } from 'antd/es/message/interface';

const useNotification = () => {
  const { message } = App.useApp();

  const showMessageSuccess = (value: string): MessageType => message.success(value);

  const showMessageError = (value: string): MessageType => message.error(value);

  return {
    showMessageSuccess,
    showMessageError,
  };
};

export default useNotification;
