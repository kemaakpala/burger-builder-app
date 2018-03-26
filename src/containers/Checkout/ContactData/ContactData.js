import React, {Component} from 'react'
import axios from '../../../axios-orders'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) =>{
        event.preventDefault()
       // console.log('[ContactData.js]',this.props.ingredients)
        
        //alert('You can Continue!')
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // production app you'll need to recalculate the price on the server,
            customer: {
                name: 'Patrick Akpala',
                address: {
                    street: 'TestStreet 1',
                    zipCode: 41331,
                    country: 'UK'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        // [nodename].json for firebase only
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false})
            this.props.history.push('/')
        })
        .catch(
            this.setState({loading: false})
        ) 
    }

    render (){
        let form = (
            <form>
                <input className="Input" type="text" name="name" placeholder="Your Name"/>
                <input className="Input"  type="email" name="email" placeholder="Your Email"/>
                <input className="Input"  type="street" name="street" placeholder="Street"/>
                <input className="Input"  type="postal" name="postal" placeholder="Your PostalCode"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData