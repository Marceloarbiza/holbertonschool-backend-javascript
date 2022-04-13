import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const si = signUpUser(firstName, lastName);
  const up = uploadPhoto(fileName);

  return Promise.all([si, up]);
}
