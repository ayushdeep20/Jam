import React from 'react';
import Container from './Container';
import {useJamState} from '../jam-core-react';

export default function Me() {
  let myId = useJamState('myId');
  return (
    <Container style={{height: 'initial', minHeight: '100%'}}>
      <div className="p-6 md:p-10">
        <h1>Your Identity</h1>

        <p className="mt-4">
          This is your identity on {window.location.hostname}
        </p>

        <pre className="rounded-md bg-yellow-50 not-italic text-xs text-center py-2 -ml-2 mt-4 md:text-base">
          {myId}
        </pre>

        <hr className="mt-14 mb-14" />
      </div>
    </Container>
  );
}
