import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>mera naam {this.props.name} and meri umr {this.props.age}</h1>
        <button onClick={this.props.clicked}>click</button>

      </div>
    )
  }
}
