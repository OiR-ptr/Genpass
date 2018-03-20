import {connect} from "react-redux";
import PrivateRoute from "../components/PrivateRoute";

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);