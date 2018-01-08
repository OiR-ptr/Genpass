import React from "react";

import Paper from "material-ui/Paper";

import TagList from "../components/TagList";

export default class GenPass extends React.Component {
    render() {
        const tagItems = [
            { title: "1" },
            { title: "2" }
        ];

        return (
            <div>
                <div style = {{width: "30%", float: "left", backgroundColor: "#00FF00"}}>
                    <TagList tags = {tagItems} />
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