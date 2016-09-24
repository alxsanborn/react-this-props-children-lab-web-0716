const React = require('react')

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className="heaven"><p>{child}</p></div>
      );
    });

    return (
      <div>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}

module.exports = ThemedDecorations;
