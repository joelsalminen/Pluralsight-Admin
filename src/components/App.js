import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component() {
	render(){
		return(
			<div className="container-fluid">
				<p className="app">Header here...</p>
					{this.props.childern}
				</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;