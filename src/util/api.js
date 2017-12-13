import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://dev.io:4000/api',
  timeout: 15000,
  transformResponse: [data => data.data]
});

// TODO: use axios to retrieve data from DB.
export const authUser = (user) => {
    // if(user.email === 'a@a.com' && user.password === '48hours') {
    if(user.username === '' && user.password === '') {      
      const userRes = defaultAuthRes;
      return Promise.resolve(userRes);
    } else {
      return Promise.reject('ERROR: credentials not found! (email: a@a.com, pass: 48hours)');
    }
}

export const getSessionsFromUser = (userId) => {
  const sessions = defaultSessions;

  return Promise.resolve(sessions);
}

export const createSession = (session) => {
  let newSession = Object.assign({}, defaultSessions[0]);
  newSession.title = session.title;
  newSession.comments = session.comments;
  newSession.topics = Object.assign([], session.topics);

  return Promise.resolve(newSession);
}

const defaultAuthRes = {
  "id": "16362",
  "username": "AmyA",
  "email": "amy_alcazar@ultimatesoftware.com",
  "fullname": "Amy Alcazar",
  "division": "Services",
  "department": "Customer Success",
  "seniority": "2016-08-22T00:00:00",
  "direct_reports": [
    {
        "id": "15869",
        "username": "MaryRa",
        "email": "mary_ramirez@ultimatesoftware.com",
        "fullname": "Mary Ramirez"
    },
    {
        "id": "16198",
        "username": "TracyW",
        "email": "tracy_west@ultimatesoftware.com",
        "fullname": "Tracy West"
    },
    {
        "id": "15724",
        "username": "MarcusO",
        "email": "marcus_ouni@ultimatesoftware.com",
        "fullname": "Marcus Ouni"
    },
    {
        "id": "16002",
        "username": "AmandaJ",
        "email": "amanda_jones@ultimatesoftware.com",
        "fullname": "Amanda Jones"
    },
    {
        "id": "16577",
        "username": "BonnieA",
        "email": "bonnie_abbott@ultimatesoftware.com",
        "fullname": "Bonnie Abbott"
    },
    {
        "id": "14007",
        "username": "LoriW",
        "email": "Lori_Weisenburg@ultimatesoftware.com",
        "fullname": "Lori Weisenburg"
    },
    {
        "id": "13496",
        "username": "SherryD",
        "email": "sherry_dibble@ultimatesoftware.com",
        "fullname": "Sherry Dibble"
    },
    {
        "id": "17707",
        "username": "RoyH",
        "email": "roy_hetherington@ultimatesoftware.com",
        "fullname": "Roy Hetherington"
    }
  ]
};

const defaultSessions = [
  {
    "__v": 0,
    "title": "All About the Gains",
    "employee_id": 14514,
    "_id": "5a3016daeffd8062bae33764",
    "active": true,
    "created": "2017-12-12T17:50:18.909Z",
    "action_items": [],
    "comments": [
      {
        "message": "I really wish that I can find the balance between life and my current workload. My assigned projects are getting increasingly more stressful to manage",
        "emotion": {
            "comparative": 0.08,
            "score": 2
        },
        "_id": "5a3016daeffd8062bae33765",
        "created": "2017-12-12T17:50:18.909Z",
        "private": false
      }
    ],
    "topics": [
      {
        "title": "It's Gains O'clock",
        "_id": "5a3016daeffd8062bae33766",
        "created": "2017-12-12T17:50:18.910Z"
      }
    ]
  },
];