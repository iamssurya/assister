const React = require('react');
const ReactDOM = require('react-dom');
let fs = eRequire('fs');

let loadApts = JSON.parse(fs.readFileSync(dataLocation));
var VaultList = require('./vault');


let MainInterface = React.createClass({
  getInitialState(){
    return{
      myData: loadApts
    }
  },
  render(){
    let myData = this.state.myData;
    myData = myData.map((item,index)=>{
      return(
        <VaultList key={index}
        singleItem={item}
        />
      );
    });
    return(
      <div className="collection">{myData}</div>
    );

  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('cred-list')
);
