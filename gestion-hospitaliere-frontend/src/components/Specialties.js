import React from 'react';

const Specialties = () => {
  const specialties = [
    "Chirurgie orthopédique", "Dermatologie", "Gastro-entérologie", 
    "Neurologie", "Oncologie", "Ophtalmologie", "ORL", 
    "Psychiatrie", "Pédiatrie", "Radiologie", "Radiothérapie"
  ];

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-primary">🩺 Spécialités Médicales</h2>
      <div className="d-flex flex-wrap gap-2 mt-3">
        {specialties.map((specialty, index) => (
          <span key={index} className="badge bg-secondary p-2">{specialty}</span>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
