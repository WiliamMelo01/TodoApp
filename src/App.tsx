import Home from "./pages/Home";

import CreateTaskProvider from "./contexts/ManageTask";
import TasksProvider from "./contexts/Tasks";
import ActivedMenuProvider from "./contexts/ActivedMenu";

function App() {

  return (
    <TasksProvider>
      <CreateTaskProvider>
        <ActivedMenuProvider>
          <Home />
        </ActivedMenuProvider>
      </CreateTaskProvider>
    </TasksProvider>

  )
}

export default App
