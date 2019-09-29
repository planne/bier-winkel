import React from 'react';
import Logo from './Logo';
import PurchaseButton from './PurchaseButton';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Logo/>
                <div className="fixed-top-right">
                    <PurchaseButton/>
                </div>
            </div>
        );
    }
}