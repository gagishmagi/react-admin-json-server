import * as React from "react";
import { Admin, Resource, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
// import { theme } from "./theme";
// import ThemedCustomRouteNoLayout from "./ThemedCustomRouteNoLayout";
// import {Route} from 'react-router-dom'


import { FirebaseAuthProvider } from 'react-admin-firebase'
import { firebaseConfig } from './config/firebase'


const options = {}

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const authProvider = FirebaseAuthProvider(firebaseConfig,options)

const App = () => 
<Admin 
dataProvider={dataProvider} 
authProvider={authProvider}







// theme={theme}
// customRoutes={[
//   <Route
//     exact
//     path="/custom"
//     component={(props) => <ThemedCustomRouteNoLayout {...props} />}
//     noLayout // Skip the layout
//   />,
// ]}
>
  <Resource name="users" list={UserList} icon={UserIcon}/>
  <Resource name="posts" list={PostList} show={ShowGuesser} icon={PostIcon} edit={PostEdit} create={PostCreate}/>
</Admin>;

export default App;