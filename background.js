var nameOfPersonToAskToProm = "Alice";
var nameOfPersonAskingToProm = "Bob";

var forcedQuestion = nameOfPersonToAskToProm + ", will you go to prom with me?";
var forcedAnswers = ["No","Yes","No","No"];
var forcedCorrectAnswer = 1;
var forcedQuestionAuthor = nameOfPersonAskingToProm;
var forcedOpponent = nameOfPersonToAskToProm;
var forcedQuestionCategory = "ENTERTAINMENT";

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(details.url.indexOf("/games/") !== -1) {
            console.log(details.url);

            var forcedQuestionId = Math.random(99999999);
            
            var forcedResponse = {
                "id": 1780160926,
                "opponent": {
                    "id": 81568268,
                    "alerts_count": 0,
                    "username": "the4thnoelle",
                    "facebook_id": "594978674",
                    "facebook_name": forcedOpponent,
                    "fb_show_picture": false,
                    "fb_show_name": true,
                    "allow_og_posts": true,
                    "level_data": {
                        "level": 35
                    }
                },
                "game_status": "ACTIVE",
                "language": "EN",
                "created": "01/16/2015 12:10:00 EST",
                "last_turn": "01/18/2015 16:53:09 EST",
                "type": "NORMAL",
                "expiration_date": "01/21/2015 16:53:09 EST",
                "my_turn": true, 
                "statistics": {
                    "player_one_statistics": {
                        "category_questions": [{
                            "category": "HISTORY",
                            "correct": 4,
                            "incorrect": 1,
                            "worst": false
                        },
                        {
                            "category": "SPORTS",
                            "correct": 0,
                            "incorrect": 1,
                            "worst": false
                        },
                        {
                            "category": "ENTERTAINMENT",
                            "correct": 2,
                            "incorrect": 1,
                            "worst": false
                        },
                        {
                            "category": "GEOGRAPHY",
                            "correct": 1,
                            "incorrect": 0,
                            "worst": false
                        },
                        {
                            "category": "SCIENCE",
                            "correct": 3,
                            "incorrect": 1,
                            "worst": false
                        }],
                        "correct_answers": 10,
                        "incorrect_answers": 4,
                        "challenges_won": 0,
                        "questions_answered": 14,
                        "crowns_won": 4
                    },
                    "player_two_statistics": {
                        "category_questions": [{
                            "category": "HISTORY",
                            "correct": 0,
                            "incorrect": 1,
                            "worst": true,
                            "performance": 0
                        },
                        {
                            "category": "SPORTS",
                            "correct": 1,
                            "incorrect": 1,
                            "worst": false
                        },
                        {
                            "category": "ENTERTAINMENT",
                            "correct": 2,
                            "incorrect": 0,
                            "worst": false
                        },
                        {
                            "category": "ARTS",
                            "correct": 1,
                            "incorrect": 0,
                            "worst": false
                        },
                        {
                            "category": "GEOGRAPHY",
                            "correct": 1,
                            "incorrect": 1,
                            "worst": false
                        },
                        {
                            "category": "SCIENCE",
                            "correct": 1,
                            "incorrect": 0,
                            "worst": false
                        }],
                        "correct_answers": 6,
                        "incorrect_answers": 3,
                        "challenges_won": 0,
                        "questions_answered": 9,
                        "crowns_won": 1
                    }
                },
                "duelGameType": false,
                "normalType": true,
                "spins_data": {
                    "spins": [{
                        "type": "NORMAL",
                        "worst": true,
                        "performance": 71,
                        "questions": [{
                            "question": {
                                "id": forcedQuestionId,
                                "category": forcedQuestionCategory,
                                "text": forcedQuestion,
                                "answers": forcedAnswers,
                                "author": {
                                    "id": 74177799,
                                    "name": forcedQuestionAuthor,
                                    "username": "chardra.mcbride",
                                    "facebook_id": "505783772",
                                    "facebook_name": forcedQuestionAuthor,
                                    "fb_show_picture": false,
                                    "fb_show_name": true
                                },
                                "correct_answer": forcedCorrectAnswer,
                                "media_type": "NORMAL"
                            },
                            "powerup_question": {
                                "id": 23852548,
                                "category": "HISTORY",
                                "text": "How did Marie Antoinette, wife of Louis XVI, die?",
                                "answers": ["Drowned", "Tuberculosis", "Beheaded", "Childbirth"],
                                "author": {
                                    "id": 103960059,
                                    "name": "Lethal Wiggins",
                                    "username": "dinomom13",
                                    "facebook_id": "1118652973",
                                    "facebook_name": "Lethal Wiggins",
                                    "fb_show_picture": true,
                                    "fb_show_name": true
                                },
                                "correct_answer": 2,
                                "media_type": "NORMAL"
                            }
                        }]
                    }]
                },
                "available_crowns": ["HISTORY", "ARTS", "ENTERTAINMENT", "SPORTS", "GEOGRAPHY"],
                "my_player_number": 2,
                "available_extra_shots": 1,
                "player_one": {
                    "charges": 1,
                    "crowns": ["HISTORY", "ENTERTAINMENT", "GEOGRAPHY", "SCIENCE"]
                }, "player_two": {
                    "charges": 2,
                    "crowns": ["SCIENCE"]
                }, "round_number": 4,
                "sub_status": "P2_WAITING_TURN",
                "previous_sub_status": "P1_PLAYING_TURN",
                "is_random": false,
                "unread_messages": 0,
                "status_version": 23,
                "my_level_data": {
                    "level": 32,
                    "points": 581,
                    "progress": 67,
                    "goal_points": 592,
                    "level_up": false
                }
            };

            var newUrl = "data:text/json;," + JSON.stringify(forcedResponse);

            return {
                redirectUrl: newUrl
            };
        }
    },
    {
        urls: ["*://api.preguntados.com/api/users/*"]
    },
    ["blocking"]
);