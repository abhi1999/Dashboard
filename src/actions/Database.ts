import { 
    DATABASE_GET_ALL, 
    DATABASE_GET_ALL_SUCCESS, 
    DATABASE_GET_ALL_FAILURE, 
    DATABASE_ADD, 
    DATABASE_ADD_SUCCESS, 
    DATABASE_ADD_FAILURE, 
    DATABASE_UPDATE, 
    DATABASE_UPDATE_SUCCESS, 
    DATABASE_UPDATE_FAILURE,
    DATABASE_DELETE, 
    DATABASE_DELETE_SUCCESS, 
    DATABASE_DELETE_FAILURE 
} from './../constants/ActionTypes';

export const databaseGetAll = () => {
    return {
        type: DATABASE_GET_ALL
    };
};

export const databaseGetAllSuccess = (databaseList) => {
    return {
        type: DATABASE_GET_ALL_SUCCESS,
        payload: databaseList
    }
};

export const databaseGetAllFailure = (error) => {
    return {
        type: DATABASE_GET_ALL_FAILURE,
        payload: error
    }
};

export const databaseAdd = (database) => {
    return {
        type: DATABASE_ADD,
        payload: database
    };
};

export const databaseAddSuccess = (database) => {
    return {
        type: DATABASE_ADD_SUCCESS,
        payload: database
    }
};

export const databaseAddFailure = (error) => {
    return {
        type: DATABASE_ADD_FAILURE,
        payload: error
    }
};

export const databaseUpdate = (database) => {
    return {
        type: DATABASE_UPDATE,
        payload: database
    };
};

export const databaseUpdateSuccess = (database) => {
    return {
        type: DATABASE_UPDATE_SUCCESS,
        payload: database
    }
};

export const databaseUpdateFailure = (error) => {
    return {
        type: DATABASE_UPDATE_FAILURE,
        payload: error
    }
};

export const databaseDelete = (database) => {
    return {
        type: DATABASE_DELETE,
        payload: database
    };
};

export const databaseDeleteSuccess = (database) => {
    return {
        type: DATABASE_DELETE_SUCCESS,
        payload: database
    }
};

export const databaseDeleteFailure = (error) => {
    return {
        type: DATABASE_DELETE_FAILURE,
        payload: error
    }
};
