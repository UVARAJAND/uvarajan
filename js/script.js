// var nav_bar=document.querySelector(".contents");
// document.addEventListener("DOMContentLoaded", function() {
//     const text = document.querySelector(".change");
    
//     if (!text) {
//         console.error("Element with class 'change' not found!");
//         return;
//     }

//     const load = () => {
//         setTimeout(() => {
//             text.textContent = "Web Developer";
//         }, 0);
//         setTimeout(() => {
//             text.textContent = "CSE Student";
//         }, 4000);
//     };

//     load();
//     setInterval(load, 6000);
//     });
function updateYear() {
    var currentYear = new Date().getFullYear(); // Get the current year
    document.getElementById('year').textContent = currentYear; // Update the content of an element with id 'year'
  }
  window.onload = function() {
    updateYear();
  };
function addAnimation() {
    var topic = document.querySelector(".education_topic");
    var topic_name=document.getElementById("topic_name");
    var skill=document.querySelector(".skills_topic");
    var skill_name=document.getElementById("skill_topic");
    // var nav_bar=document.querySelector(".contents");
    topic.classList.add("education_topic_add");
    skill.classList.add("skills_topic_add");
    skill_name.textContent="WHAT CAN I DO";
    // nav_bar.classList.add("contents_animation");
    topic_name.textContent="EDUCATION";
    // nav_bar.classList.add("contents_animation");
}

function removeAnimation() {
    var topic = document.querySelector(".education_topic");
    topic.classList.remove("education_topic_add");
    var topic_name=document.getElementById("topic_name");
    topic_name.textContent="";
    var skill=document.querySelector(".skills_topic");
    var skill_name=document.getElementById("skill_topic");
    skill.classList.remove("skills_topic_add");
    skill_name.textContent="WHAT CAN I DO";
    // var topic = document.querySelector(".topics");
    // var nav_bar=document.querySelector(".contents");
    // topic.classList.remove("topics_animation_add");
    // var topic_name=document.getElementById("topic");
    // nav_bar.classList.remove("contents_animation");
    // topic_name.textContent="";
    // nav_bar.classList.remove("contents_animation");
}
window.addEventListener('load', function () {
    // Display the loader for 3 seconds
    setTimeout(function() {
      // Hide the loader
      document.getElementById('loader').style.display = 'none';
      // Show the main content
      document.getElementById('content').style.display = 'flex';

    }, 3000);
    // document.getElementById('content').style.scale = 1; // 3000 milliseconds = 3 seconds
  });
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 100 && scrollPosition < 1350){
        addAnimation();
    }
    else{
        removeAnimation();
        // nav_bar.classList.remove("contents_animation");
    }
    // else if (scrollPosition >= 650 && scrollPosition < 700) {
    //     removeAnimation();
    // } else if (scrollPosition >= 700 && scrollPosition < 1350) {
    //     addAnimation();
    //     // nav_bar.classList.add("contents_animation");
    // } else if (scrollPosition >= 1350 && scrollPosition < 1400) {
    //     removeAnimation();
    //     // nav_bar.classList.remove("contents_animation");
    // } else if (scrollPosition >= 1400 && scrollPosition < 2050) {
    //     addAnimation("PROJECTS");
    //     // nav_bar.classList.add("contents_animation");
    // } else if (scrollPosition >= 2050 && scrollPosition < 2100) {
    //     removeAnimation();
    //     // nav_bar.classList.remove("contents_animation");
    // } else if (scrollPosition >= 2100 && scrollPosition < 2800) {
    //     addAnimation("CONTACT");
        // nav_bar.classList.add("contents_animation");
    // }
    
});
    // Wait for the page to fully load


