const id = () => {
    let id = ''
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (let index = 0; index < 10; index++) {
        id += chars[Math.floor(Math.random() * chars.length)]
        
    }
    return id
}

export {
    id
}