import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TextTruncate from 'react-text-truncate'

class Nosservices extends Component {

  render(){
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="service-list-item" key={post.id}>

            <div className="list-item-title">
              <Link to={'/' + post.id}>{post.title}</Link>
            </div>

            <div className="list-item-excerpt">
				<TextTruncate
				    line={1}
				    truncateText="…"
				    text={post.content}
				/>
            </div>


          </div>
        )
      })
    ) : (
      <div>Pas de post à afficher</div>
    );

    return (
      <div>
        <div className="container">
        	<div className="row">
        	      <div className="col-md-12 service-wrapper">
			          <div className="page-title">Nos services</div>
			          {postList}
		          </div>
              </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Nosservices)