import module from './Recipient.module.css';


const Recipient = (props) => {

  return (
    <div className={module.recipient} >
      <div>{props.messageText}</div>
      <div>
        <img src={props.ava} />
      </div>
    </div>
  );
}

export default Recipient;