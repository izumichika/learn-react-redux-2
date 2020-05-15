import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

// import { postEvents } from '../actions'

class EventsNew extends Component {
  render(){
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>

    )
  }
}

// const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(EventsNew);

// VScodeでターミナルを使いたい時「control + shift　+　`を実行。」

// 文字置換
// gsed -i "" -e "s/div/h1/g" src/App.js
// -i は上書き保存するオプション ( --in-place ) -e はスクリプトを実行してバックアップを作成するオプション (--expression=script) バックアップ作成は強制されてしまうのですが -i ""とすることでバックアップファイルを作らずにコマンドを実行することができます