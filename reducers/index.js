import { taskReducers } from './taskReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    taskReducers
    //nếu có nhiều reducer thì sẽ cách nhau bằng dấu phẩy: taskReducers,taskReducers1,taskReducers2,...
})
export default allReducers;