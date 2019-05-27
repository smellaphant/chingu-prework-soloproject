const javascriptReddit =

[
  {
    "PostTitle": "camelCase in front, snake_case in the back",
    "Author" : "Posted by: u/MisterJK2",
    "Score":"Reddit Score: 22"
  },
  {
    "PostTitle": "JavaScript Clean Code - Best Practices - based on Robert C. Martin's book Clean Code",
    "Author" : "Posted by: u/PMilos",
    "Score": "Reddit Score: 498"
  },
  {
    "PostTitle" : "Array.from has a second argument",
    "Author": "Posted by: u/fagnerbrack",
    "Score": "Reddit Score: 9"
  },
  {
    "PostTitle": "JavaScript's forEach is very slow!",
    "Author": "Posted by: u/TurnaroundGames",
    "Score": "Reddit Score: 5"
  },
  {
    "PostTitle": "JavaScript Cheatsheet",
    "Author": "Posted by: u/wilfredinni",
    "Score": "Reddit Score: 94"
  },
  {
    "PostTitle": "GitHub - victorvoid/dinoql: A customizable GraphQL style query language for interacting with JavaScript objects.",
    "Author" : "Posted by: u/itsmemielophone",
    "Score":"Reddit Score: 1"
  },
  {
    "PostTitle":"Ask for OS authentication from JavaScript?",
    "Author": "Posted by: u/dogeboz",
    "Score":"Reddit Score: 1"
  },
  {
    "PostTitle":"Transpile your CSS bundle to support IE11 for CSS variables, calc, and future CSS.",
    "Author":"Posted by: u/x0046",
    "Score": "Reddit Score: 0"
  },
  {
    "PostTitle":"In Depth Javascript",
    "Author":"Posted by: u/spacegloves",
    "Score":"Reddit Score: 4"
  },
  {
    "PostTitle":"Managing a Secure JSON Web Token Implementation",
    "Author":"Posted by: u/FanielDanara",
    "Score":"Reddit Score: 136"

  },
  {
    "PostTitle":"Web Components in a Nutshell",
    "Author":"Posted by: u/treyhuffine",
    "Score":"Reddit Score: 13"
  }
];


function displayReddit(javascriptReddit) {
  return `
  <div class="reddit-feed-title"> ${javascriptReddit.PostTitle}</div>
  <p class="reddit-posted-by"> ${javascriptReddit.Author} </p>
  <p class="reddit-score">${javascriptReddit.Score}</p>
  <br>
  `;
}
document.getElementById("app").innerHTML+= `
${javascriptReddit.map(displayReddit).join('')}
<br>
`;
