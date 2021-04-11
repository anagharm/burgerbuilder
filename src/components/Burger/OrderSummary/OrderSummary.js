import React from 'react';
import Auxs from '../../../hoc/Auxs';
const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
                                    .map(igkey =>{
                                        return (<li key={igkey}>
                                                    <span style={{textTransform: 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}
                                                </li>)
                                    })
    return( 
            <Auxs>
                <h3>Your Order</h3>
                <p>A delcious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout</p>
            </Auxs>
        )
};

export default orderSummary;