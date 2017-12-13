import React from 'react';
import Trend from 'react-trend';

const data = [0,2,5,5,5,0,3,5,-3,0,-8,12,2,9,0]
const Graph = (props) => (
    <Trend
        smooth
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing="ease-out"
        data={data}
        gradient={['#D84315', '#FBC02D', '#7CB342', '#8BC34A', '#81C784']}
        radius={12.6}
        strokeWidth={2.7}
        strokeLinecap={'round'}/>
);
  
export default Graph;