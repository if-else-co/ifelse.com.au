import React from 'react';

class Typewriter extends React.Component {
  state = {
    blurbIndex: 0,
    letterCount: 0,
    resetting: false,
  }

  componentDidMount() {
    let timeBetweenCharacters = this.props.timeBetweenCharacters || 50;
    let timeToRead = this.props.timeToRead || 2000;
    this.interval = setInterval(() => {
      this.setState({
        letterCount: this.state.letterCount + 1,
      });
      if (
        this.state.letterCount + 1 > this.props.texts[this.state.blurbIndex % this.props.texts.length].length
        && !this.state.resetting
      ) {
        this.setState({
          resetting: true,
        }, () => {
          this.timeout = setTimeout(() => {
            this.setState({
              letterCount: 0,
              blurbIndex: this.state.blurbIndex + 1,
              resetting: false,
            });
          }, timeToRead);
        })
      }
    }, timeBetweenCharacters);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  render() {
    let text = this.props.texts[this.state.blurbIndex % this.props.texts.length].slice(0, this.state.letterCount);
    return <span dangerouslySetInnerHTML={{ __html: text }}></span>;
  }
}

export default Typewriter;