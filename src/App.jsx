import React, {useState} from 'react';

//styles:
import './Styles/MAIN.sass';

//components:
import DairyAppTitle from './Components/DairyAppTitle/DairyAppTitle';
import Tasks from './Components/Tasks/Tasks';
import CustomHeader from './Components/GeneralComponents/CustomHeader'
import NewTaskForm from './Components/GeneralComponents/NewTaskForm';
import NewTaskInput from './Components/GeneralComponents/NewTaskInput';
import SaveTaskBtn from './Components/GeneralComponents/SaveTaskBtn';
import TaskItem from './Components/GeneralComponents/TaskItem';
import NumberedDot from './Components/GeneralComponents/NumberedDot';
import DeleteBtn from './Components/GeneralComponents/DeleteBtn'; 

//custom hooks:
import useLocalStorage from './Components/CustomHooks/useLocalStorage';

const App = () => {
	const {tasks} = useLocalStorage();
	const [data, setData] = useState(tasks);

	return(
		<section className = 'App'>
			<DairyAppTitle />
	
			<Tasks >
				<CustomHeader 
					index = {2}
					content = 'Items' 
					Class = 'TaskTitle'
				/>

				<NewTaskForm setData = {setData}>
					<NewTaskInput />
					<SaveTaskBtn />
				</NewTaskForm>

				{data.map(
					(item, i) =>
						<TaskItem key = {i}>		
							<section className = 'TaskName'>{item.task}</section>

							<NumberedDot number = {3}/>
							
							<DeleteBtn />
						</TaskItem>
				)}
			</Tasks>
		</section>
	);
};

export default App;