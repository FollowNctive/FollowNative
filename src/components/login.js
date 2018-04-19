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

      return(
        <div className="login">
           <Row>             
             <Col span={4} offset="10">
              <Form>
                <FormItem label="user">
                {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入你的账号' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
            )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('userPassword',{
                    rules:[{required:true,message:'请输入密码'}]
                  })(<Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>)}
                </FormItem>
              </Form>
              <Button type="button">登录</Button>
             </Col>   
           </Row>
           
        </div>
      )
    }
}
const userLogin = Form.create()(Login)

export default userLogin