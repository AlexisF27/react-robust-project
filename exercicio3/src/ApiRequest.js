const apiRequest = async (url = '', optionOBjs = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionOBjs);
    if (!response.ok) throw Error('Please reload the app');
  } catch (error) {
    errMsg = error.message;
  } finally {
    return errMsg;
  }
}

export default apiRequest;