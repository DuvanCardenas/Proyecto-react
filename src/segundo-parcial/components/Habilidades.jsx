import React from 'react';

const Habilidades = () => {
  return (
    <section id="habilidades" className="container-fluid py-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4 border-bottom pb-2">Habilidades</h2>
        </div>
        <div className="col-12 col-md-6 mx-auto">
          <div className="mb-3">
            <span className="fw-bold d-flex justify-content-between">React <span>90%</span></span>
            <div className="progress">
              <div className="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="mb-3">
            <span className="fw-bold d-flex justify-content-between">Bootstrap <span>85%</span></span>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="mb-3">
            <span className="fw-bold d-flex justify-content-between">Git / GitHub <span>80%</span></span>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;