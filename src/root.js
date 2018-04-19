import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter} from 'react-router-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import userLogin from './components/login'


class Root extends Component{
  render(){
    return(
      <div>       
        <BrowserRouter>
          <Route path="/" component={userLogin}></Route>
        </BrowserRouter>     
      </div>
    )
  }
}

ReactDOM.render(<Root/>,document.getElementById('root'))