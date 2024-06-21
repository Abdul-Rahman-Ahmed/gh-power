import { Link } from "react-router-dom";
import Fixed from "../../components/fixed/fixed";
import first from "../../imgs/home/first.jpg";
import second from "../../imgs/home/second.jpg";
import third from "../../imgs/home/third.jpg";
import { useEffect, useRef } from "react";
import Contact from "../../components/contact/Contact";
import Follow from "../../components/follow/Follow";
import helwan from "../../imgs/helwanLogo.png";

const Home = () => {
  let myarrow = useRef();
  let trans = useRef();
  let sections = useRef();
  let transProjects = useRef(0);
  let end = 2;

  useEffect(() => {
    sections.current = document.querySelectorAll(
      ".projects .sections .section"
    );
    myarrow.current = document.querySelector(".main-section .content");
    trans.current = 0;

    let bullets = document.querySelectorAll(".bullet");
    setInterval(() => {
      if (trans.current === 200) {
        trans.current = 0;
      } else {
        trans.current += 100;
      }
      for (let i = 0; i < 3; i++) {
        bullets[i].classList.remove("active");
        bullets[trans.current / 100].classList.add("active");
      }
      myarrow.current.style.transform = `translateX(${trans.current}%)`;
    }, 5000);
  });

  const moveHandler = (plus) => {
    let sec = sections.current;
    if (plus && transProjects.current < end) {
      transProjects.current += 1;
    } else if (
      !plus &&
      transProjects.current <= end &&
      transProjects.current !== 0
    ) {
      transProjects.current -= 1;
    } else {
      end = 2;
    }

    if (window.innerWidth <= 500) {
      end = 4;
    } else if (window.innerWidth <= 768) {
      end = 3;
    }

    for (let i = 0; i < sec.length; i++) {
      sec[
        i
      ].style.transform = `translateX(calc((100% + 33px) * ${transProjects.current}))`;
    }
  };

  return (
    <Fixed>
      <div className="main-section">
        <div className="content">
          <div className="slide">
            <div className="img">
              <img src={first} alt="first" />
            </div>
            <div className="text container center-text">
              <h2>
                لقد حان الوقت للانتقال الى
                <span> الطاقة الخضراء </span>
                لضمان غد افضل
              </h2>
            </div>
          </div>
          <div className="slide">
            <div className="img">
              <img src={second} alt="second" />
            </div>
            <div className="text container center-text">
              <h2>من نحن</h2>
              <p>
                يعد موقعنا الإلكتروني بمثابة منصة شاملة مخصصة لتعزيز الوعي
                والتعليم واعتماد الهيدروجين الأخضر كحل للطاقة النظيفة
                والمستدامة.
              </p>
              <Link to="/ar/h2-about">للمزيد</Link>
            </div>
          </div>
          <div className="slide">
            <div className="img">
              <img src={third} alt="third" />
            </div>
            <div className="text container center-text">
              <h2>لماذا الهيدروجين الاخضر</h2>
              <p>تمكين مستقبل مستدام بالهيدروجين الأخضر</p>
              <Link to="/ar/h2-about">للمزيد</Link>
            </div>
          </div>
        </div>
        <div className="bullets">
          <div className="bullet active"></div>
          <div className="bullet"></div>
          <div className="bullet"></div>
        </div>
      </div>
      <div className="contents">
        <div className="what flex2 container pink-background">
          <div className="content">
            <p className="green">- من نحن -</p>
            <h2>مرحبا بكم في جي إتش باور</h2>
            <p className="para">
              حيث نسلط الضوء على الهيدروجين الأخضر وإمكاناته ونشارك تحركات
              العالم تجاهه.
            </p>
            <p>
              يعد موقعنا الإلكتروني بمثابة منصة شاملة مخصصة لتعزيز الوعي
              والتعليم واعتماد الهيدروجين الأخضر كحل للطاقة النظيفة والمستدامة.
              نحن نهدف إلى إلهام الأفراد والشركات والحكومات لتبني تكنولوجيا
              الهيدروجين الأخضر من أجل مستقبل أكثر صداقة للبيئة وقابلية للحياة
              اقتصاديًا، ومن خلال التزامنا الثابت بالتعليم والدعوة والتعاون
              والابتكار، نحن ملتزمون بتعزيز التحول إلى الطاقة المستدامة.
              المستقبل مدعوم بالهيدروجين الأخضر.
            </p>
            <Link to="/ar/about-us" className="button">
              للمزيد
            </Link>
          </div>
          <div className="img">
            <img src={second} alt="GH Power" />
          </div>
        </div>
        <div className="information white-text dark background cover">
          <h2 className="index">هل تعلم ان</h2>
          <div className="knows index">
            <div className="know">
              <div className="icon">
                <i className="fa-solid fa-sun"></i>
              </div>
              <h3>وقود بدون انبعاثات</h3>
              <p>
                يتم إنتاج الهيدروجين الأخضر باستخدام مصادر الطاقة المتجددة، مما
                يؤدي إلى عدم انبعاثات الكربون أثناء إنتاجه واستخدامه. فهو يوفر
                بديلاً نظيفًا ومستدامًا للوقود الأحفوري، مما يساعد على التخفيف
                من تغير المناخ.
              </p>
            </div>
            <div className="know">
              <div className="icon">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3>حاملة طاقة متعددة الاستخدامات</h3>
              <p>
                يمكن استخدام الهيدروجين الأخضر في مجموعة متنوعة من التطبيقات،
                بما في ذلك تخزين الطاقة والنقل والعمليات الصناعية وتوليد الطاقة.
                إن تنوعها يجعلها عنصرا رئيسيا في التحول إلى اقتصاد منخفض
                الكربون.
              </p>
            </div>
            <div className="know">
              <div className="icon">
                <i className="fa-solid fa-solar-panel"></i>
              </div>
              <h3>تكامل الطاقة المتجددة</h3>
              <p>
                يلعب الهيدروجين الأخضر دورًا حاسمًا في دمج مصادر الطاقة المتجددة
                في الشبكة من خلال توفير وسيلة لتخزين فائض الكهرباء المتجددة. فهو
                يتيح الاستخدام الأفضل لموارد الطاقة المتجددة المتقطعة، مما يساعد
                على استقرار الشبكة وتلبية الطلب على الطاقة حتى عندما يتقلب إنتاج
                الطاقة المتجددة.
              </p>
            </div>
          </div>
        </div>
        <div className="what flex2 container">
          <div className="img">
            <img src={third} alt="why" />
          </div>
          <div className="content">
            <p className="green">- عن الهيدروجين الأخضر -</p>
            <h2>لماذا الهيدروجين الأخضر؟</h2>
            <p className="para">تمكين مستقبل مستدام بالهيدروجين الأخضر</p>
            <p>
              مرحبًا بكم في قلب ثورة الهيدروجين الأخضر. في GH power، نحن ملتزمون
              بعرض الإمكانات التحويلية للهيدروجين الأخضر كحل طاقة نظيف ومتجدد
              ومتعدد الاستخدامات. وفي إطار البحث عن حلول الطاقة المستدامة، برز
              الهيدروجين الأخضر كمنارة للأمل. ومع وعده بالوقود الخالي من
              الانبعاثات والتطبيقات المتنوعة، يستعد الهيدروجين الأخضر لإحداث
              ثورة في الصناعات والنقل وأنظمة الطاقة في جميع أنحاء العالم. دعونا
              نتعمق في ماهية الهيدروجين الأخضر، وسبب أهميته، وقدرته على تشكيل
              مستقبل أنظف وأكثر اخضرارًا للأجيال القادمة.
            </p>
            <Link to="/ar/h2-about" className="button">
              للمزيد
            </Link>
          </div>
        </div>
        <div className="qoute white-text dark background cover">
          <div className="center-text">
            "من الرؤية إلى الواقع: الهيدروجين الأخضر يدفعنا نحو مستقبل مدعوم
            بالطاقة النظيفة والمتجددة."
            <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div className="explore contaienr bink-background">
          <h2 className="content">اكتشف معنا</h2>
          <div className="sections">
            <Link to="/ar/organizations" className="section background dark">
              <div className="text index">
                <h3>مؤسسات</h3>
                <p>تعرف علي ابرز مؤسسات الهيدروجين الاخضر</p>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </Link>
            <Link to="/ar/projects" className="section background dark">
              <div className="text index">
                <h3>مشروعات</h3>
                <p>تعرف علي ابرز مشروعات الهيدروجين الاخضر</p>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </Link>
            <Link to="/ar/conferences" className="section background dark">
              <div className="text index">
                <h3>المؤتمرات</h3>
                <p>تعرف علي ابرز مؤتمرات الهيدروجين الاخضر</p>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </Link>
            <Link
              to="/ar/information-resources"
              className="section background dark"
            >
              <div className="text index">
                <h3>إنتاج فكري</h3>
                <p>تعرف علي ابرز الانتاج الفكري عن الهيدروجين الاخضر</p>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="projects container">
          <h2>المشروعات المميزة</h2>
          <div className="cont">
            <div className="sections">
              <Link
                to="/ar/projects/نظام مستدام للطاقة يعتمد على الهيدروجين الاخضر ذات إدارة متكاملة ذكية باستخدام الذكاء الاصطناعي وإنترنت الأشياء"
                className="section"
              >
                <div className="img">
                  <img src={helwan} alt="project" />
                </div>
                <div className="text">
                  <h3>
                    نظام مستدام للطاقة يعتمد على الهيدروجين الاخضر ذات إدارة
                    متكاملة ذكية باستخدام الذكاء الاصطناعي وإنترنت الأشياء
                  </h3>
                  <div className="button">للمزيد</div>
                </div>
              </Link>
              <div className="section">
                <div className="img">
                  <img src={first} alt="project" />
                </div>
                <div className="text">
                  <h3>المشروع الثاني</h3>
                  <p>للمزيد</p>
                </div>
              </div>
              <div className="section">
                <div className="img">
                  <img src={first} alt="project" />
                </div>
                <div className="text">
                  <h3>المشروع الثالث</h3>
                  <p>للمزيد</p>
                </div>
              </div>
              <div className="section">
                <div className="img">
                  <img src={first} alt="project" />
                </div>
                <div className="text">
                  <h3>المشروع الرابع</h3>
                  <p>للمزيد</p>
                </div>
              </div>
              <div className="section">
                <div className="img">
                  <img src={first} alt="project" />
                </div>
                <div className="text">
                  <h3>المشروع الخامس</h3>
                  <p>للمزيد</p>
                </div>
              </div>
            </div>
            <div
              className="right"
              onClick={() => {
                moveHandler(true);
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div
              className="left"
              onClick={() => {
                moveHandler(false);
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="comeingConference cover">
          <h2>المؤتمر القادم</h2>
          <h3>قمةالهيدروجين العالمي 2024</h3>
          <p>13 – 15 مايو 2024 – روتردام أهوي، روتردام، هولندا</p>
          <div className="counter">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="button">للمزيد</div>
        </div>
        <Contact />
        <div className="projects container">
          <h2>إنتاج فكري ننصح به</h2>
          <div className="cont">
            <div className="sections">
              <div className="section">
                <div className="img">
                  <img src={first} alt="project" />
                </div>
                <div className="text">
                  <h3>المشروع الاول</h3>
                  <p>للمزيد</p>
                </div>
              </div>
              <div className="section">
                <div className="img">
                  <img src={first} alt="project" />
                </div>
                <div className="text">
                  <h3>المشروع الثاني</h3>
                  <p>للمزيد</p>
                </div>
              </div>
              <div className="section">
                <div className="img">
                  <img src={first} alt="project" />
                </div>
                <div className="text">
                  <h3>المشروع الثالث</h3>
                  <p>للمزيد</p>
                </div>
              </div>
              <div className="section">
                <div className="img">
                  <img src={first} alt="project" />
                </div>
                <div className="text">
                  <h3>المشروع الرابع</h3>
                  <p>للمزيد</p>
                </div>
              </div>
              <div className="section">
                <div className="img">
                  <img src={first} alt="project" />
                </div>
                <div className="text">
                  <h3>المشروع الخامس</h3>
                  <p>للمزيد</p>
                </div>
              </div>
            </div>
            <div
              className="right"
              onClick={() => {
                moveHandler(true);
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div
              className="left"
              onClick={() => {
                moveHandler(false);
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <Follow />
      </div>
    </Fixed>
  );
};

export default Home;
