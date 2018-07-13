import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Action from './action';
import React,{Component} from 'react'

function mapStateToProps(state){
    return {...state}
}
function mapDispatchtoProps(dispatch){
    console.log('000000000000',bindActionCreators(Action,dispatch))
    return bindActionCreators(Action,dispatch)
}

export default connect(mapStateToProps,mapDispatchtoProps)