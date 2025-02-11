import React, { useState } from 'react';

const Booking = () => {
  const doctors = ["Dr. Driss Loudi", "Dr. Asmaa Lâalou", "Dr. Anas Hamoudane", "Dr. Ismail Amrahar", "Dr. Hajar El Malki"];
  const [selectedDoctor, setSelectedDoctor] = useState("");

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-primary">Réserver un Rendez-vous</h2>
      <div className="card p-4 shadow-lg border-0">
        <select className="form-select" onChange={(e) => setSelectedDoctor(e.target.value)}>
          <option value="">🔽 Choisissez un médecin</option>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor}>{doctor}</option>
          ))}
        </select>
        <button className="btn btn-success mt-3 w-100 fw-bold"> Confirmer la réservation</button>
      </div>
    </div>
  );
};

export default Booking;
