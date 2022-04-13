import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const up = uploadPhoto();
  const cr = createUser();
  Promise.all([up, cr]).then((values) => { console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`); });
}
