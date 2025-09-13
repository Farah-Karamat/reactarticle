import logo from './logo.svg';
import './App.css';


// function Header(){
// return(

// )
// }
function Header(){
return(
<div className="Header">
<ul className='list'>
<li><a href="">What is React?</a></li>
<li>SPA & MPA</li>
<li>Angular vs React vs Vue vs Next.JS</li>
<li>Library vs Framework</li>
<li>Dom vs Virtual Dom</li>
</ul>

</div>
)
}

function Table(){
return(
<div className="Table">
<tr className="table1">
<th>Feature/<br></br> Aspects</th>
<th>Angular</th>
<th>React</th>
<th>Vue.js</th>
<th>Next.js</th>
</tr>

<tr>
<td>Type</td>
<td>Full-fledged<br></br> framework</td>
<td>UI library</td>
<td>Progressive<br></br> framework</td>
<td>React-based<br></br> framework</td>
</tr>

<tr>
<td>Developer</td>
<td>Google</td>
<td>Meta (Facebook)</td>
<td>Evan You<br></br> (ex-Google)</td>
<td>Vercel</td>
</tr>


<tr>
<td>Language</td>
<td>TypeScript<br></br> (built-in)</td>
<td>JavaScript<br></br> (JSX syntax)</td>
<td>JavaScript<br></br> (with templates)</td>
<td>JavaScript/<br></br>TypeScript</td>
</tr>

<tr>
<td>Learning<br></br> Curve</td>
<td>Steep<br></br> (many concepts)</td>
<td>Moderate</td>
<td>Easy to<br></br> Learn</td>
<td>Moderate <br></br>(if you know React)</td>
</tr>

<tr>
<td>Size</td>
<td>Large <br></br>(heavy)</td>
<td>Medium</td>
<td>Small &<br></br> lightweight</td>
<td>Medium</td>
</tr>

<tr>
<td>Flexibility</td>
<td>Less flexible <br />(rigid structure)</td>
<td>Very flexible <br /> (pick tools as needed)</td>
<td>Flexible & <br /> simple</td>
<td>Flexible <br /> (extends React)</td>
</tr>


<tr>
<td>Performance</td>
<td>High <br /> (but heavy)</td>
<td>High <br /> (Virtual DOM)</td>
<td>High (lightweight <br /> + Virtual DOM)</td>
<td>Very High <br /> (SSR + optimization)</td>
</tr>

<tr>
<td>Best For</td>
<td>Large enterprise <br /> apps</td>
<td>SPAs & <br /> dynamic UIs</td>
<td>Small/medium <br /> projects</td>
<td>SEO-friendly,<br /> production-ready <br /> apps</td>
</tr>

<tr>
<td>Key <br /> Features</td>
<td>Data binding,<br /> dependency injection,<br /> full MVC</td>
<td>Component-based <br /> UI, Virtual <br /> DOM</td>
<td>Simple syntax,<br /> reactive data <br /> binding</td>
<td>Server-side <br /> rendering, static <br /> site generation,<br /> SEO</td>
</tr>

<tr>
<td>Community & <br /> Popularity</td>
<td>Strong, but <br /> declining compared <br /> to React</td>
<td>Very large,<br /> most popular</td>
<td>Growing fast,<br /> popular in Asia <br /> & startups</td>
<td>Growing quickly,<br /> widely adopted <br /> with React</td>
</tr>

<tr>
<td>Examples</td>
<td>Gmail,<br /> Forbes</td>
<td>Facebook,<br /> Instagram,<br /> Netflix</td>
<td>Xiaomi,<br /> Alibaba</td>
<td>TikTok,<br /> Hulu, Nike</td>
</tr>


</div>
)
}


