import React from "react";

import TagList from "../components/TagList";

export default class GenPass extends React.Component {
    render() {
        const tagItems = [
            { tagID: 1, title: "1" },
            { tagID: 2, title: "2" },
            { tagID: 3, title: "3" },
            { tagID: 4, title: "4" },
            { tagID: 5, title: "5" },
            { tagID: 6, title: "6" },
            { tagID: 7, title: "7" },
            { tagID: 8, title: "8" },
            { tagID: 9, title: "9" },
            { tagID: 10, title: "10" },
            { tagID: 11, title: "11" },
            { tagID: 12, title: "12" }
        ];

        return (
            <div>
                <div style = {{width: "30%", float: "left", backgroundColor: "#00FF00"}}>
                    <TagList key="0" tags = {tagItems} />
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