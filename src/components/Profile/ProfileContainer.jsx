import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserThunkCreator} from "../../Redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams,} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId ;
    if (!userId) {
      userId = 2
    }
    this.props.getUserThunkCreator(userId)
  }

  render() {
    if (!this.props.isAuth) return <Navigate to='/login'/>
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = (state) =>( {

    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
        <Component
            {...props}
            router={{ location, navigate, params }}
        />
    );
  }

  return ComponentWithRouterProp;
}

let withUrlDataComponentContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps,{getUserThunkCreator})(withUrlDataComponentContainer);