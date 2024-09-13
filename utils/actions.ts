'use server';

import { profileSchema } from './schemas';

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validationFields = profileSchema.parse(rawData);
    console.info('validationFields', validationFields);
    return { message: 'profile created' };
  } catch (error) {
    console.error('エラーだよ', error);
    return { message: 'there was an error' };
  }
};
