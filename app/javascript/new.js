function test(){
  
  // var days = new Date(2021, document.getElementById("month").value, 0).getDate();
  for (let i = 0; i < 30; i++) {
    document.getElementById("test").insertAdjacentHTML('beforeEnd', `<th class="fixed02">${i+1}日</th>`)
  };
};

function send(){
  var members = []
  var allarray = []
  // allarray.push(document.getElementById("month").value)
  console.log("hello")
  for (let i = 0; i < 12; i++){
    if (document.getElementById(`shift${i+1}`).textContent != ""){
    members.push(document.getElementById(`shift${i+1}`).textContent)
    console.log(members)
    }
  }
  for (let k = 0; k < members.length; k++){
    var subarray = []
    subarray.push(members[k])
    for (let i = 0; i < 30; i++) {
      const values = document.getElementById(`shifts-${members[k]}-${i+1}`)
      subarray.push(values.value);
    };
    allarray.push(subarray)
    console.log(allarray)
    document.getElementById("all-form").value = allarray;
    // document.getElementById("all-form").innerHTML = `${allarray}`;
    // setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    document.getElementById("send").addEventListener("click", (e) => {
      e.preventDefault()
  
    const form = document.getElementById("all-form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/creates", true);
    XHR.responseType = "json";
    // let hashData = {  // 送信するデータをハッシュ形式で指定
    //   shift: {allarray}  // 入力テキストを送信
    //   // authenticity_token: token  // セキュリティトークンの送信（ここから送信することも可能）
    // };
    console.log(form)
    XHR.send(formData);
    // let data = JSON.stringify(hashData);
    }); // XHR.send(data);
 }
}

  // function days(year, month) {
  //   console.log(new Date(parseInt(year, 10), parseInt(month, 10), 0).getDate());
  //   return new Date(parseInt(year, 10), parseInt(month, 10), 0).getDate();
  // };




window.addEventListener('load', test());

document.getElementById("send").addEventListener("click", send);


// var month = document.getElementById("month").value
// document.getElementById("month").addEventListener("onchange", console.log("hello!!!!!!!"))
