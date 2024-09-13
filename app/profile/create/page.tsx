import { SubmitButton } from '@/components/form/Button';
import FormInput from '@/components/form/FormInput';

const createProfileAction = async (formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName') as string;
  console.info('firstName', firstName);
};

function CreateProfilePage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">new user</h1>
      <div className="max-w-lg rounded-md border p-8">
        <form action={createProfileAction}>
          <div className="mb-2">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="username" label="Username" />
          </div>
          <SubmitButton text="Create Profile" className="mt-8" />
        </form>
      </div>
    </section>
  );
}

export default CreateProfilePage;
