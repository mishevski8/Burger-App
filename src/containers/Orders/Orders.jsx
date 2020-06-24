import React, {Component} from 'react';
import Order from '../../components/Burger/Order/Order/Order';
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }


    componentDidMount() {
        axios.get('/orders.json')
            .then((response) => {
                console.log(response.data);
                const fetchedOrders = Object.keys(response.data)
                    .map((key) => {
                        return {
                            ...response.data[key],
                            id: key
                        }
                    })
                this.setState({loading: false, orders: fetchedOrders})

            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map( order => (
                    <Order test={order}
                           price={order.price}
                           ingredients={order.ingredients}
                           key={order.id}/>
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
