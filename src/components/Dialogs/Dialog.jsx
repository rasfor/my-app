import module from './Dialog.module.css'

const Dialog = () => {
  return (
    <div className={module.dialogs}>
      <div className={module.contacts}>
        <div className={module.contact + ' ' + module.active}>Zulya</div>
        <div className={module.contact}>Timur</div>
        <div className={module.contact}>Bakha</div>
        <div className={module.contact}>Gulshatik</div>
      </div>
      <div className={module.messages}>
        <div className={module.message}>Hello</div>
        <div className={module.message}>What's up?</div>
        <div className={module.message}>To be honest, I love you</div>
      </div>
    </div>

  );
}

export default Dialog;