// import axios from "axios";
// import path from "path";
// import fs from "fs";



// const pyrusUrl: string = "https://api.pyrus.com/v4";
// const envPath = path.join(__dirname, '..', '..', '..', '.env');


// const pyrusClient = axios.create({
//     baseURL: pyrusUrl,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });


// let isRefreshing: boolean = false;
// let failedQueue: any[] = [];

// const processQueue = (error, token = null) => {
//     failedQueue.forEach((prom) => {
//         if (error) {
//             prom.reject(error);
//         } else {
//             prom.resolve(token);
//         }
//     });

//     failedQueue = [];
// };

// const updateEnvToken = (newToken) => {
//     process.env.PYRUS_SECURITY_TOKEN = newToken;

//     if (fs.existsSync(envPath)) {
//         let envContent = fs.readFileSync(envPath, 'utf8');
        
//         // Если переменная уже есть, заменяем её. Если нет — дописываем в конец.
//         if (envContent.includes('PYRUS_SECURITY_TOKEN=')) {
//             envContent = envContent.replace(/PYRUS_SECURITY_TOKEN=.*/, `PYRUS_SECURITY_TOKEN=${newToken}`);
//         } else {
//             envContent += `\nPYRUS_SECURITY_TOKEN=${newToken}`;
//         }
        
//         fs.writeFileSync(envPath, envContent, 'utf8');
//         console.log("📝 [Pyrus API] Новый токен успешно перезаписан в .env файл");
//     }
// };

// pyrusClient.interceptors.request.use((config) => {
//     const token = process.env.PYRUS_SECURITY_TOKEN;
    
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// pyrusClient.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response?.status === 401 && !originalRequest._retry) {
//             if (isRefreshing) {
//                 return new Promise((resolve, reject) => {
//                     failedQueue.push({ resolve, reject });
//                 })
//                 .then((token) => {
//                     originalRequest.headers['Authorization'] = `Bearer ${token}`;
//                     return pyrusClient(originalRequest);
//                 })
//                 .catch((err) => Promise.reject(err));
//             }

//             originalRequest._retry = true;
//             isRefreshing = true;

//             try {
//                 const authResponse = await axios.post(`${pyrusUrl}/auth`, {
//                     login: process.env.PYRUS_LOGIN,
//                     security_key: process.env.PYRUS_SECRET_KEY
//                 });

//                 const newToken = authResponse.data.access_token;

//                 if (!newToken) throw new Error("API не вернул access_token");

//                 updateEnvToken(newToken);

//                 originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
//                 processQueue(null, newToken);
                
//                 isRefreshing = false;
                
//                 return pyrusClient(originalRequest);
//             } catch (refreshError) {
//                 processQueue(refreshError, null);
//                 isRefreshing = false;
//                 return Promise.reject(refreshError);
//             }
//         }

//         return Promise.reject(error);
//     }
// );

// export default pyrusClient;