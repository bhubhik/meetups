import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredData),
      headers: {
        'content-type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
    router.push('/');
  };
  return (
    <Fragment>
      <Head>
        <title>Make new meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
