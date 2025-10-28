import toast from 'react-hot-toast';

// add to faourite related
export const getAppointment = () => {
  const appointment = localStorage.getItem('appointment');
  if (appointment) {
    return JSON.parse(appointment);
  } else {
    return [];
  }
};

export const addAppointment = doctor => {
  const appointment = getAppointment();
  const isExists = appointment.find(a => a.id === doctor.id);
  if (isExists) {
    return toast.error('doctor already added');
  }
  appointment.push(doctor);
  toast.success('doctor added successfully');
  localStorage.setItem('appointment', JSON.stringify(appointment));
};

 export const removeAppointment = id => {
  const appointment = getAppointment();
  const remainingAppointment = appointment.filter(doctor => doctor.id !== id);
  localStorage.setItem('appointment', JSON.stringify(remainingAppointment));
  toast.success('doctor removed successfully!');
};