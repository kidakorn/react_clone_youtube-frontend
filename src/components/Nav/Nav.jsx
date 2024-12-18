import "./NavStyle.css"

function Nav() {
  return (
    <section id='nav'>
      <div className='-letf'>
        <div className='-ham'>
          <img src="https://fakeimg.pl/24x24" alt="" />
        </div>
        <div className='-logo'>
          <img src="https://fakeimg.pl/97x20" alt="" />
        </div>
      </div>
      <div className='-center'>
        <div className="-search">
          <div className="-search-box">
            <input type="text" className="-search-input" />
          </div>
          <div className="-btn">Q</div>
        </div>
        <div className="-voice"></div>
      </div>
      <div className='-right'>
        <div className="-right-item">x</div>
        <div className="-right-item">x</div>
        <div className="-right-item">x</div>
      </div>
    </section>
  )
}

export default Nav