
export const calculateElapsedDate = (createdAt : string) => {
    const currentDate = new Date().getTime();
    const createdDate = new Date(createdAt).getTime();
    return Math.floor((currentDate - createdDate) / 1000 / 60 / 60 / 24);
}