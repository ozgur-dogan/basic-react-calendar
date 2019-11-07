import React from 'react';
import Month from './month';

class Calendar extends React.Component{
    getActivePassiveMonth(map,year,month){
        if(map[year] === undefined || map[year][month] === undefined){
            return undefined;
        }
        return map[year][month];
    }
    render(){
        let activeDays = this.getActivePassiveMonth(this.props.activeDays,this.props.year,this.props.month);
        let passiveDays = this.getActivePassiveMonth(this.props.passiveDays,this.props.year,this.props.month);


        return <Month {...this.props} activeDays={activeDays} passiveDays={passiveDays}/>
    }
}
export default Calendar;