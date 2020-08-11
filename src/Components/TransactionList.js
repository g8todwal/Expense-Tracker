import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);

	return (
		<React.Fragment>
      <h3>History</h3>
      <ul className="list">
      	{transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id}/>
        ))}
      </ul>
    </React.Fragment>
	);
}

export default TransactionList;