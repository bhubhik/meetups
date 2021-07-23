import classes from './MeetupDetail.module.css';
import Image from 'next/image';

const MeetupDetail = (props) => {
  return (
    <section className={classes.content}>
      <Image src={props.image} alt={props.title} width='500px' height='500px' />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h3>{props.address}</h3>
    </section>
  );
};
export default MeetupDetail;
