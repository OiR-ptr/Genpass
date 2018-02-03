import React from "react";

import TagList from "../components/TagList";

export default class GenPass extends React.Component {
    render() {
        return (
            <div>
                <div style = {{width: "30%", float: "left", backgroundColor: "#00FF00"}}>
                    <TagList key="0" tags = {this.props.tags} />
                </div>
                <div style = {{width: "70%", float: "right", backgroundColor: "#FF0000"}} >
                    <div style = {{float: "left"}} >
                        <img src="./resource/img/kraken.png" width = "auto" height = "auto" />
                    </div>
                </div>
            </div>
        );
    }
}