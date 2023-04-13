import axios from 'axios';
// import axiosTauriApiAdapter from 'axios-tauri-api-adapter';
// import dynamic from 'next/dynamic';
// const axios = dynamic(() => import(`axios`), {
//   ssr: false,
// });
// const axiosTauriApiAdapter = dynamic(
//   () => import(`axios-tauri-api-adapter`),
//   { ssr: false },
// );

// console.log(axios.create);

// const api =
//   axios &&
//   axios.create &&
//   axios.create({
//     baseURL: `http://localhost:4000`,
//     adapter: axiosTauriApiAdapter,
//   });

export const api = axios.create();
