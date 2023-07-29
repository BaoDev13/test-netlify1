import Banner from "../accsets/banner.jpg";
import Banner2 from "../accsets/banner2.jpg";
import Banner1 from "../accsets/banner1.jpg";
import Banner3 from "../accsets/banner3.jpg";
import Logo from "../accsets/logo.png";
import Local from "../accsets/local.svg";
import "./Body.scss";
import { useState } from "react";

const Body = () => {
  const interestRates = [
    { value: "1.8000000000000001", label: "Visa 1.8%" },
    { value: "1.8", label: "Master Card 1.8%" },
    { value: "2.5000000000000001", label: "CB 2.5%" },
    { value: "1.5000000000000001", label: "Napas Credit 1.5%" },
    { value: "2.5", label: "CUP 2.5%" },
    { value: "1.5", label: "Quét App HDBank 1.5%" },
  ];

  const [interestRate, setInterestRate] = useState(interestRates[0].value); // Default value as a string
  const [amount, setAmount] = useState(""); // Empty string for initial state

  const calculateWithdrawalFee = () => {
    return (
      (parseFloat(interestRate) / 100) * parseFloat(amount.replace(/,/g, ""))
    );
  };

  const calculateReceivedAmount = () => {
    return parseFloat(amount.replace(/,/g, "")) - calculateWithdrawalFee();
  };

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (e) => {
    const enteredValue = e.target.value.replace(/,/g, "");
    if (
      enteredValue === "" ||
      (Number(enteredValue) >= 0 && Number(enteredValue) <= 10000000000000)
    ) {
      setAmount(numberWithCommas(enteredValue));
    }
  };

  return (
    <>
      <div className="body_container">
        <section className="st1" id="home">
          <div className="row">
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-img"
              style={{ backgroundImage: `url(${Banner})` }}
            ></div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-text">
              <div>
                <img width="50%" height="50%" src={Logo} alt="" />
                <h2>
                  QUẸT THẺ
                  <span style={{ color: "#f2cc10" }}> RÚT TIỀN & ĐÁO HẠN</span>
                </h2>
                <p style={{ color: "#000" }}>
                  HỖ TRỢ RÚT TIỀN & ĐÁO HẠN THẺ TÍN DỤNG TẬN NƠI
                </p>
                <p style={{ color: "#000" }}>06 CHI NHÁNH TẠI VIỆT NAM</p>
                <p style={{ color: "#000" }}>UY TÍN - AN TOÀN - BẢO MẬT</p>
                <button className="btn-animate">
                  <a href="tel:0363231192">GỌI NGAY</a>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------- */}
        <section className="st2" id="phi-rut-tien">
          <div className="row">
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-img"
              style={{ backgroundImage: `url(${Banner2}` }}
            ></div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="tinhlai">
                <div className="col-12">
                  <h3>PHÍ RÚT TIỀN TẠI SAIGONCREDIT</h3>
                  <div style={{ marginTop: "50px" }}>
                    <p>Chọn loại thẻ :</p>
                    <select
                      id="tile"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                    >
                      {interestRates.map((rate) => (
                        <option key={rate.value} value={rate.value}>
                          {rate.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <p>Nhập số cần rút (VND) : </p>
                    <input
                      type="text"
                      value={numberWithCommas(amount)}
                      onChange={handleAmountChange}
                    />
                  </div>

                  <div style={{ marginTop: "30px" }}>
                    <p>Phí rút:</p>
                    <input
                      type="text"
                      value={
                        calculateWithdrawalFee()
                          ? numberWithCommas(
                              calculateWithdrawalFee().toFixed(0)
                            ) + " ₫"
                          : ""
                      }
                      readOnly
                    />
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <p>Số nhận được:</p>
                    <input
                      type="text"
                      value={
                        calculateReceivedAmount()
                          ? numberWithCommas(
                              calculateReceivedAmount().toFixed(0)
                            ) + " ₫"
                          : ""
                      }
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------- */}
        <section className="st3" id="quyen-loi">
          <div className="row">
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-text"
              style={{ textAlign: "justify" }}
            >
              <h2 style={{ paddingTop: "50px" }}>
                Quyền lợi của <span className="color-blue">khách hàng</span>
              </h2>
              <button className="btn-animate">
                <a href="tel:0363231192">GỌI NGAY</a>
              </button>
              <ul>
                <li>
                  Mức phí cạnh tranh nhất chỉ từ{" "}
                  <span className="color-blue">1.5%</span> và{" "}
                  <span className="color-blue">0%</span> lãi suất
                </li>
                <li>
                  Nhận tiền chuyển khoản ngay sau{" "}
                  <span className="color-blue">một nốt nhạc</span>.
                </li>
                <li>
                  Rút được <span className="color-blue">100%</span> hạn mức thẻ
                  visa/master/jcb
                </li>
                <li>
                  Nhận lưu thẻ và có nhân viên hỗ trợ nhắc đáo hạn hàng tháng.
                </li>
                <li>
                  Tư vấn miễn phí về thẻ, về lãi suất,.. Giúp khách hàng tránh
                  rủi ro bị phát sinh lãi, quá hạn...
                </li>
                <li>Số lượng POS xoay tua nhiều mã ngành và địa điểm GD.</li>
                <li>Cửa hàng hoạt động từ năm 2015 đến nay.</li>
                <li>
                  Có tổng cộng 06 cửa hàng tại Sài Gòn, Mỹ Tho, Cần Thơ, Sa Đéc
                  và Nha Trang. Hoạt động 24/7 kể cả ngày Thứ 7, Chủ Nhật, Lễ,
                  Tết.
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-img"
              style={{
                backgroundImage: `url(${Banner1})`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </section>
        {/* ------------------- */}
        <section className="st4" id="bao-mat">
          <div className="row">
            <div className="col-12" style={{ textAlign: "center" }}>
              <button className="btn-animate">
                <a href="tel:0363231192">GỌI NGAY</a>
              </button>
              <h3 style={{ lineHeight: "50px" }}>
                <span className="color-blue">Khách hàng</span> luôn được đảm bảo
                an toàn thông tin
              </h3>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-text">
              <h4>
                Giao dịch như thế thì có bị
                <br />
                <span className="color-blue" style={{ lineHeight: "50px" }}>
                  LỘ THÔNG TIN VÀ AN TOÀN?
                </span>
              </h4>
              <ul>
                <li>
                  Tất cả giao dịch tại cửa hàng đều là giao dịch mua hàng hoá
                  bằng máy POS nên không lưu thông tin thẻ.
                </li>
              </ul>
              <div className="luu-y">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-luu-y">
                    <p>LƯU Ý:</p>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 text-align: justify;">
                    THETINDUNGSAIGON.COM chỉ chấp nhận hỗ trợ khách hàng có đầy
                    đủ CMND/CCCD và STK cá nhân chính chủ nhằm phòng tránh kẻ
                    gian đánh cắp thẻ, thông tin thẻ trục lợi.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-img"
              style={{ backgroundImage: `url(${Banner3})` }}
            ></div>
          </div>
        </section>
        {/* ------------------- */}
        <section className="st5" id="chi-nhanh">
          <div className="background-blue">
            <div className="row">
              <div className="col-12 text-center">
                <h3>
                  <span className="color-red">QUẸT THẺ RÚT TIỀN ĐÁO HẠN</span>
                </h3>{" "}
                <button className="btn-animate">
                  <a href="tel:0363231192">GỌI NGAY</a>
                </button>
                <h4>
                  THETINDUNGSAIGON.COM
                  <span className="color-red"> SAIGONCREDIT </span>
                </h4>
              </div>
            </div>
            <div className="row1">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div style={{ width: "100%" }}>
                  <h4>CHI NHÁNH 1</h4>
                  <div className="nameLocal">
                    <img src={Local} alt="" />
                    <p>đường Quang Trung, phường 14, Quận Gò Vấp, Tp HCM</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div style={{ width: "100%" }}>
                  <h4>CHI NHÁNH 2</h4>

                  <div className="nameLocal">
                    <img src={Local} alt="" />
                    <p>đường số 08, phường Linh Xuân, Tp Thủ Đức</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div style={{ width: "100%" }}>
                  <h4>CHI NHÁNH 3</h4>

                  <div className="nameLocal">
                    <img src={Local} alt="" />
                    <p>
                      đường Đồng Văn Cống, phường An Thới, Quận Bình Thuỷ, Tp
                      Cần Thơ
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div style={{ width: "100%" }}>
                  <h4>CHI NHÁNH 4</h4>

                  <div className="nameLocal">
                    <img src={Local} alt="" />
                    <p>đường Trần Hưng Đạo, phường 5, Tp Mỹ Tho</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div style={{ width: "100%" }}>
                  <h4>CHI NHÁNH 5</h4>

                  <div className="nameLocal">
                    <img src={Local} alt="" />
                    <p>đường Yết Kiêu, phường Vạn Thắng, Tp Nha Trang</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div style={{ width: "100%" }}>
                  <h4>CHI NHÁNH 6</h4>
                  <div className="nameLocal">
                    <img src={Local} alt="" />
                    <p>ấp Khánh Hoà, xã Tân Khánh Đông, Tp Sa Đéc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Body;
