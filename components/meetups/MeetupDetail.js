
import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) =>{
  return(
    <section className={classes.content}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h3>{props.address}</h3>
    </section>
  )
}
  export default MeetupDetail;