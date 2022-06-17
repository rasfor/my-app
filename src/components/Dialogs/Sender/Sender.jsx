import module from './Sender.module.css';


const Sender = (props) => {

  return (
    <div className={module.sender} >
      <div>
        <img src={props.ava} />
      </div>
      <text>{props.messageText}</text>
    </div>
  );
}

export default Sender;