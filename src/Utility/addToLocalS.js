const getDoctorFromLs = () => {
  const storDoctor = localStorage.getItem("doctor");
  if (storDoctor) {
    const doctorData = JSON.parse(storDoctor);
    return doctorData;
  }
  return [];
};

const saveDocToLs = (doc) => {
  const data = JSON.stringify(doc);
  localStorage.setItem("doctor", data);
};

const addDoctorToLd = (id) => {
  const doctor = getDoctorFromLs();
  if (doctor.includes(id)) {
    alert("already book this Doctor");
  } else {
    doctor.push(id);
    saveDocToLs(doctor);
  }
};

const removeDocFromLs = (id) => {
  const storedDoctor = getDoctorFromLs();
  const remainingDoc = storedDoctor.filter(
    (doctorId) => parseInt(doctorId) !== id,
  );
  saveDocToLs(remainingDoc);
};

export { addDoctorToLd, getDoctorFromLs, removeDocFromLs };
