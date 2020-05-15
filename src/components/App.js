import React, { Component }　from 'react';

const App = () => (<Counter></Counter>)
class Counter extends Component {
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1})
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count -1 })
  }
  render(){
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>

    
    )
  }
}


export default App;

// VScodeでターミナルを使いたい時「control + shift　+　`を実行。」

// 文字置換
// gsed -i "" -e "s/div/h1/g" src/App.js
// -i は上書き保存するオプション ( --in-place ) -e はスクリプトを実行してバックアップを作成するオプション (--expression=script) バックアップ作成は強制されてしまうのですが -i ""とすることでバックアップファイルを作らずにコマンドを実行することができます