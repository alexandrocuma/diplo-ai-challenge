import axios from "axios";
import { useEffect, useRef, useState } from "react"

type TodoData = {
  id: number,
  userId: number,
  title: string, 
  completed: boolean
}

const baseURL = "https://jsonplaceholder.typicode.com/todos/"
export const useTodos = () => {
  const timerRef = useRef<undefined | NodeJS.Timeout>();

  const [todos, setTodos] = useState<TodoData[]>([]);
  const [todosNumber, setTodosNumber] = useState(0);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if(todosNumber > 0 && todosNumber < 101){
        let promises = []
        for(let i = 1; i <= todosNumber; i++){
          promises.push(TodoRequest(i))
        }
        Promise.all(promises).then(res => sortTODOs(res as TodoData[]))
      }
    }, 1_000);

    return () => {
      clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todosNumber]);

  const TodoRequest = (id: number) => {
    return new Promise((resolve, reject) => {
      axios.get(`${baseURL}${id}`)
      .then(resp => resolve(resp.data))
      .catch(err => reject(err))
    })
  } 

  const sortTODOs = (res: TodoData[]) => {
    let completed = res.filter(todo => todo.completed).sort(sortLex);
    let uncompleted = res.filter(todo => !todo.completed).sort(sortLex);
    setTodos([...uncompleted, ...completed])
  }

  const sortLex = (a: TodoData, b: TodoData) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  }

  return {
    todos,
    todosNumber,
    setTodosNumber
  }
}