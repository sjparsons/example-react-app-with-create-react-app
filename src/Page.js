import React, { Component } from 'react';

class Page extends Component {
  render() {
    const {pageId} = this.props.params
    return (
      <div className="app">
        <div className="text-center">Page {pageId}</div>
      </div>
    );
  }
}

export default Page;
