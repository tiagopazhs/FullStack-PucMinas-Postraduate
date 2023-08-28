import './App.css';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { EventCreate, EventEdit, EventList } from './events/events';

const dataProvider = jsonServerProvider('http://127.0.0.1:3001');

const App = () => <Admin dataProvider={dataProvider}>
    <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate} />
</Admin>;

export default App;
