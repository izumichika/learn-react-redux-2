import React　from 'react';

// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={ () => {console.log("I am clicked")}} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <div>meow</div>
}

export default App;

// VScodeでターミナルを使いたい時「control + shift　+　`を実行。」

// 文字置換
// gsed -i "" -e "s/div/h1/g" src/App.js
// -i は上書き保存するオプション ( --in-place ) -e はスクリプトを実行してバックアップを作成するオプション (--expression=script) バックアップ作成は強制されてしまうのですが -i ""とすることでバックアップファイルを作らずにコマンドを実行することができます