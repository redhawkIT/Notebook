import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import axios from 'axios'
import { API } from 'tools'

export default class REVIEW_PAGE extends React.Component {
  static async getInitialProps ({ req, res, query }) {
    let props = {}
    try {
      const { id } = query || (req || {}).params
      const data = await axios
        .get(`${API(req)}/product/${id}`)
        .then(res => res.data)
        .catch(Error)
      props.data = data
    } catch (err) {
      console.error('cves.js:', err)
    }
    return props
  }
  static propTypes = {
    data: PropTypes.any
  }
  static defaultProps = {
    data: {}
  }
  render () {
    return (
      <article>
        <Helmet title='Review Page' />
        <section>
          <span>Review Page</span>
          <pre>{JSON.stringify(this.props)}</pre>
        </section>
      </article>
    )
  }
}
