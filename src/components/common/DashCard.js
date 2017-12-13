import React, {Component} from 'react';
import Graph from './Graph';

export default class DashCard extends Component {
	render(){
		const {user=''} = this.props;
		return (
			<div style={{width: '70vw', flexDirection: 'column', display: 'flex'}}>
				<div className="card" style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
				 <div style={{padding: 15, background: '#1976D2', color: 'white'}}>
				 	<h3>{user.fullname}</h3>
				 	<p>{user.division} | {user.department}</p>
				 </div>
				 <p style={{margin: '15px 0 0 15px', fontSize: '1.5rem', fontWeight: 700}}>Sentiment Trend</p>
				 <Graph /> 
				</div>
			</div>
		)
	}
}