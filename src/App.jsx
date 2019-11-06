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
import Comments from './Components/Comments/Comments';

//custom hooks:
import useLocalStorage from './Components/CustomHooks/useLocalStorage';

const App = () => {
	const {getTasks} = useLocalStorage();
	const [data, setData] = useState(getTasks());	
	const [comments, setComments] = useState([]);	

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
					(item) =>
						<TaskItem 
							key = {item.uuid} 
							uuid = {item.uuid} 
							setComments = {setComments}
						>		
							<section className = 'TaskName'>{item.task}</section>

							<NumberedDot number = {item.descriptionCount}/>
							
							<DeleteBtn uuid = {item.uuid} setData = {setData}/>
						</TaskItem>
				)}
			</Tasks>

			<Comments >
				<CustomHeader 
					index = {2}
					content = 
						{`Comments #${comments !== undefined && comments.length}`} 
					Class = 'TaskTitle'
				/>

				{comments !== undefined &&
				comments.map(
					(item, i) => 
						<p key = {i}>
							{item.text}
						</p>
				)}
			</Comments>
		</section>
	);
};

export default App;