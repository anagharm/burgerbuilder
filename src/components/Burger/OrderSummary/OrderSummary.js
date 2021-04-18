import React , { Component } from 'react';
import Auxs from '../../../hoc/Auxs/Auxs';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
                                    .map(igkey =>{
                                        return (<li key={igkey}>
                                                    <span style={{textTransform: 'capitalize'}}>{igkey}</span> : {this.props.ingredients[igkey]}
                                                </li>)
                                    })    
        return(
            <Auxs>
                <h3>Your Order</h3>
                <p>A delcious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price.toFixed(2) }</strong></p>
                <p>Continue to Checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxs>
        )
    }
    
};

export default OrderSummary;