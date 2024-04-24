import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [uploadRes, createRes] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    const { body } = uploadRes;
    const { firstName, lastName } = createRes;
    console.log(`${body} ${firstName} ${lastName}`);
  } catch (e) {
    console.log('Signup system offline');
  }
}
