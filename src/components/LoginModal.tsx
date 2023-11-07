import React, { memo } from 'react'
import MyModal from './Modal'
import { Form } from 'antd'
import { login } from 'service/user'

interface IProps {
  modalShow: boolean
  setModalShow: (val: boolean) => void
}

const LoginModal = memo((props: IProps) => {
  const { modalShow, setModalShow } = props
  const handleSubmit = (values: { username: string; password: string }) => {
    console.log(values)
    login(values)
  }
  return (
    <>
      <MyModal modalShow={modalShow} setModalShow={setModalShow} title="登录" footer={<></>}>
        <div>
          <Form onFinish={handleSubmit} initialValues={{ username: '', password: '' }}>
            <p className="text-lb">用户名</p>

            <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
              <input type="text" placeholder={'用户名'} className="input mt-10" id={'username'} />
            </Form.Item>
            <p className="text-lb mt-25">密码</p>

            <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
              <input placeholder={'密码'} type="password" id={'password'} className="input mt-10" />
            </Form.Item>
            <Form.Item>
              <div className="flex items-center justify-end">
                <button
                  className="btn btn-o btn-md flex items-center text-t3"
                  type={'button'}
                  onClick={() => setModalShow(false)}
                >
                  取消
                </button>
                <button type={'submit'} className="btn btn-o btn-md ml-5 flex items-center text-t3">
                  登录
                </button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </MyModal>
    </>
  )
})

export default LoginModal
