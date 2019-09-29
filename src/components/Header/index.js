import React from 'react';
import Logo from './Logo';
import PurchaseButton from './PurchaseButton';
import Search from '../Search';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="fixed-top-left">
                    <Logo />
                </div>
                <div className="fixed-top-right">
                    <PurchaseButton />
                </div>
                <Search />
            </div>
        );
    }
}