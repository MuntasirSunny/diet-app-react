import {
    createBrowserRouter
} from "react-router-dom";
import './App.css';
import GoalQuiz from './pages/GoalQuiz';
import HomePage from './pages/HomePage';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/quiz",
      element: <GoalQuiz />
    }
  ]);

export default router;