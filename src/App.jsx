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
import CommentItem from './Components/GeneralComponents/CommentItem';
import CommentsArea from './Components/GeneralComponents/CommentsArea';

//custom hooks:
import useLocalStorage from './Components/CustomHooks/useLocalStorage';

const App = () => {
	const {getTasks} = useLocalStorage();
	const [data, setData] = useState(getTasks());	
	const [selectedUuid, setSelectedUuid] = useState(false);	
	const [comments, setComments] = useState(false);
	
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
							setSelectedUuid = {setSelectedUuid}
							selectedUuid = {selectedUuid}
						>		
							<section className = 'TaskName'>{item.task}</section>

							<NumberedDot number = {item.descriptionCount}/>
							
							<DeleteBtn uuid = {item.uuid} setData = {setData}/>
						</TaskItem>
				)}
			</Tasks>

			{comments && 
			<Comments >
				<CustomHeader 
					index = {2}
					content = {`Comments #${comments.length}`} 
					Class = 'CommentsTitle'
				/>

				<section className = 'CommentsContainer'>
					{comments.map(
						(item, i) => 
							//Don't forget to pass avatar!!
							<CommentItem 
								avatar = {item.avatar}
								text = {item.text} key = {i}
							/>
					)}
				</section>

				<CommentsArea 
					uuid = {selectedUuid} 
					setComments = {setComments} 
					setData = {setData}
				/>
			</Comments>
			}
		</section>
	);
};

export default App;