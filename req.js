import axios from "axios";


export default async () =>
{


const response = await axios.get("https://api.github.com/users/shivam00",{ crossdomain: true });

return response;
};
