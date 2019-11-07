import React from 'react';
import View from './view.js';
class Day extends React.Component{
    render(){
        const {color, number} = this.props;
        if(color === undefined && number === undefined){
            return "no color or number props";
        }else{
            return <View {...this.props}/>
        }
    }
}
export default Day;