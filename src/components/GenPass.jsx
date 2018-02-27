import React from "react";

import TagList from "../containers/TagList";
import MainContent from "../containers/MainContent";

export default class GenPass extends React.Component {
    render() {
        return (
            <div>
                <div style = {{width: "30%", float: "left", backgroundColor: "#00FF00"}}>
                    <TagList />
                </div>
                <div style = {{width: "70%", float: "right", backgroundColor: "#FF0000"}} >
                    <div style = {{float: "left"}} >
                        <MainContent />
                    </div>
                </div>
            </div>
        );
    }
}