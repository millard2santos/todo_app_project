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

const tags = [{tag: 'Job', selected: false},{tag: 'Hobby', selected: false},{tag: 'Homework', selected: false},{tag: 'Class', selected: false},{tag: 'Life', selected: false},{tag: 'Family', selected: false},{tag: 'Others', selected: false}]



export {
    id,
    getTime,
    orderByTime,
    tags
}