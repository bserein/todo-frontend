import { Layout } from 'antd';
import Main from "./components/Main";

//you can also structure it this was
// const {Header, Content, Footer} = Layout // all you have to put now is Header, Content, Footer
const styles = {
  header: {
      position: 'fixed',
      zIndex: 10,
      width: '100%',
      color: 'white',
    },
  content: {
    padding: '0 50px',
    marginTop: 64,
  },
}

function App() {
  return (
    <Layout> 
{/* this is a higher order component because its capitalized and its wrapping another component  */}
<Layout.Header style={styles.header}>
  Much Todo
</Layout.Header>
<Layout.Content style={styles.content} >
   <Main />
      </Layout.Content>
      <Layout.Footer >&copy; 2022, Boca Code</Layout.Footer>
    </Layout>
  );
}

export default App;
