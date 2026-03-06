const getDoctorFromLs = () => {
  const storDoctor = localStorage.getItem("doctor");
  if (storDoctor) {
    const doctorData = JSON.parse(storDoctor);
    return doctorData;
  }
  return [];
};

const saveDoctorToLS = (doc) => {
  const docStringify = JSON.stringify(doc);
  localStorage.setItem("doctor", docStringify);
};

const addDoctorToLd = (id) => {
  const doctor = getDoctorFromLs();
  if (doctor.includes(id)) {
    alert("already book this Doctor");
  } else {
    saveDoctorToLS(doctor.push(id));
  }
};

export { addDoctorToLd };
