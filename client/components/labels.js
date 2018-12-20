import React, {Component} from 'react'

class Labels extends Component {
  constructor(props) {
    super(props)

    this.state = {
      labels: []
    }
  }

  componentDidMount() {
    this.props.loadLabels().then(labels => this.setState({labels}))
  }

  render() {
    return (
      <div>
        <h1>Labels</h1>
        <ul>
          {this.state.labels.map(label => <p key={label.id}>{label.title}</p>)}
        </ul>
      </div>
    )
  }
}

export default Labels
