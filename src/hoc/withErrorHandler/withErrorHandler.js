import React, {Component} from 'react'

import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Auxillary/Auxillary'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        //intercepts errors globally
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req;
            })
            
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        //cleans up interceptors when we don't need BurgerBuilder anymore
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.request.eject(this.responseInterceptor)
        }
        
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler