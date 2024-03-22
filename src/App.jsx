import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';
import profile from './assets/profile.png'
import axios from 'axios';

const endpoint = 'https://sheetdb.io/api/v1/xy9jp2v8n33zt'

function App() {
  const [hide, setHide] = useState(false)
  const [data, setData] = useState([])
  
  const callApi = async () => {
    const d = await axios.get(endpoint).then((response) => {
      console.log('response', response)
      const data = response.data
      setData(data)
    })
    console.log('success', d)
  }

  useEffect(() =>{
    callApi()
  },[])

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image={profile}/>

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
          <p>ผมเป็นคนที่ชอบลองผิดลองถูก ชอบค้นหาและเรียนรู้สิ่งใหม่ๆ พร้อมที่จะพัฒนาตัวเองได้เสมอ สามารถทำงานเป็นทีมได้ เวลาที่คิดจะทำอะไรแล้วจะทำจนกว่าจะสำเร็จ ถ้าไม่พอใจก็จะลงมือทำใหม่จนกว่าจะออกมาดีที่สุด</p>
        </Title>

        <Title title="Work Experience">
        <h3>สร้าง AI ทำนายความเสี่ยงของโรคหัวใจ</h3>
          <p>• ทำการนำค่าต่างๆของผู้ป่วยที่เป็นหรือไม่เป็นโรคหัวใจมาเทรน AI โดยใช้โครงข่ายประสาทเทียม Decition Tree</p>
          <p>• สร้างหน้าเว็บไซต์เพื่อให้ผู้ใช้งานกรอกค่าต่างๆ ตัวอย่างเช่น    อัตราการเต้นหัวใจ, ความดันโลหิตต่ำ-สูง เป็นต้น จากนั้นกดปุ่มตรวจสอบ จากนั้น AI จะทำการทำนายว่ามีโอกาศที่จะเป็นโรคหัวใจหรือไม่</p>
          <h3>โปรเจกต์เกม Guardians of Realms</h3>
          <p>• สร้างเกม Guardians of Realms ขึ้นมา เป็นเกมแนว A-RPG ตะลุยผ่านด่านไปเรื่อยๆ มีระบบต่างๆ เช่น ร้านค้าซื้อตัวละครกับอาวุธ และเชื่อมต่อกับ Database Phpmyadmin โดยจะบันทึกข้อมูลต่างๆของผู้เล่น และจะมีโหมด Score เพื่อให้ผู้เล่นได้เก็บ Score แสดงอันดับใน Ranking</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS /JS</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>Vue.js</p>
          <p>Git</p>
        </Title>

        {/* <div>
        เพื่อนในชั้นเรียน<br />
        {data.map((record) => <div key={record.code}>{record.code}{record.name}</div>)}
      </div> */}

      </div>
    </main>
  )
}

export default App
