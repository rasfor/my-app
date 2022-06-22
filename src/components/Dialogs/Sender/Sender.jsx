import module from './Sender.module.css';


const Sender = (props) => {

  return (
    <div className={module.sender} >
      <div>
        <img src={props.ava} />
      </div>
      {props.messageText}
    </div>
  );
}

export default Sender;