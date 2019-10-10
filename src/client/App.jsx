import React, { Component } from 'react';
import axios from 'axios';

import Loading from './components/Loading.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    axios.get('/images').then(result => {
      const cats = result.data.map(info => info);

      this.setState({ cats });
    });
  }

  render() {
    const { cats } = this.state;

    return (
      <div>
        {cats.length ? (
          <ul>
            {cats.map(info => (
              <li key={info.d}>{info.id}</li>
            ))}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
