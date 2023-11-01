import { message } from 'antd';

const [messageApi] = message.useMessage();

const success = (content: string) => {
  messageApi.open({
    type: 'success',
    content
  });
};

const error = (content: string) => {
  messageApi.open({
    type: 'error',
    content
  });
};

const warning = (content: string) => {
  messageApi.open({
    type: 'warning',
    content
  });
};

const messageUtils = {
  success,
  error,
  warning
};

export default messageUtils;
