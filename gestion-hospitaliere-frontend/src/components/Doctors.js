import React from 'react';
import doctor1 from '../assets/doctors/doctor1.jpg'; // Vérifie que l’image existe
import doctor2 from '../assets/doctors/doctor2.jpg';
import doctor3 from '../assets/doctors/doctor3.jpg';
import doctor4 from '../assets/doctors/doctor4.jpg';
import doctor5 from '../assets/doctors/doctor5.jpg';

const Doctors = () => {
  const doctors = [
    { name: "Dr. Driss Loudi", specialty: "Chirurgie orthopédique", image: doctor1 },
    { name: "Dr. Asmaa Lâalou", specialty: "Dermatologie", image: doctor2 },
    { name: "Dr. Anas Hamoudane", specialty: "Neurologie", image: doctor3 },
    { name: "Dr. Ismail Amrahar", specialty: "ORL", image: doctor4 },
    { name: "Dr. Hajar El Malki", specialty: "Pédiatrie", image: doctor5 },
  ];

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-primary"> Nos Médecins</h2>
      <div className="row mt-3">
        {doctors.map((doctor, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm border-0 p-3 text-center">
              <img src={doctor.image} className="rounded-circle mb-2" alt={doctor.name} width="80" height="80" />
              <h5 className="fw-bold">{doctor.name}</h5>
              <p className="text-muted">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
