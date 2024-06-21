import Fixed from "../../components/fixed/fixed";
import "./h2.css";
import img from "../../imgs/h2About/h2.jpg";
import what from "../../imgs/h2About/what.jpg";
import future from "../../imgs/h2About/future.jpg";
import conclusion from "../../imgs/h2About/Conclusion.jpg";
import Contact from "../../components/contact/Contact";
import Follow from "../../components/follow/Follow";

const H2 = () => {
  return (
    <Fixed>
      <div className="h2">
        <div className="about light background cover">
          <h2 className="container">عن الهيدروجين الاخضر</h2>
        </div>
        <div className="future pink-background">
          <div className="content">
            <h2>عن الهيدروجين الاخضر</h2>
            <p>تمكين مستقبل مستدام بالهيدروجين الأخضر</p>
          </div>
          <div className="flex2 container">
            <div className="content">
              <p>
                مرحبًا بكم في قلب ثورة الهيدروجين الأخضر. في GH power، نحن
                ملتزمون بعرض الإمكانات التحويلية للهيدروجين الأخضر كحل طاقة نظيف
                ومتجدد ومتعدد الاستخدامات. وفي إطار البحث عن حلول الطاقة
                المستدامة، برز الهيدروجين الأخضر كمنارة للأمل. ومع وعده بالوقود
                الخالي من الانبعاثات والتطبيقات المتنوعة، يستعد الهيدروجين
                الأخضر لإحداث ثورة في الصناعات والنقل وأنظمة الطاقة في جميع
                أنحاء العالم. دعونا نتعمق في ماهية الهيدروجين الأخضر، وسبب
                أهميته، وقدرته على تشكيل مستقبل أنظف وأكثر اخضرارًا للأجيال
                القادمة.
              </p>
            </div>
            <div className="img">
              <img src={img} alt="background" />
            </div>
          </div>
        </div>
        <div className="qoute white-text dark background cover">
          <div className="center-text">
            "من الرؤية إلى الواقع: الهيدروجين الأخضر يدفعنا نحو مستقبل مدعوم
            بالطاقة النظيفة والمتجددة."
            <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div className="what flex2 container bink-background">
          <div className="content">
            <p className="green">- تعريف الهيدروجين الأخضر -</p>
            <h2>ما هو الهيدروجين الاحضر</h2>
            <p className="para">
              يتم إنتاج الهيدروجين الأخضر، الذي يشار إليه غالبًا بالهيدروجين
              المتجدد، من خلال التحليل الكهربائي للمياه باستخدام مصادر الطاقة
              المتجددة مثل طاقة الرياح أو الطاقة الشمسية أو الطاقة المائية. وعلى
              عكس طرق إنتاج الهيدروجين التقليدية، التي تعتمد على الوقود الأحفوري
              وينبعث منها ثاني أكسيد الكربون، فإن إنتاج الهيدروجين الأخضر لا
              يولد أي انبعاثات غازات الدفيئة. تتضمن هذه العملية تقسيم جزيئات
              الماء إلى ذرات هيدروجين وأكسجين، مع احتجاز الهيدروجين وتخزينه
              لاستخدامه كحامل للطاقة النظيفة.
            </p>
          </div>
          <div className="img">
            <img src={what} alt="h2" />
          </div>
        </div>
        <div className="fhr flex2 container">
          <div className="img">
            <img src={future} alt="future" />
          </div>
          <div className="content">
            <p className="green">- مستقبل الهيدروجين الأخضر -</p>
            <h2>مستقبل الهيدروجين الأخضر</h2>
            <p className="para">
              يستعد الهيدروجين الأخضر لإحداث ثورة في مشهد الطاقة لدينا، حيث يقدم
              حلاً مستدامًا لتحديات المناخ الملحة التي نواجهها. ومع استمرار
              ازدهار مصادر الطاقة المتجددة، سيزداد إنتاج الهيدروجين الأخضر، مما
              يؤدي إلى خفض التكاليف وتوسيع إمكانية الوصول إليه. ومن الصناعات
              التي تعمل على إزالة الكربون إلى تشغيل وسائل النقل الخالية من
              الانبعاثات، يحمل الهيدروجين الأخضر المفتاح لمستقبل أنظف وأكثر
              مرونة. ومع الابتكار المستمر والدعم العالمي المتزايد، فإن عصر
              الهيدروجين الأخضر يَعِد ببدء عصر جديد من استدامة الطاقة والإشراف
              البيئي.
            </p>
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
        <div className="why">
          <div className="whyhdro">
            <h2>لماذا الهيدروجين الأخضر؟</h2>
            <p>يقدم الهيدروجين الأخضر العديد من الفوائد في مختلف القطاعات:</p>
          </div>
          <div className="numbers">
            <div className="center">
              <div className="num">
                <p className="center-text">1</p>
              </div>
              <div className="text center-text">
                <h2>النقل النظيف</h2>
                <p>
                  توفر مركبات خلايا الوقود التي تعمل بالهيدروجين الأخضر حلول نقل
                  خالية من الانبعاثات، مما يقلل الاعتماد على الوقود الأحفوري
                  ويحسن جودة الهواء.
                </p>
              </div>
            </div>
            <div className="center">
              <div className="num">
                <p className="center-text">2</p>
              </div>
              <div className="text center-text">
                <h2>إزالة الكربون الصناعية</h2>
                <p>
                  يمكن للهيدروجين الأخضر أن يزيل الكربون من العمليات الصناعية
                  مثل إنتاج الصلب والأسمنت، مما يمهد الطريق لقطاع تصنيع أكثر
                  استدامة.
                </p>
              </div>
            </div>
            <div className="center">
              <div className="num">
                <p className="center-text">3</p>
              </div>
              <div className="text center-text">
                <h2>تخزين الطاقة</h2>
                <p>
                  يمكن تخزين الهيدروجين واستخدامه كحل مرن لتخزين الطاقة، مما
                  يساعد على تحقيق التوازن بين الطبيعة المتقطعة لمصادر الطاقة
                  المتجددة مثل طاقة الرياح والطاقة الشمسية.
                </p>
              </div>
            </div>
            <div className="center">
              <div className="num">
                <p className="center-text">4</p>
              </div>
              <div className="text center-text">
                <h2>توليد الطاقة</h2>
                <p>
                  يمكن استخدام الهيدروجين الأخضر في خلايا الوقود لتوليد
                  الكهرباء، مما يوفر مصدر طاقة موثوقًا وخاليًا من الانبعاثات
                  للمنازل والشركات والمجتمعات.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="conclusion container bink-background">
          <p>
            يمثل الهيدروجين الأخضر حلاً نظيفًا ومتعدد الاستخدامات وقابلاً
            للتطوير للتحديات الملحة المتمثلة في تغير المناخ وأمن الطاقة. ومن
            خلال تسخير قوة الطاقة المتجددة، يتمتع الهيدروجين الأخضر بالقدرة على
            تحويل قطاعات متعددة من الاقتصاد، من الصناعة إلى النقل إلى تخزين
            الطاقة. وبينما نعمل من أجل مستقبل أكثر استدامة، فإن الهيدروجين
            الأخضر سيلعب بلا شك دورًا مركزيًا في تشكيل مشهد الطاقة العالمي
            للأجيال القادمة.
          </p>
          <div className="img">
            <img src={conclusion} alt="conclusion" />
          </div>
        </div>
        <Contact />
        <Follow />
      </div>
    </Fixed>
  );
};

export default H2;
