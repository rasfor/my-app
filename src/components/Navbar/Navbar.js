import module from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={module.nav}>
      <div >
        <a className={module.item} href='/profile'>Profile</a>
      </div>
      <div>
        <a className={module.item} href='/news' >News</a>
      </div>
       <div>
        <a className={module.item} href='/dialogs' >Messages</a>
      </div>
      <div>
        <a className={`${module.item} ${module.active}`} >Settings</a>
      </div>
      <div>
        <a className={module.item} >Music</a>
      </div>
    </div>
  );
}

export default Navbar;