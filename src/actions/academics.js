export const SET_CLASS_LIST = 'academics:setClassList';
export const UPDATE_CLASS_LIST = 'academics:updateClassList';

export const setClassList = (classes) => {
    return {
        type: SET_CLASS_LIST,
        payload: classes
    }
}

export const updateSemesterCourseList = (updatedSemester, index) => {
    return {
        type: UPDATE_CLASS_LIST,
        index: index,
        payload: updatedSemester
    }
}
