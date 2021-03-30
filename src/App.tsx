import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import RouterContainer from './router/index';
import globStore from './store/glob';
import './App.scss';

let loop: null | undefined = null;
let time = 0;

function App() {
  // 长按事件
  const longTimeTouch = (type: string) => {
    time = +new Date();
    clearTimeout(loop); // 再次清空定时器，防止重复注册定时器
    loop = setInterval(
      (() => {
        // 执行的代码块
        if (type === 'add') {
          globStore.add();
        } else {
          globStore.los();
        }
      }).bind(this),
      16
    );
  };
  // 长按结束清空定时器
  const emptyTime = (e) => {
    clearTimeout(loop); // 清空定时器，防止重复注册定时器
    if (+new Date() - time > 500) {
      console.log('执行了一次长按事件！！！');
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="content">
          <Button
            onClick={globStore.add}
            onTouchStart={() => {
              longTimeTouch('add');
            }}
            onTouchEnd={emptyTime}
          >
            +
          </Button>
          <h3>
            当前值：
            {globStore.count}
          </h3>
          <h3>
            计算属性：
            {globStore.compGet}
          </h3>
          <Button
            onClick={globStore.los}
            onTouchStart={() => {
              longTimeTouch('los');
            }}
            onTouchEnd={emptyTime}
          >
            -
          </Button>
        </div>
        <RouterContainer />
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
