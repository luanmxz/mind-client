import { redirect } from "next/navigation";

export default async function GetUserLogged() {

    const user: any | null = await fetch('http://localhost:3333/auth/get', {
        method: 'GET',
    }).then((data) => data.json());

    if (!user) {
        redirect('/login');
    }

    return user;

}