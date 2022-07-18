import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserStatus, getUserThunkCreator, updateStatus} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId ;
    if (!userId) {
      userId = 24827
    }
    this.props.getUserThunkCreator(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
  }
}

const mapStateToProps = (state) =>( {

    profile: state.profilePage.profile,
    status: state.profilePage.status
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

export default compose(
    connect(mapStateToProps,{getUserThunkCreator, getUserStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)