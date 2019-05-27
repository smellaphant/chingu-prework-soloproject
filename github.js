const githubFeed =

[
  {
    "Repo": "camelCase in front, snake_case in the back",
    "Issue" : "Posted by: u/MisterJK2",
    "Content":"Reddit Score: 22"
  },
  {
    "Repo": "camelCase in front, snake_case in the back",
    "Issue" : "Posted by: u/MisterJK2",
    "Content":"Reddit Score: 22"
  }
  {
    "Repo": "camelCase in front, snake_case in the back",
    "Issue" : "Posted by: u/MisterJK2",
    "Content":"Reddit Score: 22"
  },
  {
    "Repo": "camelCase in front, snake_case in the back",
    "Issue" : "Posted by: u/MisterJK2",
    "Content":"Reddit Score: 22"
  },
  {
    "Repo": "camelCase in front, snake_case in the back",
    "Issue" : "Posted by: u/MisterJK2",
    "Content":"Reddit Score: 22"
  },
  {
    "Repo": "camelCase in front, snake_case in the back",
    "Issue" : "Posted by: u/MisterJK2",
    "Content":"Reddit Score: 22"
  },
  {
    "Repo": "camelCase in front, snake_case in the back",
    "Issue" : "Posted by: u/MisterJK2",
    "Content":"Reddit Score: 22"
  }
];


function displayGithub(githubFeed) {
  return `
  <div class="reddit-score">${githubFeed.Repo}</div>
  <p class="reddit-posted-by"> ${githubFeed.Issue} </p>
  <p class="reddit-feed-title"> ${githubFeed.Content}</p>
  <br>
  `;
}
document.getElementById("githubApp").innerHTML= `
${githubFeed.map(displayGithub).join()}
<br>
`;
