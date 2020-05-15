import React, { Component }　from 'react';
import { connect } from 'react-redux';

import { increment , decrement } from '../actions'

class App extends Component {
  render(){
    const props = this.props

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>

    
    )
  }
}

const mapStateToProps = state => ({value: state.count.value})

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App);

// VScodeでターミナルを使いたい時「control + shift　+　`を実行。」

// 文字置換
// gsed -i "" -e "s/div/h1/g" src/App.js
// -i は上書き保存するオプション ( --in-place ) -e はスクリプトを実行してバックアップを作成するオプション (--expression=script) バックアップ作成は強制されてしまうのですが -i ""とすることでバックアップファイルを作らずにコマンドを実行することができます