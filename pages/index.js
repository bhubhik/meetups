import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

function Homepage(props) {
  const [meetupProps, setMeetupProps] = useState([]);

  useEffect(() => {
    setMeetupProps(props.meetups);
  }, []);

  return (
    <div>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='A page to see meetups and create new meetups'
        />
      </Head>
      <MeetupList meetups={meetupProps} />
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://akCarter:FvuC4uwg8WwcVu8@cluster0.qbqib.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 5,
  };
}

export default Homepage;
