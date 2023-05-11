import {  withPageAuthRequired,  } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function dashboard() {
    const user = useUser()
    console.log(user)
    return (
        <div>
            Enter
        </div>
    );
}

export const getServerSideProps = withPageAuthRequired({});