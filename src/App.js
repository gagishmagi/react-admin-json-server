import * as React from "react";
import { Admin, Resource, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => 
<Admin dataProvider={dataProvider} >
  <Resource name="users" list={UserList} icon={UserIcon}/>
  <Resource name="posts" list={PostList} show={ShowGuesser} icon={PostIcon} edit={PostEdit} create={PostCreate}/>
</Admin>;

export default App;