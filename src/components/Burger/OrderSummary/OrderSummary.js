import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object
        .keys(props.ingredients)
        .map(igKey => {
            if (props.ingredients[igKey] > 0) {
                return (
                    <li key={igKey}>
                        <span
                            style={{
                            textTransform: 'capitalize'
                        }}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>
                )
            }
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancel} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.purchaseContinue} btnType='Success'>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;