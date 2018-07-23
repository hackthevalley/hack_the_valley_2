function loadAllSponsors(sponsors) {
    for (var i = 0; i < sponsors.length; i++){
        if(sponsors[i].type === 'image'){
            var el = $("<a>");
            el.attr('href', sponsors[i].link);
            var imageEl = $("<img>");
            imageEl.attr('src', sponsors[i].url);
            imageEl.attr('width', sponsors[i].size);
            imageEl.attr('alt', sponsors[i].name);
            if(sponsors[i].style){
                imageEl.attr('style', sponsors[i].style);
            }
            el.append(imageEl);
        } else if (sponsors[i].type === 'separator'){
            var el = $("<h4>");
        } else if (sponsors[i].type === 'linebreak'){
            var el = $("<br>");
        }

        $("#sponsors-container").append(el);
    }
}

$("#email-submit-button").click(function(){
    $(this).text("Please wait ...");
    $.ajax({
        method: "POST",
        data: {
            email: $("#email-input-box").val()
        },
        url:"record-htv2.php",
        success:function(data){
            if(data == 'ok'){
                $("#email-input-box").hide();
                $("#email-submit-button").hide();
                $("#email-thank-you").show();
            } else {
                $("#email-submit-button").text("Submit");
                $("#email-input-box").addClass("err");
            }
        },
        error: function(e){
            $("#email-submit-button").text("Submit");
            $("#email-input-box").addClass("err");
        }
    })
});

$(window).on("load", function () {
    setTimeout(function () {
        window.sr = ScrollReveal({});
        sr.reveal('.reveal');
        // Add smooth scrolling to all links
        $(".navbar-nav li a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
                if($(window).width() < 768){
                    $("#nav-collapse-button").click();
                }
            } // End if
        });

        $(".navbar-brand").on('click', function (event) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: 0
            }, 800, function () {
                window.location.hash = hash;
            });
            if($(window).width() < 768 && $(".navbar-collapse").hasClass("in")){
                $("#nav-collapse-button").click();
            }
        });

        $(".apply-link").on('click', function(event) {
            event.preventDefault();
            $(".typeform-share").click();
        });
        (function () {
            var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName,
                id = "typef_orm_share", b = "https://embed.typeform.com/";
            if (!gi.call(d, id)) {
                js = ce.call(d, "script");
                js.id = id;
                js.src = b + "embed.js";
                q = gt.call(d, "script")[0];
                q.parentNode.insertBefore(js, q)
            }
        })()
    }, 2000);
    setTimeout(function () {
        // Processing.reload();
        $("#initial-load-screen").addClass('loaded');
        if(!is.edge() && !is.ie()){
            $("#intro").addClass("play-animation");
        } else {
            $("#intro").addClass("show-final-edge");
        }
        if(is.ie()){
            alert("Internet Explorer is not fully supported, please use Edge instead.")
        }
        // Load all sponsor images
        loadAllSponsors(allSponsors);
    }, 1000);
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $(".navbar-default").addClass("navbar-small");
    } else {
        $(".navbar-default").removeClass("navbar-small");
    }
});

// Make navigation bar collapse once link was clicked.
$(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse('hide');
});

feather.replace();

$(function () {
    initCalendars();
});

