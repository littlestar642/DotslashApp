var config = {
  apiKey: "AIzaSyCGETuuyifSjRxXjjLJsiXLHPZTvR2hWrA",
  authDomain: "dotslashdb.firebaseapp.com",
  databaseURL: "https://dotslashdb.firebaseio.com",
  projectId: "dotslashdb",
  storageBucket: "dotslashdb.appspot.com",
  messagingSenderId: "868174794203"
};
firebase.initializeApp(config);
let db = firebase.firestore();


$('#form').on('submit', (e) => {

  let tName = $('#team_name').val();
  let collName = $('#coll_name').val();

  let fname1 = $('#full_name1').val();
  let dob1 = $('#dob1').val();
  let sel1 = $('#select1').val();
  let email1 = $('#email1').val();
  let mob1 = $('#your_mob1').val();
  let git1 = $('#git_url1').val();
  let link1 = $('#link_url1').val();
  let twit1 = $('#twit_url1').val();
  let face1 = $('#face_url1').val();

  let fname2 = $('#full_name2').val();
  let dob2 = $('#dob2').val();
  let sel2 = $('#select2').val();
  let email2 = $('#email2').val();
  let mob2 = $('#your_mob2').val();
  let git2 = $('#git_url2').val();
  let link2 = $('#link_url2').val();
  let twit2 = $('#twit_url2').val();
  let face2 = $('#face_url2').val();

  let fname3 = $('#full_name3').val();
  let dob3 = $('#dob3').val();
  let sel3 = $('#select3').val();
  let email3 = $('#email3').val();
  let mob3 = $('#your_mob3').val();
  let git3 = $('#git_url3').val();
  let link3 = $('#link_url3').val();
  let twit3 = $('#twit_url3').val();
  let face3 = $('#face_url3').val();
  let radioval=1;
  if(document.querySelector('#test1').checked)radioval=1
  else if(document.querySelector('#test2').checked)radioval=0;
  else {alert('Please Tell Us whether you are new to hackathons!');return;}

  let txtArea1=$('#textarea1').val();
  let txtArea2=$('#textarea2').val();

  db.collection("users").add({
      tName,
      collName,
      members: [{
          fname1,
          dob1,
          sel1,
          email1,
          mob1,
          git1,
          link1,
          twit1,
          face1
        },
        {
          fname2,
          dob2,
          sel2,
          email2,
          mob2,
          git2,
          link2,
          twit2,
          face2
        },
        {
          fname3,
          dob3,
          sel3,
          email3,
          mob3,
          git3,
          link3,
          twit3,
          face3
        }
      ]

    })
    .then(function (docRef) {
        Swal({
            title: 'Success!',
            text: 'We recieved your form! Thank you for your participation',
            type: 'success',
            confirmButtonText: 'Cool'
          })
    })
    .catch(function (error) {
      alert('The Document was not uploaded. Please check your internet or browser console for more information.');
      console.log(error)
      return;
    });






  e.preventDefault();

})
