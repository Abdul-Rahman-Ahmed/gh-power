import Fixed from "../../components/fixed/fixed";
import "./contact.css";
import img from "../../imgs/contact/contact.jpg";
import Follow from "../../components/follow/Follow";
const Contact = () => {
  return (
    <Fixed>
      <div className="contact-us">
        <div className="about light background cover">
          <h2 className="container">تواصل معنا</h2>
        </div>
        <div className="future pink-background">
          <div className="content">
            <h2>الحصول على اتصال معنا اليوم!</h2>
          </div>
          <div className="flex2 container">
            <div className="content">
              <p>
                ● هل لديك أسئلة أو ترغب في معرفة المزيد حول مبادراتنا للهيدروجين
                الأخضر؟
              </p>
              <p>
                ● فريقنا موجود للرد على استفساراتك ومناقشة كيف يمكننا التعاون
                لتعزيز حلول الطاقة المستدامة.
              </p>
              <p>
                ● تواصل معنا عبر النموذج أدناه أو تواصل معنا مباشرة على
                ghpower@gmail.com
              </p>
            </div>
            <div className="img">
              <img src={img} alt="contact" />
            </div>
          </div>
        </div>
        <form>
          <input placeholder="ادخل اسمك بالكامل" type="text" />
          <input placeholder="ادخل رقم هاتفك" type="number" />
          <input placeholder="ادخل البريد الالكتروني" type="email" />
          <input placeholder="اكتب رسالتك" type="text" />
          <button>ارسال</button>
        </form>
        <Follow />
      </div>
    </Fixed>
  );
};

export default Contact;
