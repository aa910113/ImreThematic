$('#exampleModal').on('show.bs.modal', function (event) {
  var modal = $(this)
  modal.find('.modal-title').text('寄送臨時密碼')
})
var temporaryPwd = new Vue({
  el:"#exampleModal",
  data:{
    Email:"",
    error:false,
    errorTow: false,
    errorMessage:"請填寫E-mail",
    errorMessageTow:"請输入有效的E-mail"
  },
  methods:{
    send(){
      const url = "http://imrebooksystem.southeastasia.cloudapp.azure.com/BusinessUsers/TemporaryPassword";
      if (this.Email === '') {
        this.error = true;
        this.errorTow = false;
        return
      } else if (this.Email !== '') {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.Email)) {
          this.error = false;
          this.errorTow = true;
          return
        } else {
          this.error = false;
          this.errorTow = false;
          axios.post(`${url}`, { "Email": this.Email })
            .then((res) => { console.table(res.data) })
            .catch((error) => { console.error(error) })
        }
      }
    }
  }
})