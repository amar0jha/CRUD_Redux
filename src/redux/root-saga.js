// import { all, fork } from 'redux-saga/effects';
// import data from '../api';

// export default function* rootSaga() {
//     yield all([
//         /**
//          * fork is useful when a saga needs to start a non-blocking task. 
//          * Non-blocking here means: the caller starts the task and continues executing without waiting for it to complete
//          */
//        fork(data.watchFetchData),
//     //    fork(data.watchDeleteData),
//     //    fork(data.watchUpdateData),

//     ]);
// }