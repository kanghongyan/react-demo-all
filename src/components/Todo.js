/**
 * Created by khongyan on 2017/3/27.
 */
import React, { PropTypes } from 'react'

// 函数式组件 参数是props，这里用es6的写法
const Todo = ({ id, onClick, completed, text, authorName }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <b className="fl">{ id }</b>
    <span>{ text }</span>
    <span className="fr">by: { authorName }</span>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo