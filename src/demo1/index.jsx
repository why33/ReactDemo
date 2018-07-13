import React,{Component} from 'react'
import connect from './connect';
import { Tabs } from 'antd';
import styled from 'styled-components';


const TabPane=Tabs.TabPane;
const Root=styled.div`
    width:40vw;
    height:50vh;
    margin:10vh auto 0 auto;
    border:1px solid lightBlue;

    ul{
        height:10%;
        padding:0;
        margin:0;
        list-style:none;
        border-bottom:1px solid lightblue;
        box-size:border-box;
        padding-left:100px;
        li{
            float:left;
            height:100%;
            font-size:14px;
            line-height:7vh;
            margin:0 10px;
            cursor:pointer;
        }
        
    }
    .ant-tabs{
        height:90%;
    }
`


@connect
export default class Demo1 extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentWillMount(){
        this.props.init(this.props.dataAll[0]);
    }
    change=(val)=>{
        this.props.change(this.props.dataAll[val-1],this.props.data);
        this.props.checked(this.props.dataAll[val-1]);
       
    }
    click=(e)=>{
        this.props.checked(this.props.dataAll[e.target.id-1]);
    }
    render(){
        const act={
            color:'red',
            borderBottom:"1px solid blue"
        }
        const noact={
            color:"black",
            border:"none"
        }
        return (
            <Root> 
                <ul>
                    {
                        this.props.data.map(item=>{
                           return React.cloneElement(
                                <li/>,
                                {key:item.id,id:item.id,onClick:this.click,style:((this.props.check===item)?act:noact)},
                                item.cont
                            )
                        })
                    }
                </ul>
                <Tabs tabPosition='left' size='large' onChange={this.change} activeKey={String(this.props.check.id)}>
                    {
                        this.props.dataAll.map((item)=>(
                            <TabPane tab={item.cont} key={item.id}>{item.cont}</TabPane>
                        ))
                    }
                </Tabs>
            </Root>
        )
    }
}