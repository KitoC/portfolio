// Script for the live time at the top.
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  if (h > 12) {
    h = h - 12
    var p = "pm"
  } else {
    p = "am"
  };
  document.getElementById('time').innerHTML =
    h + ":" + m + p;

  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }; // add zero in front of numbers < 10
  return i;
}

let homeClick = false;


function hintBox() {
  setTimeout(function () {

    if ($(document).width() >= 600) {
      if (!homeClick) {
        $('.info-box').addClass('info-b-active')
      }
    }

  }, 3000)
}


// if ($(document).width() >= 600) {
//   $(".project-scr").addClass('not-phone');
// }


//  This is the script for the loading screen and home button function.
let showLoading = true;
$(document).ready(function () {
  $(".home").click(function () {
    homeClick = true;
    if (showLoading) {
      $(".loading-screen").addClass('active');
      $(".bin").addClass('b');
      $(".n").addClass('name');
      $(".scroll").addClass('innerIam');
      $(".info-box").removeClass('info-b-active')
      setTimeout(function () {
        $(".home-screen").addClass('active');
        $(".loading-screen").removeClass('active');
        if (showLoading) {
          $(".headGrid").removeClass('hide');
        }

      }, 14000);
    } else {
      $(".home-screen").addClass('active')
      $(".tag").removeClass('tag_show');
      $(".gallery-screen").removeClass('active')
      $(".about-screen").removeClass('active')
      $(".portfolio-screen").removeClass('active')
      $(".contact-screen").removeClass('active')
      $(".project-screen").removeClass('active')
      $(".headGrid").removeClass('batt_black')
      $(".headGrid").removeClass('hide')
      $(".info-box").removeClass('info-b-active')
      $(".projects").removeClass('projects-active')
      $(".project-tiles").removeClass('home-projects-active')
      $(".full-bg-blur").removeClass('bg-blur-active')
      $(".tile-title").removeClass('tt-show')
      $(".h-b-title").removeClass('hide')
      // $('.project-images, .project-text').children().remove()

      if (orient === false) {
        $('.center').addClass('portraitC');
        $('.screen').addClass('portraitS');
        $('.polaroid-container').removeClass('add-flex');

        orient = true
      }


    }
    showLoading = false;
  });
});

// script for gallery button
$(document).ready(function () {
  $(".gallery").click(function () {
    $(".gallery-screen").addClass('active')
    $(".headGrid").addClass('batt_black')
    $(".home-screen").removeClass('active')
  });
});

// script for project button
let project_index = null



$(document).ready(function () {
  $(".project-close-b").click(function () {
    $(".project-screen").removeClass('active')
    // $('.project-images, .project-text').children().remove()
    $(".headGrid").addClass('hide')
    $(".tag").removeClass('tag_show');
    if (orient === false) {
      $('.center').addClass('portraitC');
      $('.screen').addClass('portraitS');
      $('.polaroid-container').removeClass('add-flex');

      orient = true
    }

  });
});


// script for notes button
$(document).ready(function () {
  $(".about").click(function () {
    $(".about-screen").addClass('active')
    $(".headGrid").addClass('batt_black')
    $(".homeS").removeClass('active')
  });
});

// script for contact details button
$(document).ready(function () {
  $(".contact").click(function () {
    $(".contact-screen").addClass('active')
    $(".headGrid").addClass('batt_black')
    $(".home-screen").removeClass('active')
  });
});

// script for project tile button
$(document).ready(function () {
  $(".project-b-overlay, .full-bg-blur, .tt").click(function () {
    $(".projects").toggleClass('projects-active')
    $(".project-tiles").toggleClass('home-projects-active')
    $(".full-bg-blur").toggleClass('bg-blur-active')
    $(".headGrid").toggleClass('hide')
    $(".tile-title").toggleClass('tt-show')
    $(".h-b-title").toggleClass('hide')
    $(".projects-below").fadeToggle(2000)
  });
});

// script for tech-stack button
$(document).ready(function () {
  $(".skillset, .tt").click(function () {
    $(".skillset").toggleClass('projects-active')
    // $(".project-tiles").toggleClass('home-projects-active')
    // $(".full-bg-blur").toggleClass('bg-blur-active')
    $(".headGrid").toggleClass('hide')
    $(".tile-title").toggleClass('tt-show')
    $(".h-b-title").toggleClass('hide')
    $(".skilset-below").fadeToggle(2000)
  });
});
$(document).ready(function(){
  $(".under-construction").click(function(){
    $(".under-construction").fadeOut(1000)
  })
})



// script for orientation button
orient = true;
$(document).ready(function () {
  $(".tag").click(function () {
    if ((orient)) {
      $('.center').addClass('landscapeC');
      $('.screen').addClass('landscapeS');
      $(".headGrid").addClass('hide')
      $('.polaroid-container').addClass('add-flex');
      $('.center').removeClass('portraitC');
      $('.screen').removeClass('portraitS');
      orient = false
    } else {
      $('.center').removeClass('landscapeC');
      $('.screen').removeClass('landscapeS');
      $(".headGrid").removeClass('hide')
      $('.polaroid-container').removeClass('add-flex');
      $('.center').addClass('portraitC');
      $('.screen').addClass('portraitS');
      orient = true
    }
  });
});

// script for image toggle

$(document).ready(function () {
  $('.i-one').click(function () {
    $('.project-images').addClass('left-f')
    $('.project-images').removeClass('right-f')
    $('.project-images').removeClass('middle-f')
  })
  $('.i-two').click(function () {
    $('.project-images').addClass('middle-f')
    $('.project-images').removeClass('right-f')
    $('.project-images').removeClass('left-f')
  })
  $('.i-three').click(function () {
    $('.project-images').addClass('right-f')
    $('.project-images').removeClass('middle-f')
    $('.project-images').removeClass('left-f')
  })

});


const home = new Vue({
  el: '#home',
  data: {
    allProjects: projects_arr
  },
  methods: {
    projectOverlay: function (project) {
  
      projectScreen.currentProjectLink = project.link,
      projectScreen.currentLinkTag = project.linkTag,
      projectScreen.currentText = project.description,
      projectScreen.currentProjectImages = project.image,
      projectScreen.currentId = project.id,
      projectScreen.title = project.title,
      projectScreen.color = project.color


      $(".project-screen").addClass('active')
      $(".tag").addClass('tag_show')
      $(".headGrid").addClass('hide')
    }
  }
})

const projectScreen = new Vue({
  el: '#projectScreen',
  data: {
    currentProjectLink:null,
    currentLinkTag: null,
    currentText: null,
    currentProjectImages: null,
    currentId: null,
    title: null,
    color: null
  }
})