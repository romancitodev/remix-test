import { getContact } from '~/db/contacts';

import type { ActionFunctionArgs } from '@remix-run/node';
import { defer } from '@remix-run/node';
import { useLoaderData, Await, useRouteError } from '@remix-run/react';
import { Suspense } from 'react';

export const loader = async ({ params }: ActionFunctionArgs) => {
  const promise = getContact(params.contactId!);
  return defer({ data: promise });
};

function Skeleton() {
  return <div>Contact: loading...</div>;
}

function OnError() {
  return <p>An error ocurred while trying load the data.</p>;
}

export default function Contacts() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <Suspense fallback={<Skeleton />}>
      <Await resolve={data} errorElement={<OnError />}>
        {({ contactId }) => <div>Contact: {contactId}</div>}
      </Await>
    </Suspense>
  );
}
