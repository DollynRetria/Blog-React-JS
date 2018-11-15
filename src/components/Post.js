import React, { Component } from 'react'
import { connect } from 'react-redux'


class Post extends Component {
  render() {

    const post = this.props.post ? (
      <div className="service-detail">
        <div className="service-detail-title">{this.props.post.title}</div>
        <p>{this.props.post.content}</p>
      </div>
    ) : (
      <div className="service-detail-load">Loading post...</div>
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            {post}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(Post)
