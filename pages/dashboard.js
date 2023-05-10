import {  withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function dashboard() {
    return (
        <div>
            Enter
        </div>
    );
}

export const getServerSideProps = withPageAuthRequired({});