function App() {
const heading = "ℝ𝕖𝕒𝕔𝕥: 𝔸 𝕊𝕞𝕒𝕣𝕥𝕖𝕣 𝕎𝕒𝕪 𝕥𝕠 𝔹𝕦𝕚𝕝𝕕 𝕀𝕟𝕥𝕖𝕣𝕗𝕒𝕔𝕖𝕤";
const heading1 = "What is React?";
const para = "React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development. React.JS History is its Latest version is 19.0.0 (December 2024).Initial release to the Public (version 0.3.0) was in July 2013.React.JS was first used in 2011 for Facebook's Newsfeed feature.Facebook Software Engineer, Jordan Walke, created it.";
const heading2 = "What is SPA & MPA?";
const para1 = "SPA application loads into the browser as a single HTML page and dynamically updates its content without a full reload every time the user takes an action. All core resources (HTML, CSS, JavaScript) are loaded once, and when navigating between sections or triggering user actions, the data is fetched asynchronously, providing a smooth and fast user interface response. The main components of the architecture include:Static HTML + JS/CSS - the initial load includes minimal code.SPA development frameworks and libraries (React, Vue, Angular) - handle the user interface.Router - simulates multi-page behavior (e.g., react-router).Backend API (Node.js, Django, Laravel) - provides data in JSON format.State Management - Redux, Pinia to store client-side data."
const para2 = "MPA is a traditional web application where each navigation or interaction typically results in the browser requesting and loading a new HTML page from the server.While React is more commonly associated with SPAs, it can be used within an MPA structure. This often involves embedding React components within specific sections of different HTML pages, where each page is still served by the server. Frameworks like Next.js or Remix can facilitate building MPAs with React by providing server-side rendering capabilities.Its characteristics are: Each page load involves a full server request and render.Generally better for SEO out-of-the-box as each page has a distinct URL and content is readily available to search engine crawlers. "
const heading3 = "Angular vs React vs Vue vs Next JS";
const subheading = "LIBRARY";
const para3 = "A library is essentially a collection of prewritten code that developers can use to perform common tasks. Libraries provide reusable functions and classes, allowing developers to avoid reinventing the wheel for standard functionalities.In Library, you import or call specific methods that you need for your project.In simple words, a bunch of code packed together that can be used repeatedly is known as Library.Reusability is one of the main reasons to use libraries."
const subheading1 = "FRAMEWORK"
const para4 = "A framework is a supporting structure that gives shape to your code.In the Framework, you have to fill the structure accordingly with your code.There is a specific structure for a particular framework that you have to follow, and it's generally more restrictive than Library.One thing to remember here is that frameworks sometimes get quite large, so they may also use the Library.But the Framework doesn't necessarily have to use Library."

const subheading2 = "DOM"
const para5 = "The DOM (Document Object Model) is the browser’s tree-like representation of the HTML structure.In a normal JavaScript or jQuery app, whenever something changes (like a button click or input update), the real DOM is directly updated.Direct manipulation of the DOM is slow because the browser has to recalculate styles, reflow, and repaint the entire page or large portions of it.For Example: If a user types in a search bar, the real DOM would update the input field each time, causing performance lag in large apps."

const subheading3 = "VIRTUAL DOM"
const para6 = "React introduces the Virtual DOM (VDOM) to solve the performance issue.The Virtual DOM is an in-memory copy of the actual DOM.When something changes in the UI, React updates the Virtual DOM first instead of the real DOM.React then uses a process called Diffing Algorithm to compare the new Virtual DOM with the old one.Finally, React updates only the specific parts of the real DOM that changed.For Example: If you have 100 items on a page and only 1 changes, React will update just that 1 item in the real DOM, not all 100."



return (
<div className="App">
<Header/>
<h1 className='heading'>{heading}</h1>
<h3 className='heading1'>{heading1}</h3>
<p className='para'>{para}</p>
<h3 className='heading2'>{heading2}</h3>
<p className='para1'>{para1}</p>
<p className='para2'>{para2}</p>
<h3 className='heading3'>{heading3}</h3>
<Table/>

<h3 className='subheading'>{subheading}</h3>
<p className="para3">{para3}</p>

<h3 className='subheading1'>{subheading1}</h3>
<p className="para4">{para4}</p>

<h3 className='subheading2'>{subheading2}</h3>
<p className="para5">{para5}</p>

<h3 className='subheading3'>{subheading3}</h3>
<p className="para6">{para6}</p>




</div>
);
}

export default App;
