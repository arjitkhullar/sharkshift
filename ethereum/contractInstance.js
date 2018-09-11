import web3 from './web3';
import Example from './build/Example.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Example.interface), address);
};
