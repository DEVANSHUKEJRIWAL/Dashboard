// src/App.js
import React, { useState } from 'react';
import Layout from './components/Layout';
import Table from './components/Table';
import Chart from './components/Chart';
import Calendar from './components/Calendar';
import KanbanBoard from './components/KanbanBoard';
import Theme from './theme';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  );

  return (
    <Theme darkMode={darkMode}>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Table columns={columns} data={data} />
        <Chart />
        <Calendar />
        <KanbanBoard />
      </Layout>
    </Theme>
  );
}

export default App;
