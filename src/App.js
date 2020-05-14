import React　from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Taro" , age: 10} , 
    {name: "Hanako", age: 5},
    {name: "noName", age: 2},
    
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}
const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old.</div> 
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}
export default App;

// VScodeでターミナルを使いたい時「control + shift　+　`を実行。」

// 文字置換
// gsed -i "" -e "s/div/h1/g" src/App.js
// -i は上書き保存するオプション ( --in-place ) -e はスクリプトを実行してバックアップを作成するオプション (--expression=script) バックアップ作成は強制されてしまうのですが -i ""とすることでバックアップファイルを作らずにコマンドを実行することができます