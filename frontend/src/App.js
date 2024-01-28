import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDataproduct } from './redux/ProductSlide';
function App() {
  const dispatch = useDispatch();

  const productData=useSelector((state)=>state.product);
  useEffect(() => {
    (async () => {
      const resData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);
      const data = await resData.json();
      console.log(data);
      dispatch(setDataproduct(data));
    })();
  }, [dispatch]);  // Include dispatch in the dependency array
  
  // console.log(productData);






  return (
    <div className='bg-white-500'>
   
<Header />
<main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
<Outlet />
</main>

    </div>
  );
}

export default App;
