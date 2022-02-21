import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Block from './components/Block';
import BlockHeader from './components/BlockHeader';
import SwapButton from './components/SwapButton';
import { getCurrencies } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  const currencies = useSelector((state) => state.currencies)

  useEffect(() => {
    dispatch(getCurrencies())
  }, [dispatch])


  if (!currencies) {
    return (<div></div>)
  }
  return (
    <div className="App">
      <div className='Section'>
        <BlockHeader header='У меня есть' />
        <Block side="left" />
      </div>
      <SwapButton />
      <div className='Section'>
        <BlockHeader header='Я получу' />
        <Block side="right" />
      </div>
    </div>
  );
}

export default App;
