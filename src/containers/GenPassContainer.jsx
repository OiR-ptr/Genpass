import GenPass from "../components/GenPass";
import {firebaseApp} from "../firebase/firebaseinstance";
import { connect } from "react-redux";
import {loadTagsEvent} from "../actions/Actions";

function mapStateToProps(state) {
    return {
        isLoaded: state.tag.isLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadTags() {
            var tagsRef = firebaseApp.database().ref("tags");

            tagsRef.off();

            tagsRef.on("value", (dataSnapShot) => {
                dispatch(loadTagsEvent(dataSnapShot.val()));
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenPass);