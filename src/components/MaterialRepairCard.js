import React from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class MaterialCard extends React.Component {
    

render() {
    return (
    <Card >
        <CardHeader
        title={this.props.repairData.header}
        textStyle={{textAlign: "center", alignContent: "center", width: "100%"}}
        />
        <CardHeader
        title= {this.props.repairData.price}
        textStyle={{textAlign: "center", alignContent: "center", width: "100%"}}
        />
        <CardMedia style={{width: "100px", alignSelf: "center", margin: "auto"}}><img src={this.props.repairData.logo} alt="" style={{alignSelf: "center"}}/></CardMedia>
        <div style={{display: "inline-block", textAlign: "right", width: "100%"}}>
        <CardActions>
        <a className="link" href={this.props.repairData.url} style={{marginRignt: "10px"}}>
        <FlatButton label="Device Page" style={{color: "red"}}/>
        </a>
        </CardActions>
        </div>
    </Card>
);
}
}
export default MaterialCard;