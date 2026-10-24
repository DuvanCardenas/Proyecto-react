import Navegacion from './proyecto/Navegacion';
import Titulo from './proyecto/Titulo';
import Footer from './proyecto/Footer';

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <Navegacion />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <Titulo />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;