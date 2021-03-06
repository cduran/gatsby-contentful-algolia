import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SearchComp from '../components/search/searchComp'
import 'instantsearch.css/themes/algolia.css'

class Search extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="hero">Blog</div>
          <div className="wrapper">
            <SearchComp />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Search
