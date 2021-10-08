import sendAPI from '../config';

const postRegister = state => {
  const data = {
    url: `/register`,
    method: 'POST',
    data: state
  };

  return sendAPI(data);
};

const postLogin = state => {
  const data = {
    url: `/login`,
    method: 'POST',
    data: state
  };

  return sendAPI(data);
};

const getCheckList = () => {
  const data = {
    url: `/checklist`,
    method: 'GET'
  };

  return sendAPI(data);
};

const addList = state => {
  const data = {
    url: `/checklist`,
    method: 'POST',
    data: {
      name: state
    }
  };

  return sendAPI(data);
};

const deleteList = id => {
  const data = {
    url: `/checklist/${id}`,
    method: 'DELETE'
  };

  return sendAPI(data);
};

export { postRegister, postLogin, getCheckList, addList, deleteList };
