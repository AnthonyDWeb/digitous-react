import React from 'react';


class UserInfo extends React.Component {
    render() {
        return (
            <div>
                {this.props.userInfo}
            </div>
        )
    }
}

export default UserInfo;
