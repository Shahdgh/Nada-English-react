import "./SectionThree.css"
function SectionThree() {
    return (<>
     <div className="about-container">
      <div className="image-container">
        <div className="imagee"></div>
      </div>
      <div className="text-container">
        <div style={{fontFamily: 'Quintessential, cursive',fontSize:"30px",fontWeight:800}} className="about-title">رؤيتنا والهدف</div>
        {/* <p className="about-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          minus exercitationem velit maxime, excepturi quidem?
        </p> */}
        <ul style={{fontSize:"20px",fontWeight:600,marginTop:"30px",listStyle:"none"}} className="">
          <li  >
         التعاون حتى الوصول الى مستوى محترف في اللغة الأنجليزية
          </li>
          <li>
              اعداد الطالبات وتزويدهم بأكبر كم من المفردات والكلمات حتى يصبح  مستواهم عند الوصول للمرحلة الجامعية مستوى ممتاز جدا في اللغة الأنجليزية
          </li>
          {/* <li>
        
          </li> */}
        </ul>
      </div>
    </div>
    </>  );
}

export default SectionThree;