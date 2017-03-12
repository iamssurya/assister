const React = require('react');


let vaultList = React.createClass({
  render(){
    return(
      <li className="collection-item avatar">
        <span className="title">{this.props.singleItem.title}</span>
        <p>{this.props.singleItem.url} <br />
           {this.props.singleItem.username}
        </p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
    );

  }
});

module.exports = vaultList;
