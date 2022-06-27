import "./App.css";
import Layout from "./components/Layout/Layout";
import Medicine from "./container/Medicine/Medicine";
import Patients from "./container/Patients/Patients";
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout >
        <Switch>
          <Route path={'/medicine'} exact component={Medicine} />
          <Route path={'/patients'} exact component={Patients} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;