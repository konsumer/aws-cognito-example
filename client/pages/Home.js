import React, { Component } from 'react'

/* global fetch*/

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hipsterIpsum: null
    }
  }

  componentWillMount () {
    fetch('http://hipsterjesus.com/api/')
      .then(r => r.json())
      .then(r => { this.setState({hipsterIpsum: r.text}) })
  }

  render () {
    return (
      <div>
        <section className='hero is-medium is-primary is-bold'>
          <div className='hero-body container'>
              <h2 className='title'>this site rocks</h2>
              <h3 className='subtitle'>it's actually pretty cool</h3>
          </div>
        </section>
        <section className='section content container'>
          <h2 className='title'>o hey</h2>
          <div dangerouslySetInnerHTML={{__html: this.state.hipsterIpsum}} >
          </div>
        </section>
      </div>
    )
  }
}

Home.route = { component: Home }
