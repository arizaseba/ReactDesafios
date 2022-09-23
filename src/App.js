import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './components/app/Provider';
import Router from './components/app/Router';

function App() {

  return (
    <>
      <Provider>
        <Router />
      </Provider>
    </>
  );
}

export default App;