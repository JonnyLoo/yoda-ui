import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Button from './button';
import * as QuotesActions from '../actions/quotes-actions';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRandomQuote();
  }

  render() {
    if(this.props.isFetching) {
      return <div className='loading'>{'Loading...'}</div>;
    }

    return (
      <div className='quote-otd'>
        <div className='quote'>
          { !this.props.error && this.props.randomQuote.yodish ? this.props.randomQuote.yodish : this.props.error }
        </div>
        <Button onClick={this.props.getRandomQuote} text={'Refresh'} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    allQuotes: state.quotes.allQuotes,
    randomQuote: state.quotes.randomQuote,
    isFetching: state.quotes.isFetching,
    error: state.quotes.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      QuotesActions
    ),
    dispatch
  );
};

HomePage.propTypes = {
  allQuotes: PropTypes.array,
  randomQuote: PropTypes.object,
  getAllQuotes: PropTypes.func,
  getRandomQuote: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);