const githubcontent =

[
  {
    "PostTitle": "Repo desktop/desktop",
    "Author" : "Issue #5596",
    "Score":"GitHub doesn't let me pull (nor push) my project"
  },
  {
    "PostTitle": "Repo STAT545-UBC/Discussion",
    "Author" : "Issue #120",
    "Score": "git won't commit or push my file"
  },
  {
    "PostTitle" : "Repo desktop/desktop",
    "Author": "Issues #35251",
    "Score": "Reddit Score: 9"
  },
  {
    "PostTitle": "Repo desktop/desktop",
    "Author": "Issue #343",
    "Score": "Reddit Score: 5"
  },
  {
    "PostTitle": "Repo desktop/desktop",
    "Author": "Issue #11",
    "Score": "Fix disabled Commit Changes button on GitHub"
  },
  {
    "PostTitle": "Repo desktop/desktop",
    "Author" : "Issue #3235",
    "Score":"CSS and HTML not linking"
  },
  {
    "PostTitle":"Repo STAT545-UBC/Discussion",
    "Author": "Issue #546",
    "Score":"How can I connect my Github in Atom?"
  },
  {
    "PostTitle":"Repo STAT545-UBC/Discussion",
    "Author":"Issues #322",
    "Score": "How can I connect my Github in Atom?"
  },
  {
    "PostTitle":"Repo desktop/desktop",
    "Author":"Issues #3223",
    "Score":"How can I connect my Github in Atom?"
  },
  {
    "PostTitle":"Repo desktop/desktop",
    "Author":"Issues #232",
    "Score":"How can I connect my Github in Atom?"

  },
  {
    "PostTitle":"Repo desktop/desktop",
    "Author":"Issues #232",
    "Score":"How can I connect my Github in Atom?"
  }
];


function displaygithub(githubcontent) {
  return `
  <div class="reddit-score"> ${githubcontent.PostTitle}</div>
  <p class="reddit-posted-by"> ${githubcontent.Author} </p>
  <p class="reddit-feed-title">${githubcontent.Score}</p>
  <br>
  `;
}
document.getElementById("githubApp").innerHTML+= `
${githubcontent.map(displaygithub).join('')}
<br>
`;
