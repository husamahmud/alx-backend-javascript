import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const { body } = await uploadPhoto().catch(() => {
    console.log('Signup system offline');
  });
  const { firstName, lastName } = await createUser().catch(() => {
    console.log('Signup system offline');
  });
  console.log(`${body} ${firstName} ${lastName}`);
  // return body + firstName + lastName;
}
