import { Layout } from 'antd';
import Main from "./components/Main";
import "./App.css"

//you can also structure it this was
// const {Header, Content, Footer} = Layout // all you have to put now is Header, Content, Footer

function App() {
  return (
    <Layout> 
{/* this is a higher order component because its capitalized and its wrapping another component  */}
<Layout.Header className='header'>
  Much Todo
</Layout.Header>
<Layout.Content  
    className="background"
    >
   <Main />
      </Layout.Content>
      <Layout.Footer style={{textAlign: 'center'}} >&copy; 2022, Brian's To Do List</Layout.Footer>
    </Layout>
  );
}

export default App;
