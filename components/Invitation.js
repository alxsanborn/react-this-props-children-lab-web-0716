const React = require('react')

class Invitation extends React.Component {
  render () {
    return (
      <div>
      <h1 className="greeting">You've been invited!</h1>
      <div className="message"> {this.props.children}</div>
      </div>
    )
  }
}

module.exports = Invitation;
