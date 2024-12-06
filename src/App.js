import React, { useEffect, useState } from "react";

import { Widget, addResponseMessage, toggleMsgLoader } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import ChatService from "./services/ChatService";
import Portfolio from "./components/Portfolio";
// import "./App.css";

function App() {

  // This is the username and password of the user. 
  const apiKey = process.env.REACT_APP_API_KEY;
  const token = process.env.REACT_APP_TOKEN;
  const apiUrl = 'https://integrations-rqq3utixqq-uc.a.run.app'; //url. 

  // these should be in an .env file

  const chatService = new ChatService(apiUrl, apiKey, token);

  let userInformation = {
    "userInformation": {
      "id": 44,
      "first_name": "Zac",
      "last_name": "Sangeeth",
      "portfolio_id": 44,
      "position": "History Enthusiast, Best Selling Author and Public Speaker.",
      "headline": "Zac Sangeeth, 8th Grade, Headstart Educational Academy, Bangalore.",
      "passion": "Making History accessible and interesting for everyone.",
      "achievement": "One of the youngest historians in the world. Author of 3 best sellers - published by Penguin and Hachette. Youngest KECTIL Global Fellow.",
      "language": "English",
      "country": "India",
      "school_name": "The Doon School",
      "school_id": 11,
      "country_id": 101,
      "mobile_code_id": 101,
      "phone_code": "91",
      "mobile_number": "234567858",
      "email": "zac.sangeeth@gmail.com",
      "dob": "2011-02-17",
      "user_name": "zac-sangeeth",
      "referral_code": "ZS1404",
      "image": "zac-sangeeth378.jpg",
      "logo": "https:\/\/ifspd.s3.ap-south-1.amazonaws.com\/uploads\/portfolio\/zac-sangeeth378.jpg",
      "doc_url": "https:\/\/ifspd.s3.ap-south-1.amazonaws.com\/uploads\/portfolio\/",
      "glosco_data": [],
      "glosco_session": [],
      "recommend_details": [
        {
          "recom_id": 2,
          "user_id": 44,
          "email": "sn@snmentoring.com",
          "name": "Saurabh Nanda",
          "designation": "CEO and Founder, SN Mentoring; Founder of Such Conversations Matter Youth Fellowship",
          "relationship": "Zac has been a mentee since 2021",
          "duration": "4 years",
          "quality": "Curiosity, research aptitude, great communication skills, integrity and intellectual humility. A prodigious writer, Zac has lots more to achieve in life.",
          "observation": "Zac has been a contributor to his cohorts. He observes quickly and then respectfully enters the conversation, adding value, positively agreeing and respectfully disagreeing with others'. He is a keen listener and good member with leadership potential",
          "academic": "He has a keen academic mind with a hunger to know a comprehensive 360 degree perspective into the smallest of nuances concerning an idea or topic. His detailed research provides a solid foundation for his claims on history and patterns of events.",
          "strength": "He is becoming a person with excellent time management and prioritisation skills. At a young age he has published 3 books, is performing at the top percentile of his class, and is having intellectually stimulating conversations with experts.",
          "relation": "Mentor and Founder of SCM Youth Fellowship",
          "recommend_email_id": 2
        }
      ],
      "enroll_data": {
        "days_left": 318
      },
      "experience_details": [
        {
          "user_id": 44,
          "user_experience_id": 100,
          "id": 100,
          "achievement": "I wrote World History in 3 Points (published by Hachette India in 2022) with the aim of making history more accessible. Translated into over 10 languages.",
          "start_date": "2024-02-01",
          "end_date": null,
          "designation": "Best Selling Author",
          "organization": "Hachette (2022) World History in 3 Points",
          "designation_id": 91,
          "organization_id": 106,
          "doc_data": []
        },
        {
          "user_id": 44,
          "user_experience_id": 102,
          "id": 102,
          "achievement": "Provides guidance and support to younger youth who are interested in leadership and international development.",
          "start_date": "2024-01-01",
          "end_date": null,
          "designation": "Youth Ambassador",
          "organization": "Knowles Educational and Charitable Trust for International Leadership (KECTIL)",
          "designation_id": 7,
          "organization_id": 101,
          "doc_data": []
        },
        {
          "user_id": 44,
          "user_experience_id": 103,
          "id": 103,
          "achievement": "I wrote More World History in 3 Points (published by Hachette India in 2022) as a sequel to World History in 3 Points with the aim of making history more accessible.",
          "start_date": "2022-06-01",
          "end_date": null,
          "designation": "Author",
          "organization": "Hachette (2022) More World History in 3 Points",
          "designation_id": 89,
          "organization_id": 107,
          "doc_data": []
        },
        {
          "user_id": 44,
          "user_experience_id": 104,
          "id": 104,
          "achievement": "The goal of the book \"Hidden Links\" (published by Penguin, 2023) was to uncover the hidden connections between seemingly unrelated historical events and explore how they have shaped our world today.",
          "start_date": "2023-07-01",
          "end_date": null,
          "designation": "Author",
          "organization": "Penguin (2023) Hidden Links",
          "designation_id": 89,
          "organization_id": 108,
          "doc_data": []
        },
        {
          "user_id": 44,
          "user_experience_id": 105,
          "id": 105,
          "achievement": null,
          "start_date": "2023-11-01",
          "end_date": null,
          "designation": "Author",
          "organization": "Sapna Book House - 'Jagathina Itihasa Mooru Hejjegalalli' translated into Kannada",
          "designation_id": 89,
          "organization_id": 109,
          "doc_data": []
        },
        {
          "user_id": 44,
          "user_experience_id": 106,
          "id": 106,
          "achievement": null,
          "start_date": "2023-01-01",
          "end_date": null,
          "designation": "Author",
          "organization": "Mathrubhumi Books 'Lokacharithram 3 Minutiil' translated into Malayalam.",
          "designation_id": 89,
          "organization_id": 110,
          "doc_data": []
        },
        {
          "user_id": 44,
          "user_experience_id": 101,
          "id": 101,
          "achievement": "Coached future SCM Fellows.",
          "start_date": "2023-08-01",
          "end_date": "2024-03-28",
          "designation": "Mentor",
          "organization": "SCM Youth",
          "designation_id": 90,
          "organization_id": 100,
          "doc_data": []
        },
        {
          "user_id": 44,
          "user_experience_id": 99,
          "id": 99,
          "achievement": "LeadCap is a global market research and consulting firm. I helped them collect and analyse data to analyse the state of women empowerment in the Middle East regions.",
          "start_date": "2022-04-01",
          "end_date": "2023-03-28",
          "designation": "Research Intern",
          "organization": "LeadCap Ventures",
          "designation_id": 25,
          "organization_id": 2,
          "doc_data": []
        },
        {
          "user_id": 44,
          "user_experience_id": 98,
          "id": 98,
          "achievement": "I worked on launching the youth flagship program called the IFSPD Presidential Fellows - on identifying and shortlisting remarkable social projects of youth from across the world.",
          "start_date": "2021-03-01",
          "end_date": "2022-09-28",
          "designation": "Intern",
          "organization": "IFSPD, Social Outreach Program",
          "designation_id": 77,
          "organization_id": 98,
          "doc_data": []
        }
      ],
      "education_details": [
        {
          "id": 62,
          "user_id": 44,
          "user_education_id": 62,
          "achievement": "Superior Perfomance",
          "start_year": "2024",
          "end_year": null,
          "institute_name": "Knowles Educational and Charitable Trust for International Leadership (KECTIL)",
          "institute_id": 90,
          "program_name": "KECTIL Fellowship",
          "program_id": 63,
          "doc_data": []
        },
        {
          "id": 61,
          "user_id": 44,
          "user_education_id": 61,
          "achievement": null,
          "start_year": "2023",
          "end_year": "2024",
          "institute_name": "SCM Youth",
          "institute_id": 88,
          "program_name": "SCM Youth Fellowship",
          "program_id": 62,
          "doc_data": [
            {
              "user_education_id": 61,
              "name": "Certificate of Completion.pdf"
            }
          ]
        }
      ],
      "award_details": [
        {
          "user_id": 44,
          "user_award_id": 30,
          "id": 30,
          "award_name": "Youth Ambassador & Fellow",
          "why_awarded": "Awarded for speaking at the KECTIL youth conference in Zambia and representing the institution as an ambassador.",
          "year": "2024",
          "institute_name": "Knowles Educational and Charitable Trust for International Leadership (KECTIL)",
          "institute_id": 90,
          "doc_data": [
            {
              "user_award_id": 30,
              "name": "IMG_1577 (1).jpg"
            }
          ]
        },
        {
          "user_id": 44,
          "user_award_id": 31,
          "id": 31,
          "award_name": "Recognition Award",
          "why_awarded": "For speaking for the Break Free India Podcast.",
          "year": "2024",
          "institute_name": "Break Free India Podcast",
          "institute_id": 91,
          "doc_data": [
            {
              "user_award_id": 31,
              "name": "Adobe Scan 12 Oct 2024.pdf"
            }
          ]
        },
        {
          "user_id": 44,
          "user_award_id": 27,
          "id": 27,
          "award_name": "India Reading Olympiad",
          "why_awarded": "Awarded for exceptional contributions to literature.",
          "year": "2023",
          "institute_name": "Food 4 Thought Foundation",
          "institute_id": 87,
          "doc_data": []
        },
        {
          "user_id": 44,
          "user_award_id": 28,
          "id": 28,
          "award_name": "SCM Young Fellow",
          "why_awarded": "1 of the 10 students who successfully completed the SCM Youth Fellowship 2023.",
          "year": "2023",
          "institute_name": "SCM Youth",
          "institute_id": 88,
          "doc_data": [
            {
              "user_award_id": 28,
              "name": "Certificate of Completion.pdf"
            }
          ]
        },
        {
          "user_id": 44,
          "user_award_id": 29,
          "id": 29,
          "award_name": "APJ Abdul Kalam Youth Fellow",
          "why_awarded": "For delivering a successful keynote on the 90th Birth Anniversary of Peoples President Dr. APJ Abdul Kalam.",
          "year": "2022",
          "institute_name": "LeadIndia Foundation, USA",
          "institute_id": 89,
          "doc_data": [
            {
              "user_award_id": 29,
              "name": "LEADINDIA.jpg"
            }
          ]
        }
      ],
      "unique_skills": [
        {
          "user_id": 44,
          "passion_id": 10,
          "ranking": 1,
          "title": "Social",
          "defining_attribute": "",
          "unique_ability": "Defined by a high emotional quotient. Gels well with others and make things happen.",
          "main_motivation": "",
          "potential_skill": "",
          "suitable_role": ""
        },
        {
          "user_id": 44,
          "passion_id": 11,
          "ranking": 2,
          "title": "Industrious",
          "defining_attribute": "",
          "unique_ability": "Defined by leadership qualities, with an ability to motivate, persuade and sell.",
          "main_motivation": "",
          "potential_skill": "",
          "suitable_role": ""
        },
        {
          "user_id": 44,
          "passion_id": 9,
          "ranking": 3,
          "title": "Creative",
          "defining_attribute": "",
          "unique_ability": "Defined by originality. Artistic and imaginative with a unique view point.",
          "main_motivation": "",
          "potential_skill": "",
          "suitable_role": ""
        }
      ],
      "research_details": [
        {
          "user_id": 44,
          "user_research_id": 11,
          "title": "Youngest Historian, Zac Sangeeth, gets in conversation with Lee",
          "domain": "Radio One International",
          "link": "https:\/\/youtu.be\/NJ-O8Bvx_v4?si=gvMH09js6cnKAJFt",
          "achievement": "Casted across Bangalore on 94.3 Radio One",
          "year": "2024"
        },
        {
          "user_id": 44,
          "user_research_id": 12,
          "title": "KECTIL Conference Speech on Youth Leadership",
          "domain": "Knowles Educational and Charitable Trust for International Leadership (KECTIL) Conference in Zambia",
          "link": "https:\/\/youtu.be\/HhzV9oU4kd8?si=s1t-SCViAvhcfbrI",
          "achievement": "Received great coverage amongst the youth in Zambia",
          "year": "2024"
        },
        {
          "user_id": 44,
          "user_research_id": 2,
          "title": "\u2018Climate Has Shaped History, and Even Religions, Through the Ages\u2019",
          "domain": "All Indians Matter Podcast by Ashraf Engineer",
          "link": "https:\/\/www.allindiansmatter.in\/climate-has-shaped-history-and-even-religions-through-the-ages\/",
          "achievement": "Got exceptional feedback on narration of historical threads on the podcast.",
          "year": "2023"
        },
        {
          "user_id": 44,
          "user_research_id": 7,
          "title": "How History Shapes Our Thinking",
          "domain": "SCM Youth",
          "link": "https:\/\/youtu.be\/v993uGP_YqQ?si=kRHN1lqdh9xgJXjm",
          "achievement": "Receive the honour of being and SCM Youth Fellow",
          "year": "2023"
        },
        {
          "user_id": 44,
          "user_research_id": 8,
          "title": "Hidden Links: Strategic Understanding through History",
          "domain": "Best Fit Careers Podcast",
          "link": "https:\/\/youtu.be\/xj7ActlvrJc?si=c2YgNnHKuYrJ8KCt",
          "achievement": "Received hundreds of views in under a month",
          "year": "2023"
        },
        {
          "user_id": 44,
          "user_research_id": 14,
          "title": "Interview with Master Zac Sangeeth, Bengaluru- Winner of Category ~I am Bond Under 18",
          "domain": "Food4ThoughtFoundation",
          "link": "https:\/\/youtu.be\/FOPHiSSyfQo?si=S1WTvYmf3ovTvJZk",
          "achievement": "Received the India Reading Olympiad",
          "year": "2023"
        },
        {
          "user_id": 44,
          "user_research_id": 20,
          "title": "\u2018The DNA of Sexism and Misogyny Started Almost 3,700 Years Ago\u2019: A Father-Son Duo are Set to Publish Book that Uncovers Relevant Historical Events",
          "domain": "The Mid-Day Newspaper",
          "link": "https:\/\/www.mid-day.com\/sunday-mid-day\/article\/the-dna-of-sexism-and-misogyny-started-almost-3700-years-ago-23298141",
          "achievement": null,
          "year": "2023"
        },
        {
          "user_id": 44,
          "user_research_id": 21,
          "title": "How Random Historical Events Shaped Our World by Sangeeth Varghese and His 12-year-old Zac Explores the Interconnected Nature of History.",
          "domain": "The Federal",
          "link": "https:\/\/thefederal.com\/category\/features\/hidden-links-review-new-book-connects-the-dots-between-random-historical-events-95672",
          "achievement": null,
          "year": "2023"
        },
        {
          "user_id": 44,
          "user_research_id": 28,
          "title": "Hidden links by Sangeeth Varghese and Zac Sangeeth : Book Review \u2013 My Word Bubble",
          "domain": "The Blog Chatter",
          "link": "https:\/\/www.theblogchatter.com\/blogrolls\/hidden-links-by-sangeeth-varghese-and-zac-sangeeth-book-review-my-word-bubble",
          "achievement": null,
          "year": "2023"
        },
        {
          "user_id": 44,
          "user_research_id": 30,
          "title": "Hidden Links: Strategic Understanding through History",
          "domain": "www.medium.com",
          "link": "https:\/\/medium.com\/sn-mentoring\/hidden-links-strategic-understanding-thru-history-zac-sangeeth-sangeeth-varghese-sn-27d08b7b2079",
          "achievement": null,
          "year": "2023"
        },
        {
          "user_id": 44,
          "user_research_id": 3,
          "title": "10 year Old Historian from Bengaluru can Tell You the World's History in 3 Points I Barkha Dutt",
          "domain": "The Mojo Story",
          "link": "https:\/\/youtu.be\/Wi8UoPX1JV8?si=zTY3JHMvywTZelFo",
          "achievement": "Received 1000s of views within few months of release.",
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 4,
          "title": "Key Note Speech at Dr.Kalam Lecture, LeadIndia, USA on Climate Change Through History",
          "domain": "Dr.Kalam Lecture, LeadIndia, USA",
          "link": "https:\/\/youtu.be\/YrwafvNr_Mk?si=7_eUIFQndy7-pkEK",
          "achievement": "Received great feedback on public speaking skills",
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 6,
          "title": "The Greatness Engineering Hour Show with ZAC SANGEETH",
          "domain": "The Greatness Engineering Hour Show",
          "link": "https:\/\/www.youtube.com\/live\/x9kyggQdIpc?si=yCWcwPlAu_KeY9oh",
          "achievement": "Received great coverage in Australia",
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 9,
          "title": "Tracking Women Empowerment in History: Zac Sangeeth",
          "domain": "Girl Up Mysore",
          "link": "https:\/\/youtu.be\/6f-G7SyltWs?si=z6K6EwMKfKeV1-R1",
          "achievement": "Received hundreds of views and great feedback",
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 10,
          "title": "Zac Sangeeth in Conversation with Saurabh Nanda",
          "domain": "SN Mentoring Channel",
          "link": "https:\/\/youtu.be\/EnjjlNGA0Ik?si=HGKXlVdU7MySz3zN",
          "achievement": "Communicated the importance of history to the youth",
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 13,
          "title": "Global Shapers of the World Economic Forum - Key Note Speech on Children's Day",
          "domain": "Global Shapers",
          "link": "https:\/\/www.youtube.com\/live\/pUEuBq0ImJs?si=EeeA8jaNo_9z6mnC",
          "achievement": "Received coverage among youth in India",
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 15,
          "title": "How this 10 Year Old Became India\u2019s Youngest Historian",
          "domain": "YourStory",
          "link": "https:\/\/youtu.be\/fjoGdOVDh5g?si=AqwVv5E-DMoZ5GBl",
          "achievement": "Received 1000s of views when premiered as part of YourStory Edu Stars",
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 16,
          "title": "Talk at the Bangalore Literature Festival",
          "domain": "Bangalore Literature Festival",
          "link": "https:\/\/bangaloreliteraturefestival.org\/participant\/zac-sangeeth\/",
          "achievement": "Received large audience at the Bangalore Literature Festival",
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 17,
          "title": "5th grader writes a bestselling book on World History",
          "domain": "Mathrubhumi Newspaper",
          "link": "https:\/\/www.mathrubhumi.com\/literature\/features\/10-yr-old-historian-zac-sangeeth-3-points-world-history-1.7479794",
          "achievement": "Received a great response in Kerala",
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 18,
          "title": "10-year-old turns author with book on world history",
          "domain": "The Print",
          "link": "https:\/\/theprint.in\/india\/10-year-old-turns-author-with-book-on-world-history\/826903\/",
          "achievement": null,
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 19,
          "title": "11-year-old Zac Sangeeth writes sequel to debut book on world history",
          "domain": "The Print",
          "link": "https:\/\/theprint.in\/india\/11-year-old-zac-sangeeth-writes-sequel-to-debut-book-on-world-history\/1106730\/",
          "achievement": null,
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 22,
          "title": "10-yr-old turns author with book on world history",
          "domain": "The Hans India",
          "link": "https:\/\/www.thehansindia.com\/hans\/young-hans\/10-yr-old-turns-author-with-book-on-world-history-728714",
          "achievement": null,
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 23,
          "title": "10-year-old turns author with book on world history",
          "domain": "The Tribune",
          "link": "https:\/\/www.tribuneindia.com\/news\/schools\/10-year-old-turns-author-with-book-on-world-history-368726\/",
          "achievement": null,
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 25,
          "title": "History in a hurry",
          "domain": "Business Standard",
          "link": "https:\/\/www.business-standard.com\/article\/beyond-business\/history-in-a-hurry-122080201745_1.html",
          "achievement": null,
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 26,
          "title": "10-yr-old makes history by writing book on world history",
          "domain": "News Trail",
          "link": "https:\/\/newstrailindia.com\/inner.php?id=3996",
          "achievement": null,
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 27,
          "title": "A 10-year-old child explained the history of the world through a book, he is being counted among the youngest published authors.",
          "domain": "GNTTV News",
          "link": "https:\/\/www.gnttv.com\/offbeat\/story\/10-year-old-zac-sangeeth-wrote-history-world-through-book-being-counted-among-youngest-published-authors-343070-2022-02-11",
          "achievement": null,
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 29,
          "title": "Bookrack for the week",
          "domain": "Deccan Herald Book Review",
          "link": "https:\/\/www.deccanherald.com\/features\/bookrack-for-the-week-feb-13-to-feb-19-1079689.html",
          "achievement": null,
          "year": "2022"
        },
        {
          "user_id": 44,
          "user_research_id": 5,
          "title": "10-yr old historian | Zac Sangeeth | 3 points: World History | Best Fit Careers Ep 1 | Saurabh Nanda",
          "domain": "Best Fit Careers Podcast",
          "link": "https:\/\/youtu.be\/1yBDZbSekh4?si=OWC1ngmzQvb96KhT",
          "achievement": "Received over 1000 views in under a few months.",
          "year": "2021"
        },
        {
          "user_id": 44,
          "user_research_id": 24,
          "title": "10 year old Historian Zac Sangeeth writes World History in 3 Points",
          "domain": "Medium.com",
          "link": "https:\/\/medium.host\/sn-mentoring\/zac-on-history-53d533ea833e",
          "achievement": null,
          "year": "2021"
        }
      ],
      "sport_details": [
        {
          "user_id": 44,
          "user_sport_id": 7,
          "id": 7,
          "name": "Headstart Educational Academy Annual Sports Day",
          "venue": "Saturn House",
          "achievement": "Displayed exceptional sportsmanship and propelled Saturn House to a bronze medal finish.",
          "start_year": "2024",
          "end_year": "2024",
          "doc_data": [
            {
              "user_sport_id": 7,
              "name": "Adobe Scan 12 Oct 2024 (6).pdf"
            }
          ]
        },
        {
          "user_id": 44,
          "user_sport_id": 8,
          "id": 8,
          "name": "Robotics with Micropython Worksop",
          "venue": "Head Start Educational Academy, Bengaluru in association with STEMbyU",
          "achievement": "Performed exceptionally and contributed to building and developing robots with Micropython.",
          "start_year": "2024",
          "end_year": "2024",
          "doc_data": [
            {
              "user_sport_id": 8,
              "name": "Adobe Scan 12 Oct 2024 (5).pdf"
            }
          ]
        },
        {
          "user_id": 44,
          "user_sport_id": 3,
          "id": 3,
          "name": "Headstart Educational Academy IntraSchool Football League",
          "venue": "Team Calisto",
          "achievement": "Performed as a key playmaker. Provided several assists.",
          "start_year": "2023",
          "end_year": "2023",
          "doc_data": [
            {
              "user_sport_id": 3,
              "name": "Adobe Scan 12 Oct 2024 (1).pdf"
            }
          ]
        },
        {
          "user_id": 44,
          "user_sport_id": 4,
          "id": 4,
          "name": "Headstart Educational Academy Annual Sports Day",
          "venue": "Venus House",
          "achievement": "Made essential tactical moves contributing to Venus house winning silver.",
          "start_year": "2019",
          "end_year": "2019",
          "doc_data": [
            {
              "user_sport_id": 4,
              "name": "Adobe Scan 12 Oct 2024 (2).pdf"
            }
          ]
        },
        {
          "user_id": 44,
          "user_sport_id": 5,
          "id": 5,
          "name": "Headstart Educational Academy IntraSchool Football League",
          "venue": "Team Sagittarius",
          "achievement": "Played as a key goalkeeper. Made multiple key saves contributing to the victory. Maintained the tournament clean sheet record.",
          "start_year": "2019",
          "end_year": "2019",
          "doc_data": [
            {
              "user_sport_id": 5,
              "name": "Adobe Scan 12 Oct 2024 (3).pdf"
            }
          ]
        },
        {
          "user_id": 44,
          "user_sport_id": 6,
          "id": 6,
          "name": "Official FC Barcelona Football Academy 2018-2019 season",
          "venue": "Official FC Barcelona Football Academy in Bangalore",
          "achievement": "Made several important goal contributions during the season. Quickly absorbed new strategies and tactics.",
          "start_year": "2018",
          "end_year": "2019",
          "doc_data": [
            {
              "user_sport_id": 6,
              "name": "Adobe Scan 12 Oct 2024 (4)0.pdf"
            },
            {
              "user_sport_id": 6,
              "name": "Adobe Scan 12 Oct 2024 (4).pdf"
            }
          ]
        }
      ],
      "carrer_skill_details": [
        {
          "user_id": 44,
          "id": 3,
          "skill_name": "Public Speaking"
        },
        {
          "user_id": 44,
          "id": 5,
          "skill_name": "Critical Thinking"
        },
        {
          "user_id": 44,
          "id": 9,
          "skill_name": "Research"
        }
      ],
      "personal_skill_details": [
        {
          "user_id": 44,
          "id": 23,
          "skill_name": "Attention to Detail"
        },
        {
          "user_id": 44,
          "id": 22,
          "skill_name": "Delegation"
        },
        {
          "user_id": 44,
          "id": 17,
          "skill_name": "Active Listening"
        }
      ],
      "form_details": {
        "user_id": 44,
        "section_ids": "1,2,12,8,3,4,14,13,9,6,11,10,5,15"
      },
      "life_exp_details": [
        {
          "user_life_exp_id": 1,
          "id": 1,
          "user_id": 44,
          "experience": "When I was 6 years old, my parents went on a trip to Paris. When they came back, my mother took me through the pictures of her trip. One picture really caught my attention. When I asked my mother about this painting, she said that it was the Mona Lisa, the most famous painting in the world.",
          "impact": "This piqued my curiosity. Every day I would research this painting and narrate what I had learnt to my parents. Over time my curiosity expanded, from the Mona Lisa to its artist, to the period in which he lived and slowly to the whole of history. I selected history as my future professional pursuit.",
          "learning": "While immersing myself in history, I learnt that history was a verbose and textual subject. This is why the subject is thought to be boring. I decided that I would apply my learnings, and make history a more accessible and interesting subject, by making it less verbose, and more to the point.",
          "created_at": "2024-10-12T09:52:02.000000Z",
          "doc_data": [],
          "theme_data": [
            {
              "user_lifeexp_id": 1,
              "label": "Curiosity",
              "id": 10,
              "description": "Moments of exploring something new or diving into the unknown out of curiosity."
            },
            {
              "user_lifeexp_id": 1,
              "label": "Creativity",
              "id": 9,
              "description": "Engaging in innovative thinking or problem-solving, coming up with unique ideas."
            }
          ],
          "emotion_data": [
            {
              "user_lifeexp_id": 1,
              "label": "Excited",
              "id": 19,
              "description": "Feeling energized and eager, especially in anticipation of something new or positive."
            }
          ]
        }
      ],
      "social_details": [],
      "enroll_details": {
        "user_id": 44,
        "expiry_at": "2025-10-20 23:59:59"
      }
    }
  };

const [context, setContext] = useState({
  opportunities: [
    {
      title: "Davos Worldwide - Critical Conversations",
      subtitle: "Online Speaker - Davos Worldwide",
      age: "15 To 25 Years",
      expiry: "10th Jan 2025",
      cost: "Free",
    },
    {
      title: "KECTIL Global Youth Fellowship",
      subtitle: "Prestigious Global Youth Fellowship",
      age: "15-26 Years",
      expiry: "25th Dec 2025",
      cost: "Free",
    },
    {
      title: "SCM Youth Fellowship",
      subtitle: "Premier Youth Fellowship",
      age: "10 To 25 Years",
      expiry: "25th Dec 2024",
      cost: "Free",
    },
  ],
  currentContext: {
    currentlyViewing: "Education Section",
    form: {},
  },
});

useEffect(() => {
  initializeAskEVAChat();
}, []);

useEffect(() => {
  if (!hasContextChanged) {
    setHasContextChanged(true);
    return;
  }

  // Trigger an action whenever the context changes
  console.log("Context changed:", context);

  handleNewUserMessage('context changed');
}, [context]);

const [chatWindowOpen, setChatWindowOpen] = useState(true);

const [hasContextChanged, setHasContextChanged] = useState(false);


async function initializeAskEVAChat() {
  const response = await chatService.sendMessage('Hey', userInformation, context);
  addResponseMessage(response.Message);
}

async function handleNewUserMessage(newMessage) {
  console.log('LiveChatWidget.onNewEvent', newMessage)
  // Send the message through the backend API
  // For example, you might use fetch or axios to send the message
  // Then, upon receiving a response, you can add a response message
  toggleMsgLoader();
  const response = await chatService.sendMessage(newMessage, userInformation, context);
  toggleMsgLoader();
  addResponseMessage(response.Message);
}

function handleToggleButton(open) {
  setChatWindowOpen((prev) => !prev)
}

const handleAskEVA = (newContext) => {
  console.log("Ask EVA button clicked!", newContext);
  // update context and open chat window
  setContext((prevContext) => ({
    ...prevContext,
    currentContext: {
      ...newContext
    },
  }));
};

return (
  <div className="App">
    <Portfolio onAskEVA={handleAskEVA} />
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Ask EVA"
      subtitle="IFSPD"
      handleToggle={handleToggleButton}
    />
  </div>
);
}

export default App;
