const javascriptJSHistory =

[
  {
    "contentHeading": "JavaScript: What are Template Literals? codeburst",
    "Author" : "an hour ago",
    "Score":"Reddit Score: 22"
  },
  {
    "contentHeading": "JavaScript Date Formats",
    "Author" : "an hour ago",
    "Score": "Reddit Score: 498"
  },
  {
    "contentHeading" : "JavaScript Date Objects",
    "Author": "an hour ago",
    "Score": "Reddit Score: 9"
  },
  {
    "contentHeading": "JavaScript Template Literals: JSON to HTML",
    "Author": "3 days ago",
    "Score": "Reddit Score: 5"
  },
  {
    "contentHeading": "JavaScript Cheatsheet",
    "Author": "3 days ago",
    "Score": "Reddit Score: 94"
  },
  {
    "contentHeading": "Interacting with JavaScript objects.",
    "Author" : "3 days ago",
    "Score":"Reddit Score: 1"
  },
  {
    "contentHeading":"Ask for OS authentication from JavaScript?",
    "Author": "3 days ago",
    "Score":"Reddit Score: 1"
  },
  {
    "contentHeading":"Transpile your CSS bundle to support IE11 for CSS variables, calc, and future CSS.",
    "Author":"3 days ago",
    "Score": "Reddit Score: 0"
  },
  {
    "contentHeading":"In Depth Javascript",
    "Author":"3 days ago",
    "Score":"Reddit Score: 4"
  },
  {
    "contentHeading":"Managing a Secure JSON Web Token Implementation",
    "Author":"3 days ago",
    "Score":"Reddit Score: 136"

  },
  {
    "contentHeading":"Web Components in a Nutshell",
    "Author":"3 days ago",
    "Score":"Reddit Score: 13"
  }
];


function displayJava(javascriptJSHistory) {
  return `
  <table>
    <tr>
    <td></td>
    <td class="javahistorytitle"> ${javascriptJSHistory.contentHeading}</td>
    <td> </td>
    <td class="jvhistorylog">${javascriptJSHistory.Author}</td>
    </tr>
    <br>
  `;
}
document.getElementById("JSapp").innerHTML+= `
${javascriptJSHistory.map(displayJava).join('')}
`;
