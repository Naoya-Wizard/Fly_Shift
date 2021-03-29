// function count(){
//     document.getElementById("mainhtml").insertAdjacentHTML('beforeEnd', `<div class="days" id="days">
//     </div>
//     <div class="members">
//       <p class="member" id="intomember0"></p>
//     </div>
//     <div class="members">
//       <p class="member" id="intomember1"></p>
//     </div>
//      <div class="members">
//       <p class="member" id="intomember2"></p>
//     </div>
//      <div class="members">
//       <p class="member" id="intomember3"></p>
//     </div>
//      <div class="members">
//       <p class="member" id="intomember4"></p>
//     </div>
//      <div class="members">
//       <p class="member" id="intomember5"></p>
//     </div>
//      <div class="members">
//       <p class="member" id="intomember6"></p>
//     </div>
//      <div class="members">
//       <p class="member" id="intomember7"></p>
//     </div>`)
//     for (let i = 0; i < 30; i++) {
//       document.getElementById("days").insertAdjacentHTML('beforeEnd', `<div class="day">${i+1}</div>`)
//     };
// };

window.addEventListener('load', test());
// const Hannei = document.getElementById("hannei")
// Hannei.addEventListener('click', test2());

function test(){
  for (let i = 0; i < 30; i++) {
    document.getElementById("test").insertAdjacentHTML('beforeEnd', `<th class="fixed02">${i+1}日</th>`)
  };
};

//   function test2(){
//     const memberID = document.getElementById("test2");
//     const Hannei = document.getElementById("hannei")
//     Hannei.addEventListener('click', yyy(){
//       for (let i = 0; i < 7; i++) {
//         memberID.insertAdjacentHTML('afterend','<td><select><option >---</option><option >A</option><option >B</option><option >C</option><option >D</option><option >A(当)</option><option >A/休</option><option >休</option><option >特休</option><option >有休</option></select></td>');
//       };
//     })
    
//     document.getElementById('member1').value = ''
//     document.getElementById("count").innerHTML = `${countUpValue}人追加/8人まで`;
// };

document.getElementById("send").addEventListener("click", send);
// window.addEventListener("click", send);

function send(){
  console.log("hello")
  const values = document.getElementById("shift1")
  console.log(values.value)
}
// document.getElementById("hannei").addEventListener("click", )