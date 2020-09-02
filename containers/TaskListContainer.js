import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';
const mapStateToProps = state => {
    alert(`state send to task list = ${JSON.stringify(state)}`);
    return {

    }
};
const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;