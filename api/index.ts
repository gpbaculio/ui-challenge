const API_URL = 'https://randomuser.me/api/';

export const fetchUser = () => fetch(API_URL).then(res => res.json())
