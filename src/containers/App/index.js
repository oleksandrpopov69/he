/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import AppScreen from '../../screens/App';
import actions from '../../redux/actions';
import {selectJokes, selectLoading} from '../../redux/selectors/jokes';

class AppContainer extends React.Component<> {
  getJokes = () => {
    const {getJokes} = this.props;
    getJokes();
  };

  navigateTo = (routeName: string, params: ?Object) => {
    const {navigation} = this.props;
    navigation.navigate(routeName, {...params});
  };

  render() {
    const {loading, jokes} = this.props;
    return (
        <AppScreen
            jokes={jokes}
            navigateTo={this.navigateTo}
            getJokes={this.getJokes}
            loading={loading}
        />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  jokes: selectJokes,
  loading: selectLoading,
});

const mapDispatchToProps = {
  getJokes: actions.getJokes.request,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppContainer);
