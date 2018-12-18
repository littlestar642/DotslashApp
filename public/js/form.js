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

db.settings({
  timestampsInSnapshots: true
});

function modalShow() {
  Swal({
    title: `<h2>Instructions!</h2>`,
    html: `<ol>
    <li><b>1. </b>Please ensure that all the team members are from the same college. We do not allow teams formed
      across colleges.</li>
    <li><b>2. </b>You can have at max 3 members in every team. Minimum is one😉</li>
    <li><b>3.</b> Every URL in the form accepts links that starts with <code>https://</code> or <code>http://</code>
      to ensure security.</li>
    <li><b>4.</b> You are not allowed to submit multiple forms and your first entry will only be considered as
      valid. Please be very sure before you submit!</li>
    <li><b>5.</b> You can also give a google doc with your professional details in case you dont have a resume. Nevertheless a resume is preferred.</li>
    <li><b>6.</b> In case of any query feel free to contact us at <code>contact@hackdotslash.co.in</code></li>
  </ol>`,
    type: 'info',
    confirmButtonText: 'Cool'
  })
}
window.onload = () => {
  modalShow();
}
jQuery(document).ready(function ($) {
  let alterClass = function () {
    let ww = document.body.clientWidth;
    if (ww < 600) {
      $('.res').removeClass('s6').addClass('s12');
    } else if (ww >= 601) {
      $('.res').removeClass('s12').addClass('s6');
    };
  };
  $(window).resize(function () {
    alterClass();
  });
  alterClass();

  $('#instructions').on('click', function () {
    modalShow();
  })

  $('#nextMem').on('change',(e)=>{
    let mem2=$('.member2');
    if(e.target.checked===true){
    mem2.removeClass('hidden');
    $('#full_name2').prop('required','true');
    $('#dob2').prop('required','true');
    $('#email2').prop('required','true');
    $('#your_mob2').prop('required','true');
    $('#resume_url2').prop('required','true');
    $('#git_url2').prop('required','true');
    $('#tShirt2').prop('required','true');
    }
    else{
    $('.member2 input').val('');
    $('.member2 select').val('');
    $('#full_name2').prop('required','');
    $('#dob2').prop('required','');
    $('#email2').prop('required','');
    $('#your_mob2').prop('required','');
    $('#resume_url2').prop('required','');
    $('#git_url2').prop('required','');
    $('#tShirt2').prop('required','');
    mem2.addClass('hidden');
    }
  })
  $('#nextMem2').on('change',(e)=>{
    let mem3=$('.member3');
    if(e.target.checked===true){
    mem3.removeClass('hidden');
    $('#full_name3').prop('required','true');
    $('#dob3').prop('required','true');
    $('#email3').prop('required','true');
    $('#your_mob3').prop('required','true');
    $('#resume_url3').prop('required','true');
    $('#git_url3').prop('required','true');
    $('#tShirt3').prop('required','true');    
    }
    else{
    $('.member3 input').val('');
    $('.member3 select').val('');
    $('#full_name3').prop('required','');
    $('#dob3').prop('required','');
    $('#email3').prop('required','');
    $('#your_mob3').prop('required','');
    $('#resume_url3').prop('required','');
    $('#git_url3').prop('required','');
    $('#tShirt3').prop('required','');
    mem3.addClass('hidden');
    
    }
  })


  $('#form').on('submit', (e) => {
    e.preventDefault();
    let teamName = $('#team_name').val() || 'none';
    let collegeName = $('#coll_name').val() || 'none';

    let fname1 = $('#full_name1').val();
    let dob1 = $('#dob1').val() || 'none';
    let selGen1 = $('#select1').val() || 'none';
    let email1 = $('#email1').val() || 'none';
    let mob1 = $('#your_mob1').val() || 'none';
    let git1 = $('#git_url1').val() || 'none';
    let link1 = $('#link_url1').val() || 'none';
    let twit1 = $('#twit_url1').val() || 'none';
    let face1 = $('#face_url1').val() || 'none';
    let tShirt1 = $('#tshirt1').val() || 'none';

    let fname2 = $('#full_name2').val() || 'none';
    let dob2 = $('#dob2').val() || 'none';
    let selGen2 = $('#select2').val() || 'none';
    let email2 = $('#email2').val() || 'none';
    let mob2 = $('#your_mob2').val() || 'none';
    let git2 = $('#git_url2').val() || 'none';
    let link2 = $('#link_url2').val() || 'none';
    let twit2 = $('#twit_url2').val() || 'none';
    let face2 = $('#face_url2').val() || 'none';
    let tShirt2 = $('#tshirt2').val() || 'none';

    let fname3 = $('#full_name3').val() || 'none';
    let dob3 = $('#dob3').val() || 'none';
    let selGen3 = $('#select3').val() || 'none';
    let email3 = $('#email3').val() || 'none';
    let mob3 = $('#your_mob3').val() || 'none';
    let git3 = $('#git_url3').val() || 'none';
    let link3 = $('#link_url3').val() || 'none';
    let twit3 = $('#twit_url3').val() || 'none';
    let face3 = $('#face_url3').val() || 'none';
    let tShirt3 = $('#tshirt3').val() || 'none';
    let firstTime = 'yes';
    if (document.querySelector('#test1').checked) radioval = 'yes'
    else if (document.querySelector('#test2').checked) radioval = 'no';
    else {
      alert('Please Tell Us whether you are new to hackathons!');
      return;
    }

    let needs = $('#textarea1').val() || 'none';
    let heardFrom = $('#textarea2').val() || 'none';

    swal({
      title:'<h2>Submission</h2>',
      html:`<h3>Are you sure you want to submit?</h3>`,
      type:'warning',
      confirmButtonText:'Yes',
      showCancelButton:true,
      allowEnterKey:false
    }).then((val)=>{
      if(val.value===true){
        db.collection("users").add({
          teamName,
          collegeName,
          members: [{
              fname1,
              dob1,
              selGen1,
              email1,
              mob1,
              git1,
              link1,
              twit1,
              face1,
              tShirt1
            },
            {
              fname2,
              dob2,
              selGen2,
              email2,
              mob2,
              git2,
              link2,
              twit2,
              face2,
              tShirt2
            },
            {
              fname3,
              dob3,
              selGen3,
              email3,
              mob3,
              git3,
              link3,
              twit3,
              face3,
              tShirt3
            }
          ],
          needs,
          heardFrom,
          firstTime
  
        })
        .then(function (docRef) {
          Swal({
            title: 'Success!',
            text: 'We recieved your form! Thank you for your participation',
            type: 'success',
            confirmButtonText: 'Cool'
          }).then(() => {
            document.location.href = '/';
          })
        })
        .catch(function (error) {
          alert('The Document was not uploaded. Please check your internet or browser console for more information.');
          console.log(error)
          return;
        });
      }
      
    })

    
    return;
  })
});
