import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {

	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map(transaction => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0);

	return (
		<React.Fragment>
			<h4>Your Balance</h4>
			<h1><span>&#8377;</span>{total}</h1>
		</React.Fragment>
	);
}

export default Balance;