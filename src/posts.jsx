// in src/posts.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  SimpleForm,
  TextInput,
  ReferenceInput,
  Edit,
  SelectInput,
  Create,
  DeleteButton,
  ShowButton
} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];


export const PostList = (props) => (
    <List filters={postFilters} {...props}>

    <Datagrid>
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />

      <EditButton />
      <DeleteButton/>
      <ShowButton/>
    </Datagrid>

  </List>
);

const EditPostTitle = ({ record }) => {
        return <span>Editing post {record ? `"${record.title}"` : ''}</span>;
};


export const PostEdit = (props) => (
  <Edit title={<EditPostTitle/>} {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);


const CreatePostTitle = ({ record }) => {
    return <span>Creating post </span>;
};

export const PostCreate = (props) => (
  <Create title={<CreatePostTitle/>} {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
