import "./about.css";
import Fixed from "../../components/fixed/fixed";
import about from "../../imgs/about-us/background - Copy.jpg";
import mission from "../../imgs/about-us/mission.jpg";
import vision from "../../imgs/about-us/vision.jpg";
import team from "../../imgs/about-us/team.jpg";
import Contact from "../../components/contact/Contact";
import Follow from "../../components/follow/Follow";

const About = () => {
  return (
    <Fixed props="/en/about-us">
      <div className="about-us">
        <div className="about light background cover">
          <h2 className="container">من نحن</h2>
        </div>
        <div className="future pink-background">
          <div className="content">
            <h2>من جي إتش باور</h2>
            <p>
              مرحباً بكم في موقعنا، حيث نسلط الضوء على الهيدروجين الأخضر
              وإمكانياته ونشارككم تحركات العالم تجاهه.
            </p>
          </div>
          <div className="flex2 container">
            <div className="content">
              <p>
                يعد موقعنا الإلكتروني بمثابة منصة شاملة مخصصة لتعزيز الوعي
                والتعليم واعتماد الهيدروجين الأخضر كحل للطاقة النظيفة
                والمستدامة. نحن نهدف إلى إلهام الأفراد والشركات والحكومات لتبني
                تكنولوجيا الهيدروجين الأخضر من أجل مستقبل أكثر صداقة للبيئة
                وقابلية للحياة اقتصاديًا، ومن خلال التزامنا الثابت بالتعليم
                والدعوة والتعاون والابتكار، نحن ملتزمون بتعزيز التحول إلى الطاقة
                المستدامة. المستقبل مدعوم بالهيدروجين الأخضر. معًا، يمكننا أن
                نخلق عالمًا أكثر نظافة وصحة وازدهارًا للأجيال القادمة.
              </p>
            </div>
            <div className="img">
              <img src={about} alt="about" />
            </div>
          </div>
        </div>
        <div className="qoute white-text dark background cover">
          <div className="center-text">
            "تمكين غد مستدام بقوة الهيدروجين الأخضر."
            <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div className="what flex2 container pink-background">
          <div className="content">
            <p className="green">- مهمة -</p>
            <h2>مهمتنا</h2>
            <p className="para">
              مهمتنا واضحة: تمكين الأفراد والشركات والمجتمعات من تبني الهيدروجين
              الأخضر باعتباره حجر الزاوية في التحول إلى مستقبل الطاقة المستدامة.
              ومن خلال التعليم والدعوة والتعاون، نسعى جاهدين لتسريع اعتماد
              تقنيات الهيدروجين الأخضر وتحقيق تأثير بيئي واقتصادي إيجابي في جميع
              أنحاء العالم.
            </p>
          </div>
          <div className="img">
            <img src={mission} alt="mission" />
          </div>
        </div>
        <div className="fhr flex2 container">
          <div className="img">
            <img src={vision} alt="vision" />
          </div>
          <div className="content">
            <p className="green">- رؤية -</p>
            <h2>رؤيتنا</h2>
            <p className="para">
              نحن متحمسون لإمكانيات الهيدروجين الأخضر في تغيير الطريقة التي ننتج
              بها الطاقة ونستهلكها. بدأت رحلتنا برؤية مشتركة لإنشاء منصة مخصصة
              لتعزيز الوعي والتعليم والدعوة للهيدروجين الأخضر كحل للطاقة
              المستدامة.
            </p>
          </div>
        </div>
        <div className="information white-text dark background cover">
          <h2 className="index">قيمنا</h2>
          <div className="knows index">
            <div className="know">
              <div className="icon">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <h3>الاستدامة</h3>
              <p>
                نحن نؤمن بقدرة الهيدروجين الأخضر على التخفيف من تغير المناخ،
                وتقليل انبعاثات الكربون، وبناء عالم أكثر استدامة للأجيال
                القادمة.
              </p>
            </div>
            <div className="know">
              <div className="icon">
                <i className="fa-regular fa-lightbulb"></i>
              </div>
              <h3>ابتكار</h3>
              <p>
                نحن ملتزمون بتعزيز الابتكار ودفع التقدم في تكنولوجيا وعمليات
                وتطبيقات الهيدروجين الأخضر لإطلاق العنان لإمكاناته الكاملة.
              </p>
            </div>
            <div className="know">
              <div className="icon">
                <i className="fa-regular fa-handshake"></i>
              </div>
              <h3>تعاون</h3>
              <p>
                نحن نؤمن بأن التعاون هو المفتاح للتغلب على التحديات والعوائق
                التي تحول دون اعتماد الهيدروجين الأخضر. ومن خلال العمل مع أصحاب
                المصلحة من جميع القطاعات، يمكننا تحقيق تأثير وتقدم أكبر.
              </p>
            </div>
          </div>
        </div>
        <div className="conclusion container pink-background">
          <h2>فريقنا</h2>
          <p>
            في GH power، فريقنا عبارة عن مزيج ديناميكي من الطموح والعاطفة. نحن
            متحدون بالتزامنا بالحلول المستدامة الرائدة في إنتاج الهيدروجين
            الأخضر. معًا، نحن نقود الابتكار، ونتجاوز الحدود، ونشكل مستقبلًا أنظف
            وأكثر اخضرارًا للأجيال القادمة.
          </p>
          <div className="img">
            <img src={team} alt="team" />
          </div>
        </div>
        <div className="why">
          <div className="whyhdro">
            <h2>نهجنا</h2>
          </div>
          <div className="numbers">
            <div className="center">
              <div className="num">
                <p className="center-text">1</p>
              </div>
              <div className="text center-text">
                <h2>تعليم</h2>
                <p>
                  نحن نقدم موارد يسهل الوصول إليها وغنية بالمعلومات لتثقيف أصحاب
                  المصلحة حول فوائد الهيدروجين الأخضر وفرصه وتحدياته.
                </p>
              </div>
            </div>
            <div className="center">
              <div className="num">
                <p className="center-text">2</p>
              </div>
              <div className="text center-text">
                <h2>المناصرة</h2>
                <p>
                  نحن ندافع عن السياسات واللوائح والاستثمارات التي تدعم تطوير
                  ونشر ودمج حلول الهيدروجين الأخضر في أنظمة وصناعات الطاقة.
                </p>
              </div>
            </div>
            <div className="center">
              <div className="num">
                <p className="center-text">3</p>
              </div>
              <div className="text center-text">
                <h2>بناء المجتمع</h2>
                <p>
                  نحن نعزز مجتمعًا نابضًا بالحياة من أصحاب المصلحة لتبادل
                  الأفكار ومشاركة أفضل الممارسات والتعاون في المشاريع المبتكرة
                  التي تعزز أجندة الهيدروجين الأخضر.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Follow />
      </div>
    </Fixed>
  );
};

export default About;
