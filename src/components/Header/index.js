import React from 'react';
import Logo from './Logo';
import CartButton from './CartButton';
import Search from '../Search';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="fixed-top-left">
                    <Logo />
                </div>
                <div className="fixed-top-right">
                    <CartButton />
                </div>
                <Search />
            </div>
        );
    }
}