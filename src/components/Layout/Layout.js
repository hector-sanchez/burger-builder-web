import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => {
    return (
        <Aux>
            <div>
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main>{props.children}</main>
            </div>
        </Aux>
    );
};

export default layout;