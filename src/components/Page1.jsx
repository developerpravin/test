import React from 'react';
import "../style.css";
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Page2 } from './Page2';

export const Page1 = () => {

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/Page2");
    }
  return (
    <div className='main '>
    <img className="nav headbar " src="./images/nav.png" alt="" />
    <img className='img1 headbar' src="./images/1.png" alt="" />
    <img className='img2 headbar' src="./images/line1.png" alt="" />
    <img  className="img3 headbar" src="./images/pace.png" alt="" />
    <img className='img4 headbar' src="./images/getinfo.png" alt="" />
  <div className='section2'>
    <img src="./images/Group.png" alt="" />
    <img className='img5' src="./images/kick.png" alt="" />
   <img className='img6' src="./images/iit.png" alt="" />
   <img className='img7' src="./images/Powered.png" alt="" />
   <img  className="img8" src="./images/pace.png" alt="" />
   <img  className="img9" src="./images/admision.png" alt="" />
   <img  className="img10" src="./images/enquire.png" alt="" />
   <img className='img11' src="./images/profile.png" alt="" />
   <img className='img12' src="./images/data.png" alt="" />
   <img className='img13' src="./images/dglogo.png" alt="" />
   <img className='img14' src="./images/data2.png" alt="" />
   <img className='img15' src="./images/sideangle.png" alt="" />
   <img className='img16' src="./images/head.png" alt="" />
   <img className='img17' src="./images/title.png" alt="" />
   <img className='img18' src="./images/input1.png" alt="" />
   <img className='img19' src="./images/input2.png" alt="" />
   <img className='img20' src="./images/input3.png" alt="" />
   <img className='img21' src="./images/input4.png" alt="" />
   <img className='img22' src="./images/input5.png" alt="" />
   <img className='img23' src="./images/input6.png" alt="" />
   <img className='img24' src="./images/input7.png" alt="" />
   <img className='img25' src="./images/input8.png" alt="" />
   <img className='img26' src="./images/nowbtn.png" alt="" />
   <img className='img27' src="./images/sidebtn.png" alt="" />
   <img className='img28' src="./images/detailbox.png" alt="" />
   <img className='img29' src="./images/dropdwn.png" alt="" />
   <h4 className='our'>OUR</h4>
   <img className='img30' src="./images/heading.png" alt="" />
   <img className='img31' src="./images/school.png" alt="" />
   <img className='img32' src="./images/lineA.png" alt="" />
   <img className='img33' src="./images/exams.png" alt="" />
   <img className='img34' src="./images/lineA.png" alt="" />
   <img className='img35' src="./images/study.png" alt="" />
   <img className='img36' src="./images/lineA.png" alt="" />
   <img className='img37' src="./images/medical.png" alt="" />
   <img className='img38' src="./images/lineA.png" alt="" />
   <img className='img39' src="./images/grplogo.png" alt="" />
   <img className='img40' src="./images/text.png" alt="" />
   <img className='img41' src="./images/eqrbutton.png" alt="" />
  </div>
  <div className='section3' >
    <img className='img42' src="./images/Rectanglemini.png" alt="" />
    <img className='img43' src="./images/company.png" alt="" />
    <img className='img44' src="./images/about.png" alt="" />
    <img className='img45' src="./images/Rectanglemini2.png" alt="" />
    <img className='img46' src="./images/family.png" alt="" />
    <img className='img47' src="./images/familydtl.png" alt="" />
    <img className='img48' src="./images/program.png" alt="" />
    <img className='img49' src="./images/Rectangle3.png" alt="" />
    <img className='img50' src="./images/bluhead.png" alt="" />
    <h4 className='text1'>ISC + NEET</h4>
    <img className='img51' src="./images/Rectangle4.png" alt="" />
    <img className='img52' src="./images/bluhead.png" alt="" />
    <h4 className='text2'>ISC + IIT JEE</h4>
    <h6 className='neetText'>NEET is a national-level examination conducted by NTA. The candidates who want to get admission to medical courses must qualify for the entrance test. NEET questions only come from Physics, Chemistry, Zoology, and Botany.

<span className='gap'> Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and NEET (and other Medical exams)  within the comfort of their school premises. Our coursework is specially created for the ISC curriculum to create a synergy between Board and NEET exam preparations during school hours.</span>
</h6>
<img className='btn' src="./images/eqrbutton2.png" alt="" />
    <h6 className='iitText'>IITs are one of the most prestigious colleges in the country. All Engineering aspirants wish to get into one of the IITs, but getting into such an institution is a challenging task. A lot of hard work andhard and dedication is required to ace JEE Main and JEE Advanced to get into IIT or some other top educational institution in the country.

<span className='gap1'> Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and IITJEE ( and other engineering exams) within the comfort of their school premises. Our coursework is specially created for the ISC curriculum to create a synergy between Board and NEET exam preparations during school hours</span>

</h6>
<img className='btn1' src="./images/eqrbutton2.png" alt="" />
<img className='bgimg' src="./images/bgimage.png" alt="" />
<img className='crd' src="./images/card.png" alt="" />
<img className='sch' src="./images/In School.png" alt="" />
<h6 className='sch1'>Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes. </h6>
<img className='btn3' src="./images/eqrbutton2.png" alt="" />
<img className='std' src="./images/student.png" alt="" />
<img className='schbutton' src="./images/schoolbtn.png" alt="" />
<img className='rvgbtn' src="./images/Revision.png" alt="" />
<img className='mockbtn' src="./images/Mock.png" alt="" />
<img className='feedbtn' src="./images/Feedback.png" alt="" />
<img className='studybtn' src="./images/studybtn.png" alt="" />
<img className='cslgbtn' src="./images/counselling.png" alt="" />
<img className='creerbtn' src="./images/career.png" alt="" />
<h6 className='scs'>SUCCESS</h6>
<img className='strs' src="./images/STORIES.png" alt="" />
<img className='btn4' src="./images/eqrbutton2.png" alt="" />
<img className='prof1' src="./images/profile1.png" alt="" />
<img className='prof2' src="./images/profile2.png" alt="" />
<img className='prof3' src="./images/profile3.png" alt="" />
<img className='drpdwn1' src="./images/dropdown.png" alt="" />
<img className='cmpus' src="./images/cumpouses.png" alt="" />
<img className='cmpstitl' src="./images/campustitle.png" alt="" />
<h6 className='our1'>OUR</h6>
<img className='newbtn' src="./images/yellowbtn.png" alt="" />
<img className='grp' src="./images/Grouppics.png" alt="" />
<img className='ftr' src="./images/footer.png" alt=""/>
<h6 className='dsr'>DAHISAR</h6>
<img className='unischol' src="./images/universel.png" alt="" />
<img className='add' src="./images/address.png" alt="" />
<img className='email' src="./images/email.png" alt="" />
<img className='admon' src="./images/addmission.png" alt="" />
<img className='getbtn' src="./images/getbtn.png" alt="" />
<img className='maps' src="./images/map.png" alt="" />
<img className='blkft' src="./images/blkfooter.png" alt="" />
<button className='btn_next' onClick={handleClick}>Next Page</button>
  </div>
  </div>
  );
}
