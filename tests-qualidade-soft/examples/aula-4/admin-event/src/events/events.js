import { Create, Datagrid, DateField, DateInput, Edit, List, SimpleForm, TextField, TextInput } from "react-admin";

export const EventList = (data) => (
    <List>
        <Datagrid data={data.data} rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="date" />
        </Datagrid>
    </List>
);

export const EventEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="date" />
        </SimpleForm>
    </Edit>
);

export const EventCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="date" />
        </SimpleForm>
    </Create>
);