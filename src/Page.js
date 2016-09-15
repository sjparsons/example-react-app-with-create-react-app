import React, { Component } from 'react';
import axios from 'axios'
import marked from 'marked'

class Page extends Component {
  constructor( props ) {
    super(props)
    this.state = {
      loadedPageId: '',
      loading: false,
      loadFailed: false,
      pageContent: {__html:''}
    }
  }

  componentDidMount() {
    const { pageId } = this.props.params
    this.loadPage(pageId)
  }

  componentWillReceiveProps(nextProps) {
    const {pageId} = nextProps.params,
          {loadedPageId, loading} = this.state
    if (pageId !== loadedPageId && !loading) {
      this.loadPage(pageId)
    }
  }

  loadPage(pageId) {
    this.setState({ loading: true, loadFailed: false })
    axios.get(getContentUrl(pageId))
    .then( response => {
      this.setState({
        loading: false,
        loadedPageId: pageId,
        loadFailed: false,
        pageContent: {__html: marked(response.data) }
      })
    })
    .catch( error => {
      this.setState({
        loading: false,
        loadFailed: true,
        loadedPageId: '',
        pageContent: {__html:''}
      })
    });
  }

  render() {
    const { loading, pageContent, loadFailed } = this.state
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
        { loadFailed ? 'Content failed to load': '' }
        { loading ? 'Loading...': <div dangerouslySetInnerHTML={pageContent}></div> }
        </div>
      </div>
    );
  }
}



function getContentUrl(pageId) {
  return '/static/content/' + pageId.replace(/[^a-zA-Z0-9]/, '') + '.md'
}


export default Page;
