var app = new Vue({
  el:'#app',
  data:{
    Email: "",
    Password: "",
    Verification: "" 
  },
  methods:{
    sendEmail(){
      axios.post('http://imrebooksystem.southeastasia.cloudapp.azure.com/Home/Shit', { "Email": "bbb@gmail.com" })
    }
    // sendEmail:function () {

    //   // if(this.Email === '') {
    //   //   alert("請正確填寫E-mail");
    //   // }else if (this.Email !== ''){
    //   //   var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    //   //   if (!reg.test(this.Email)) {
    //   //     alert("請输入有效的E-mail");
    //   //   }else{
    //   //       // bbb@gmail.com
    //   //     var raw = JSON.stringify({ "Email": "bbb@gmail.com" });
    //   //     axios.post("http://imrebooksystem.southeastasia.cloudapp.azure.com/businessUsers/VerificationMailSend", raw)
    //   //       .then(function (response) {
    //   //         console.log(response);
    //   //       })
    //   //       .catch(function (error) {
    //   //         console.log(error);
    //   //       });
    //       // var myHeaders = new Headers();
    //       // myHeaders.append("Content-Type", "application/json");

    //       // var raw = JSON.stringify({ "Email": this.Email });
    //       // console.log(raw)

    //       // var requestOptions = {
    //       //   method: 'POST',
    //       //   headers: myHeaders,
    //       //   body: raw,
    //       //   redirect: 'follow'
    //       // };

    //       // fetch("http://imrebooksystem.southeastasia.cloudapp.azure.com/businessUsers/VerificationMailSend", requestOptions)
    //       //   .then(response => response.text())
    //       //   .then(result => console.log(result))
    //       //   .catch(error => console.log('error', error));
    //     }
    //   }
        
      
    // }
    
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