import { 
    FOLDER_GET_ALL, 
    FOLDER_GET_ALL_SUCCESS, 
    FOLDER_GET_ALL_FAILURE, 
    FOLDER_ADD, 
    FOLDER_ADD_SUCCESS, 
    FOLDER_ADD_FAILURE, 
    FOLDER_UPDATE, 
    FOLDER_UPDATE_SUCCESS, 
    FOLDER_UPDATE_FAILURE,
    FOLDER_DELETE, 
    FOLDER_DELETE_SUCCESS, 
    FOLDER_DELETE_FAILURE 
} from './../constants/ActionTypes';

export const folderGetAll = () => {
    return {
        type: FOLDER_GET_ALL
    };
};

export const folderGetAllSuccess = (folderList) => {
    return {
        type: FOLDER_GET_ALL_SUCCESS,
        payload: folderList
    }
};

export const folderGetAllFailure = (error) => {
    return {
        type: FOLDER_GET_ALL_FAILURE,
        payload: error
    }
};

export const folderAdd = (folder) => {
    return {
        type: FOLDER_ADD,
        payload: folder
    };
};

export const folderAddSuccess = (folder) => {
    return {
        type: FOLDER_ADD_SUCCESS,
        payload: folder
    }
};

export const folderAddFailure = (error) => {
    return {
        type: FOLDER_ADD_FAILURE,
        payload: error
    }
};

export const folderUpdate = (folder) => {
    return {
        type: FOLDER_UPDATE,
        payload: folder
    };
};

export const folderUpdateSuccess = (folder) => {
    return {
        type: FOLDER_UPDATE_SUCCESS,
        payload: folder
    }
};

export const folderUpdateFailure = (error) => {
    return {
        type: FOLDER_UPDATE_FAILURE,
        payload: error
    }
};

export const folderDelete = (folder) => {
    return {
        type: FOLDER_DELETE,
        payload: folder
    };
};

export const folderDeleteSuccess = (folder) => {
    return {
        type: FOLDER_DELETE_SUCCESS,
        payload: folder
    }
};

export const folderDeleteFailure = (error) => {
    return {
        type: FOLDER_DELETE_FAILURE,
        payload: error
    }
};
