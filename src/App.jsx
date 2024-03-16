import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment'

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/react.svg"/>

        <Title title="Warat Ratsaminopsawet (Toey)">
          <h3>Frontend</h3>
        </Title>

        <Title title="Contact">
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2001/03/27").format("D MMM YYYY")}</p>
          <p style={{display: hide ? 'none': 'block'}}>
            Tel : +66934145198
          </p>
          <button onClick={() => setHide(!hide)}>{hide ? 'Show': 'Hide'}</button>
          <p>Email : s64122202010@ssru.ac.th</p>
          <p>www.s64122202010@ssru.com</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quia dignissimos corporis sequi aspernatur unde non ullam voluptas, eveniet dicta ipsum? Error rem dolorem sit facilis molestiae at sequi commodi!</p>
        </Title>

        <Title title="Work Experience">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid debitis nulla tempora velit eligendi necessitatibus eaque, corrupti ipsum sed vitae laboriosam? Quaerat ea qui asperiores veritatis perferendis quasi impedit!</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS /JS</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>Vue.js</p>
          <p>Git</p>
        </Title>

      </div>
    </main>
  )
}

export default App