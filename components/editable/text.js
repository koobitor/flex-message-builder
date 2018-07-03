class Text extends React.Component {
  render() {
    return (
      <div contentEditable>{this.props.children}</div>
    )
  }
}

export default Text