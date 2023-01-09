export const sendEmail = (userDetail) => {
  try {
    console.log('userDetail', userDetail);
  } catch (e) {
    console.log('Error : ', e);
    return false;
  } finally {
    console.log('finally');
  }
};
