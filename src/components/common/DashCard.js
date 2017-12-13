import React from 'react';
import Graph from './Graph';

export default function DashCard(props){
	return (
		<div style={{width: '80vw', flexDirection: 'row', display: 'flex'}}>
			<div className="card" style={{width: '30%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			 <h1>John Doe</h1>
			 <p>Manger</p>
			</div>
			<Graph /> 
		</div>
	)
}