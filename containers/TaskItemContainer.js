import TaskItemComponent from '../components/TaskItemComponent';
import { connect } from 'react-redux';
import { toggleTask } from '../actions';


const TaskItemContainer = connect()(TaskItemComponent);
export default TaskItemContainer;