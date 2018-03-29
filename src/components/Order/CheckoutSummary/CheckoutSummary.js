import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    //console.log('[checkoutSummary.js]', props)
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div styles={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                btnType="Danger"
                clicked={props.onCheckOutCancelled}
            >CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.onCheckOutContinued}
            >CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary