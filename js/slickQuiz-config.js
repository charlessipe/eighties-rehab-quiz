// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your 80's Addiction",
        "main":    "<p>Test Your 80's Addiction</p>",
        "results": "<h5>Learn More</h5><p> Knowing is half the battle. Call 1-800-867-5309</p>",
        "level1":  "<img src='http://a.abcnews.com/images/Entertainment/gty_bobbi_brown_whitney_houston_1990_thg_120214_wb.jpg' width='200'><br> You definitely need rehab. – Whitney Huston & Bobby Brown",
        "level2":  "<img src='http://a.abcnews.com/images/Entertainment/gty_bobbi_brown_whitney_houston_1990_thg_120214_wb.jpg' width='200'><br>You definitely need rehab. – Whitney Huston & Bobby Brown",
        "level3":  "<img src='http://static1.squarespace.com/static/51eea5d9e4b043a4d2d90913/t/534ca046e4b06166e4d4d763/1397530695237/20120708-ss-denim-timeline-2001-britney-spears-justin-timberlake.jpg' width='200'><br>Careful, you are on the fence – Justin Timberlake & Britney Spears",
        "level4":  "<img src='http://i.huffpost.com/gen/2587700/images/o-KIMYE-GRAMMYS-facebook.jpg' width='200'><br>You modern AF. #norehabneeded  Kimye",
        "level5":  "<img src='http://i.huffpost.com/gen/2587700/images/o-KIMYE-GRAMMYS-facebook.jpg' width='200'><br>You modern AF. #norehabneeded  Kimye" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Bret Michaels: Who is this person?" + "<img src='http://65.media.tumblr.com/31d2ca3983930d91dbe80592544e2bc6/tumblr_n87gusdAS71tf8myho1_1280.jpg' width='200'>",
            "a": [
                {"option": " He is the star of Rock of Love.",      "correct": true},
                {"option": "He is the lead singer of the hit band Poison.",     "correct": false},
                {"option": " I don’t know what you are talking about.",      "correct": false}
                
            ],
            "img": "https://en.wikipedia.org/wiki/Nintendo_Entertainment_System#/media/File:NES-Console-Set.png",
            "correct": "<p><span>Tubular!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Cassettes- What do you groove to?" + "<img src='http://columbiaisa.50webs.com/cassette_tape_sony.jpg' width='200'>",
            "a": [
                {"option": "  I love my mixed tapes", "correct": true},
                {"option": "My scratched CDs",   "correct": false},
                {"option": " I don’t know what you are talking about. Is it a station on Spotify?",   "correct": false}  
                
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> </p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Matthew Broderick – Who is this person?" + "<img src='https://upload.wikimedia.org/wikipedia/commons/d/dd/Matthew_Broderick_2012.jpg' width='200'>",
            "a": [
                {"option": " That is Ferris’ Buhler",           "correct": true},
                {"option": " That is Carrie Bradshaw’s husband",                  "correct": false},
                {"option": "  That is the dude from the Producers",  "correct": false}
            ],
            "correct": "<p><span>Rad!</span> </p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "Tell me what this is?" + "<img src='http://cdn1-www.comingsoon.net/assets/uploads/2009/07/file_56857_0_viewmastermovie.jpg' width='200'>",
            "a": [
                {"option": "View Master",    "correct": true},
                {"option": "Nintendo Virtual Boy",     "correct": false},
                {"option": "Google Glass",      "correct": false}
            ],
            "correct": "<p><span>Holy bananas!</span> </p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "Phone: What do you think of Zach’s new phone?" + "<img src='https://s-media-cache-ak0.pinimg.com/736x/86/ad/98/86ad98f95abc54a2286227978629f7b8.jpg' width='200'>",
            "a": [
                {"option": "I can call my mom from anywhere on my sweet cellular phone.",    "correct": true},
                {"option": "Does that thing have ringtones and Snake?",     "correct": false},
                {"option": "Why does this phone have buttons?",      "correct": false}
            ],
            "correct": "<p><span>Gnarly!</span></p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
