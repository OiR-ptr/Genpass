import React from "react";

import TagList from "../components/TagList";

export default class GenPass extends React.Component {
    render() {
        const tagItems = [
            { title: "1" },
            { title: "2" },
            { title: "3" },
            { title: "4" },
            { title: "5" },
            { title: "6" },
            { title: "7" },
            { title: "8" },
            { title: "9" },
            { title: "10" },
            { title: "11" },
            { title: "12" }
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