import React from "react";
import { Link } from "react-router-dom";

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
  }

  toggleMenu = () => {
    this.setState(
      {
        isShown: !this.state.isShown
      },
      () => {
        document.addEventListener("click", this.handleClickOutside);
      }
    );
  };

  handleClickOutside = () => {
    this.setState(
      {
        isShown: false
      },
      () => {
        document.removeEventListener("click", this.handleClickOutside);
      }
    );
  };

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  render() {
    return (
      <div className="user-menu">
        <div className="user-menu__header" onClick={this.toggleMenu}>
          <i className="user-menu__user far fa-user-circle"></i>
          {this.state.isShown ? (
            <i className="user_menu__caret fas fa-caret-up"></i>
          ) : (
            <i className="user_menu__caret fas fa-caret-down"></i>
          )}
        </div>
        {this.state.isShown && (
          <div className="user-menu__list">
            <div className="user-menu__item" onClick={this.toggleMenu}>
              <Link to="/profile" className="user-menu__link">
                <i className="fas fa-cogs">
                  <span className="user-menu__text">Settings</span>
                </i>
              </Link>
            </div>
            <div
              className="user-menu__item"
              onClick={this.props.removeAuthUser}
            >
              <i className="fas fa-sign-out-alt">
                <span className="user-menu__text">Log out</span>
              </i>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserMenu;
