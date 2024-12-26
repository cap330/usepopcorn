# React + Vite

105 Initial Commit Composition and Reusability - Splitting Components in Practice

107 Prop Drilling

109 Components, Composition and Reusability - Fixing Prop Drilling With Comosition

110 Using Composition to make a Reusable Box

111 Passing element as property

112 Building a Reusable Star Rating Component

113 Creating the Starts

114 Handling Hover Events over stars

116 Improving Reusability With Props

117 PropTypes (Legacy)

146 Synchronizing Queries With Movie Data

147 Selecting a Movie

148 Loading Movie Details

149 Adding a Watched Movie

...

152 Cleaning Up the Title (Understanding Closure)

153 Cleaning Up Data Fetching

154 One More Effect Listening to a Keypress

NEXT PART THE RULES OF HOOKS IN PRACTICE

159 The rules of hooks in practice (APP.jsx)

160 Initilazing state with a callback

..Using callback function to set value in useState (reading from local storage)
....const [watched, setWatched] = useState(() => JSON.parse(localStorage.getItem('watched')));

..Using useEffect to update localStorage each time [watched] is changing (adding and deleting)
..useEffect(
....function () {
........localStorage.setItem('watched', JSON.stringify(watched));
......},
......[watched]
..);

162 How NOT to Select DOM elements in react
