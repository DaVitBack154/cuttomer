import { Form, Input } from 'antd';
import axios from 'axios';
import swal from 'sweetalert2';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FaUnlockAlt } from 'react-icons/fa';
import styled from 'styled-components';

const FormLoginComponent = styled.div`
  background-color: #fff;
  height: 100%;
  padding: 20px;
  width: 100%;

  .img-chase {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-weight: bold;
    color: #015352;
  }
`;
const FormComponent = styled(Form)`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  .ant-form-item {
    width: 95%;
  }

  .icon-login {
    font-size: 20px;
    margin-right: 10px;
  }
  .button-login {
    font-weight: bold;
    border-radius: 10px;
    padding: 8px;
    background-color: #015352;
    color: #ffff;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }
`;

export default function FormRegister(props) {
  const [form] = Form.useForm();

  // const onFinish = async (values) => {
  //     let resp = await axios.post(process.env.REACT_APP_API + "/register", values, { withCredentials: true, });

  //     if (!resp.data.status) {
  //         swal.fire({
  //             title: "",
  //             text: resp.data.message,
  //             icon: "error",
  //             confirmButtonText: "X",
  //         });
  //     } else {
  //         swal.fire({
  //             title: "",
  //             text: resp.data.message,
  //             icon: "success",
  //             confirmButtonText: "X",
  //         });
  //         props.setToggle('singin')
  //         form.resetFields()
  //     }
  // };

  return (
    <FormLoginComponent className="sing-in">
      <div className="img-chase">
        <img src="/nike.jpg" width={90} height={90} alt="" />
      </div>

      <h2 className="title">Register</h2>
      <FormComponent
        className="login-form-wrapper"
        form={form}
        layout="vertical"
      >
        <Form.Item
          name={'user_id'}
          label={'Username'}
          rules={[
            { required: true, message: 'Please input your Name-Surname !' },
          ]}
        >
          <Input
            autoComplete="off"
            className="input-login"
            prefix={<BsFillPersonPlusFill className="icon-login" />}
          />
        </Form.Item>

        <Form.Item
          name={'pswd'}
          label={'Password'}
          rules={[{ required: true, message: 'Please input your username !' }]}
        >
          <Input
            autoComplete="off"
            className="input-login"
            type="password"
            prefix={<FaUnlockAlt className="icon-login" />}
          />
        </Form.Item>

        <Form.Item
          name={'user_description'}
          label={'User-Detail'}
          rules={[{ required: true, message: 'Please input your name !' }]}
        >
          <Input
            autoComplete="off"
            className="input-login"
            prefix={<BsFillPersonPlusFill className="icon-login" />}
          />
        </Form.Item>

        <Form.Item>
          <button className="button-login" type="submit">
            Submit
          </button>
        </Form.Item>
      </FormComponent>
    </FormLoginComponent>
  );
}
