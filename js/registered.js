var app = new Vue({
  el:'#app',
  data:{
    Email: "",
    Password: "",
    PasswordAgain: "",
    Verification: "" ,
    checked:false,
  },
  methods:{
    sendEmail(){
      const cors = "https://cors-anywhere.herokuapp.com/"; 
      const url = "http://imrebooksystem.southeastasia.cloudapp.azure.com/businessUsers/VerificationMailSend";
      if (this.Email === '') {
        alert("請填寫E-mail");
      } else if (this.Email !== '') {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.Email)) {
          alert("請输入有效的E-mail");
        } else {
          // bbb@gmail.com
          axios.post(`${cors}${url}`, { "Email": this.Email })
            .then((res) => { 
              localStorage.setItem("Verification code", res.data)
              // console.table(res.data) 
            })
            .catch((error) => { console.error(error) })
        }
      }
    },
    registered(){
      const cors = "https://cors-anywhere.herokuapp.com/";
      const url = "http://imrebooksystem.southeastasia.cloudapp.azure.com/BusinessUsers/create";
      if (this.Email === '') {
        alert("請填寫E-mail");
      } else if (this.Email !== '') {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.Email)) {
          alert("請输入有效的E-mail");
        } else {
          if(this.Password===''){
            alert("請輸入密碼")
          }else if (this.PasswordAgain === '') {
            alert("再輸入一次密碼")
          }else if(this.Password!==this.PasswordAgain){
            alert("密碼不相同")
          }else{
            if (this.checked===false){
              alert("請勾選我同意")
            }else{
              // localStorage.getItem("name")
              console.log(localStorage.getItem("Verification code"))
              // console.log(this.Password.length)
              // axios.post(`${cors}${url}`, {
              //   "Email": "bbb@gmail.com",
              //   "Password": "bbbb",
              //   "Verification": "4099"
              // })
              //   .then((res) => { console.table(res.data) })
              //   .catch((error) => { console.error(error) })
            }
          }
        }
      }
    }
  }
});


// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify(
//   { 
//     "Email": "bbb@gmail.com",
//      "Password": "bbb", 
//      "Verification": "1430" 
//     });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://imrebooksystem.southeastasia.cloudapp.azure.com/BusinessUsers/create", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));