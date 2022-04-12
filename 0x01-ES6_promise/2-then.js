export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const obj = {
      status: 200,
      body: 'Success',
    };
    resolve(obj);
  }).then(() => { console.log('Got a response from the API'); });
}
