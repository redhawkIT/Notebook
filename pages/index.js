import React from 'react'
import Helmet from 'react-helmet'

export default class INDEX_PAGE extends React.Component {
  static propTypes = {}
  static defaultProps = {}
  render () {
    return (
      <article>
        <Helmet title='Home' />
        <section>
          <h1>Chocolate Reviews</h1>
          <p>Project for Dubhacks MLH Hackathon 2018</p>
        </section>
      </article>
    )
  }
}
