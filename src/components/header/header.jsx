import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/app';
import { ReactComponent as Logo } from '../../data/crown.svg.svg';
import { connect } from 'react-redux';
import CardIcon from '../card-icon/card-icon';
import CardDropdown from '../card-dropdown/card-dropdown';

const Header = ({ currentUser, ishidded }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo></Logo>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className='option' to='/auth'>SIGN IN</Link>
            }
            {
                currentUser ? <CardIcon /> : ''
            }
        </div>
        {
            ishidded ? '' : <CardDropdown />
        }
    </div>
)

const mapStateToProps = ({ user, card }) => ({
    currentUser: user.currentUser,
    ishidded: card.hidden
})

export default connect(mapStateToProps)(Header);