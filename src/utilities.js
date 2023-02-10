import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDEIGj6mYxYpVCfwQSA8GwqS1IapNyCRBA",
    authDomain: "moviesapp-57fbb.firebaseapp.com",
    projectId: "moviesapp-57fbb",
    storageBucket: "moviesapp-57fbb.appspot.com",
    messagingSenderId: "375122766805",
    appId: "1:375122766805:web:5e28dbcf7b0fbcbc60eb5c"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);


const id = () => {
    let id = ''
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (let index = 0; index < 10; index++) {
        id += chars[Math.floor(Math.random() * chars.length)]

    }
    return id
}

const getTime = () => {
    const d = new Date()
    const hour = d.getHours() < 10 ? `0${d.getHours()}` : `${d.getHours()}`
    const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : `${d.getMinutes()}`
    const seconds = d.getSeconds() < 10 ? `0${d.getSeconds()}` : `${d.getSeconds()}`
    return `${hour}:${minutes}:${seconds}`
}



const orderByTime = (string, holdData) => {
    string === 'Asc' ? holdData = holdData.sort((a, b) => {

        const aTime = Number(a.time.replace(/:/g, ''))
        const bTime = Number(b.time.replace(/:/g, ''))

        return aTime - bTime
    }) :
        holdData = holdData.sort((a, b) => {

            const aTime = Number(a.time.replace(/:/g, ''))
            const bTime = Number(b.time.replace(/:/g, ''))

            return bTime - aTime
        })

    return holdData
}

const tags = [
    {
        tag: 'Job',
        selected: false,
        first: '#2980B9',
        last: '#6DD5FA',

    },
    {
        tag: 'Hobby',
        selected: false,
        first: '#BDC3C7',
        last: '#2C3E50',

    },
    {
        tag: 'Homework',
        selected: false,
        first: '#ee9ca7',
        last: '#ffdde1',

    },
    {
        tag: 'Class',
        selected: false,
        first: '#2193b0',
        last: '#6dd5ed',

    },
    {
        tag: 'Life',
        selected: false,
        first: '#C6FFDD',
        last: '#f7797d',

    },
    {
        tag: 'Family',
        selected: false,
        first: '#0F2027',
        last: '#f7797d',

    },
    {
        tag: 'Others',
        selected: false,
        first: '#f953c6',
        last: '#b91d73',

    }
]



export {
    id,
    getTime,
    orderByTime,
    tags,
    app,
    auth,
    db
}