function initCalendars(){
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'GET HYPED!',
                start: '2018-02-23T09:00:00',
                end: '2018-02-23T10:00:00',
                allDay: false,
                color: 'transparent',
                className: 'get-hyped'
            },
            {
                title: '10:30 Bus Leaving from McGill / Concordia. Please arrive 30 minutes in advance.',
                start: '2018-02-23T10:30:00',
                end: '2018-02-23T11:30:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: '1:00 Bus Leaving from uOttawa. Please arrive 30 minutes in advance.',
                start: '2018-02-23T13:00:00',
                end: '2018-02-23T14:00:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: '3:30 Bus Leaving from Queens. Please arrive 30 minutes in advance.',
                start: '2018-02-23T15:00:00',
                end: '2018-02-23T16:00:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: '4:00 Bus Leaving from Waterloo. Please arrive 30 minutes in advance.',
                start: '2018-02-23T16:00:00',
                end: '2018-02-23T17:00:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: 'Registration',
                start: '2018-02-23T18:00:00',
                end: '2018-02-23T21:00:00',
                allDay: false,
                color: '#01579B'
            },
            {
                title: 'Dinner',
                start: '2018-02-23T20:00:00',
                end: '2018-02-23T22:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Opening Ceremony',
                start: '2018-02-23T21:00:00',
                end: '2018-02-23T23:00:00',
                allDay: false,
                color: '#9b3f38'
            },
            {
                title: 'Team Formation & Sponsor Networking',
                start: '2018-02-23T23:00:00',
                end: '2018-02-23T23:30:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: 'Begin Hacking',
                start: '2018-02-24T00:00:00',
                end: '2018-02-24T00:30:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            // #6e7e99
            {
                title: 'Loyalty One Workshop',
                start: '2018-02-23T23:30:00',
                end: '2018-02-24T00:30:00',
                allDay: false,
                color: '#FB8C00',
                className: 'large-event'
            },
            {
                title: 'Midnight Snack',
                start: '2018-02-23T23:30:00',
                end: '2018-02-24T00:30:00',
                allDay: false,
                color: '#0091EA',
                className: 'large-event'
            },
            {
                title: 'Microsoft Workshop',
                start: '2018-02-24T00:30:00',
                end: '2018-02-24T01:30:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'WebSocket Workshop',
                start: '2018-02-24T02:00:00',
                end: '2018-02-24T03:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'TEAM STUDY Workshop',
                start: '2018-02-24T07:30:00',
                end: '2018-02-24T09:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'Breakfast',
                start: '2018-02-24T09:00:00',
                end: '2018-02-24T12:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Coinsquare Workshop',
                start: '2018-02-24T09:00:00',
                end: '2018-02-24T10:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'TransPod Workshop',
                start: '2018-02-24T10:30:00',
                end: '2018-02-24T11:30:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'ConsenSys Workshop',
                start: '2018-02-24T12:00:00',
                end: '2018-02-24T13:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'Loyalty One Challenge',
                start: '2018-02-24T13:30:00',
                end: '2018-02-24T15:30:00',
                allDay: false,
                color: '#0093b7'
            },
            {
                title: 'Lunch',
                start: '2018-02-24T13:00:00',
                end: '2018-02-24T15:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Women In Code Summit',
                start: '2018-02-24T15:30:00',
                end: '2018-02-24T17:30:00',
                allDay: false,
                color: '#0093b7'
            },
            {
                title: 'Dinner',
                start: '2018-02-24T19:00:00',
                end: '2018-02-24T21:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'FDM Group Workshop',
                start: '2018-02-24T17:30:00',
                end: '2018-02-24T18:30:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'SAP Workshop',
                start: '2018-02-24T20:00:00',
                end: '2018-02-24T21:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'SpecifyIt Workshop',
                start: '2018-02-24T21:00:00',
                end: '2018-02-24T22:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'URSPOT Workshop',
                start: '2018-02-24T22:00:00',
                end: '2018-02-24T23:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'Community Activities',
                start: '2018-02-24T23:00:00',
                end: '2018-02-25T00:00:00',
                allDay: false,
                color: '#0093b7'
            },
            {
                title: 'Magician',
                start: '2018-02-24T23:00:00',
                end: '2018-02-25T02:00:00',
                allDay: false,
                color: '#0093b7'
            },
            {
                title: 'Midnight Snack',
                start: '2018-02-24T23:30:00',
                end: '2018-02-25T00:30:00',
                allDay: false,
                color: '#0091EA',
                className: 'large-event'
            },
            {
                title: 'Breakfast',
                start: '2018-02-25T09:00:00',
                end: '2018-02-25T12:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Lunch',
                start: '2018-02-25T12:00:00',
                end: '2018-02-25T14:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Submissions',
                start: '2018-02-25T09:00:00',
                end: '2018-02-25T12:00:00',
                allDay: false,
                color: '#01579B'
            },
            {
                title: 'Demos and Judging',
                start: '2018-02-25T12:00:00',
                end: '2018-02-25T16:00:00',
                allDay: false,
                color: '#01579B'
            },
            {
                title: 'Closing Ceremony',
                start: '2018-02-25T16:00:00',
                end: '2018-02-25T17:00:00',
                allDay: false,
                color: '#9b3f38'
            },
            {
                title: '6:15 Bus Boarding',
                start: '2018-02-25T18:15:00',
                end: '2018-02-25T18:45:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: 'Bus Departure',
                start: '2018-02-25T18:45:00',
                end: '2018-02-25T19:45:00',
                allDay: false,
                color: '#01579B'
            }

        ],
        nowIndicator: true,
        minTime: '00:00:00',
        maxTime: '24:00:00',
        visibleRange: {
            start: '2018-02-23',
            end: '2018-02-26'
        },
        height: 'auto',
        defaultView: 'agenda'
    })

    $('#calendar-day1').fullCalendar({
        googleCalendarApiKey: 'AIzaSyCbN9m7l9uKmPEkEB4L4FcrdZqEaCTyVkM',
        events: [
            {
                title: 'GET HYPED!',
                start: '2018-02-23T09:00:00',
                end: '2018-02-23T10:00:00',
                allDay: false,
                color: 'transparent',
                className: 'get-hyped'
            },
            {
                title: '10:30 Bus Leaving from McGill / Concordia. Please arrive 30 minutes in advance.',
                start: '2018-02-23T10:30:00',
                end: '2018-02-23T11:30:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: '1:00 Bus Leaving from uOttawa. Please arrive 30 minutes in advance.',
                start: '2018-02-23T13:00:00',
                end: '2018-02-23T14:00:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: '3:30 Bus Leaving from Queens. Please arrive 30 minutes in advance.',
                start: '2018-02-23T15:00:00',
                end: '2018-02-23T16:00:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: '4:00 Bus Leaving from Waterloo. Please arrive 30 minutes in advance.',
                start: '2018-02-23T16:00:00',
                end: '2018-02-23T17:00:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: 'Registration',
                start: '2018-02-23T18:00:00',
                end: '2018-02-23T21:00:00',
                allDay: false,
                color: '#01579B'
            },
            {
                title: 'Dinner',
                start: '2018-02-23T20:00:00',
                end: '2018-02-23T22:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Opening Ceremony',
                start: '2018-02-23T21:00:00',
                end: '2018-02-23T23:00:00',
                allDay: false,
                color: '#9b3f38'
            },
            {
                title: 'Loyalty One Workshop',
                start: '2018-02-23T23:30:00',
                end: '2018-02-24T00:30:00',
                allDay: false,
                color: '#FB8C00',
                className: 'large-event'
            },
            {
                title: 'Team Formation',
                start: '2018-02-23T23:00:00',
                end: '2018-02-23T23:30:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: 'Midnight Snack',
                start: '2018-02-23T23:30:00',
                end: '2018-02-24T00:30:00',
                allDay: false,
                color: '#0091EA',
                className: 'large-event'
            }
        ],
        nowIndicator: true,
        minTime: '09:00:00',
        maxTime: '24:00:00',
        visibleRange: {
            start: '2018-02-23',
            end: '2018-02-24'
        },
        height: 'auto',
        defaultView: 'agenda'
    })


    $('#calendar-day2').fullCalendar({
        googleCalendarApiKey: 'AIzaSyCbN9m7l9uKmPEkEB4L4FcrdZqEaCTyVkM',
        events: [
            {
                title: 'Begin Hacking',
                start: '2018-02-24T00:00:00',
                end: '2018-02-24T00:30:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: 'WebSocket Workshop',
                start: '2018-02-24T02:00:00',
                end: '2018-02-24T03:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'TEAM STUDY Workshop',
                start: '2018-02-24T07:30:00',
                end: '2018-02-24T09:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'Breakfast',
                start: '2018-02-24T09:00:00',
                end: '2018-02-24T12:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Coinsquare Workshop',
                start: '2018-02-24T09:00:00',
                end: '2018-02-24T10:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'TransPod Workshop',
                start: '2018-02-24T10:30:00',
                end: '2018-02-24T11:30:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'ConsenSys Workshop',
                start: '2018-02-24T12:00:00',
                end: '2018-02-24T13:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'Lunch',
                start: '2018-02-24T13:00:00',
                end: '2018-02-24T15:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Dinner',
                start: '2018-02-24T19:00:00',
                end: '2018-02-24T21:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Microsoft Workshop',
                start: '2018-02-24T00:30:00',
                end: '2018-02-24T01:30:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'Loyalty One Challenge',
                start: '2018-02-24T13:30:00',
                end: '2018-02-24T15:30:00',
                allDay: false,
                color: '#0093b7'
            },
            {
                title: 'Women In Code Summit',
                start: '2018-02-24T15:30:00',
                end: '2018-02-24T17:30:00',
                allDay: false,
                color: '#0093b7'
            },
            {
                title: 'SAP Workshop',
                start: '2018-02-24T20:00:00',
                end: '2018-02-24T21:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'SpecifyIt Workshop',
                start: '2018-02-24T21:00:00',
                end: '2018-02-24T22:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'URSPOT Workshop',
                start: '2018-02-24T22:00:00',
                end: '2018-02-24T23:00:00',
                allDay: false,
                color: '#FB8C00'
            },
            {
                title: 'Community Activities',
                start: '2018-02-24T23:00:00',
                end: '2018-02-25T00:00:00',
                allDay: false,
                color: '#0093b7'
            },
            {
                title: 'Magician',
                start: '2018-02-24T23:00:00',
                end: '2018-02-25T02:00:00',
                allDay: false,
                color: '#0093b7'
            },
            {
                title: 'Midnight Snack',
                start: '2018-02-24T23:30:00',
                end: '2018-02-25T00:30:00',
                allDay: false,
                color: '#0091EA',
                className: 'large-event'
            },
            {
                title: 'FDM Group Workshop',
                start: '2018-02-24T17:30:00',
                end: '2018-02-24T18:30:00',
                allDay: false,
                color: '#FB8C00'
            }
        ],
        nowIndicator: true,
        minTime: '00:00:00',
        maxTime: '24:00:00',
        visibleRange: {
            start: '2018-02-24',
            end: '2018-02-25'
        },
        height: 'auto',
        defaultView: 'agenda'
    })

    $('#calendar-day3').fullCalendar({
        googleCalendarApiKey: 'AIzaSyCbN9m7l9uKmPEkEB4L4FcrdZqEaCTyVkM',
        events: [
            {
                title: 'Breakfast',
                start: '2018-02-25T09:00:00',
                end: '2018-02-25T12:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Lunch',
                start: '2018-02-25T12:00:00',
                end: '2018-02-25T14:00:00',
                allDay: false,
                color: '#0091EA'
            },
            {
                title: 'Submissions',
                start: '2018-02-25T09:00:00',
                end: '2018-02-25T12:00:00',
                allDay: false,
                color: '#01579B'
            },
            {
                title: 'Demos and Judging',
                start: '2018-02-25T12:00:00',
                end: '2018-02-25T16:00:00',
                allDay: false,
                color: '#01579B'
            },
            {
                title: 'Closing Ceremony',
                start: '2018-02-25T16:00:00',
                end: '2018-02-25T17:00:00',
                allDay: false,
                color: '#9b3f38'
            },
            {
                title: '6:15 Bus Boarding',
                start: '2018-02-25T18:15:00',
                end: '2018-02-25T18:45:00',
                allDay: false,
                color: '#01579B',
                className: 'begin-hacking'
            },
            {
                title: 'Bus Departure',
                start: '2018-02-25T18:45:00',
                end: '2018-02-25T19:45:00',
                allDay: false,
                color: '#01579B'
            }
        ],
        nowIndicator: true,
        minTime: '09:00:00',
        maxTime: '20:00:00',
        visibleRange: {
            start: '2018-02-25',
            end: '2018-02-26'
        },
        height: 'auto',
        defaultView: 'agenda'
    })
}