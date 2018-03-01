import React from "react";

import TagList from "../containers/TagList";
import MainContent from "../containers/MainContent";

export default class GenPass extends React.Component {
    render() {
        return (
            <div>
                <div style = {{width: "30%", float: "left"}}>
                    <TagList />
                </div>
                <div style = {{width: "70%", float: "right"}} >
                    <div style = {{float: "left"}} >
                        <MainContent />
                    </div>
                </div>
            </div>
        );
    }
}