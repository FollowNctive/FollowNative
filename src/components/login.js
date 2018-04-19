import React,{Component} from 'react'
import {
  Button,
  Form,
  Row,
  Col,
  Input,
  Checkbox,  
  Icon
} from 'antd'
import '../commons/css/login.css'

const FormItem = Form.Item

class Login extends Component{
    constructor(){
      super()
    }

    render(){
      const { getFieldDecorator } = this.props.form;
      const FormItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 20},
          sm: { span: 18 },
        }
      }
      return(
        <div className="login">
           
              <Form>
                <FormItem className="form-title">
                  <h1>-----管理员登录-----</h1>
                </FormItem>
                <FormItem  
                {...FormItemLayout}                
                label="用户名:">
                {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入你的账号' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
            )}
                </FormItem>
                <FormItem 
                {...FormItemLayout}
                label="密码"
                >
                  {getFieldDecorator('userPassword',{
                    rules:[{required:true,message:'请输入密码'}]
                  })(<Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>)}
                </FormItem>
              </Form>
              <FormItem
          wrapperCol={{
            xs: { span: 22, offset: 2 },
            sm: { span: 20, offset: 2 },
          }}
        >
          <Button type="primary" htmlType="submit" className="login-form">登录</Button>
        </FormItem>   
           
        </div>
      )
    }
}
const userLogin = Form.create()(Login)

export default userLogin