import React from 'react';
import {enterJamRoom, leaveJamRoom, state} from '../main';
import use from '../lib/use-state';
import swarm from '../lib/swarm';

export default function Room() {
  let myStream = use(state, 'myAudio');
  let speaking = use(state, 'speaking');
  let streams = use(swarm, 'remoteStreams');
  return (
    <div className="container">
      <div className="child">
        <h1>Reddit vs Hedge Funds</h1>

        <h3 style={{marginTop: '80px'}}>stage</h3>
        <table className="stage">
          <tbody>
            <tr>
              {myStream && (
                <td className={speaking.has('me') ? 'speaking' : undefined}>
                  <img src="img/avatars/tosh.jpg" />
                </td>
              )}
              {streams.map(({stream, peerId}) =>
                !stream ? undefined : (
                  <td
                    key={peerId}
                    className={speaking.has(peerId) ? 'speaking' : undefined}
                    title={peerId}
                    alt={peerId}
                  >
                    <img src="img/avatars/sonic.jpg" />
                  </td>
                )
              )}
            </tr>
          </tbody>
        </table>

        <h3 style={{marginTop: '80px'}}>audience</h3>
        <table className="audience">
          <tbody>
            <tr>
              <td>
                <img src="img/avatars/sonic.jpg" />
              </td>
              <td>
                <img src="img/avatars/gregor.jpg" />
              </td>
              <td>
                <img src="img/avatars/christoph.jpg" />
              </td>
              <td>
                <img src="img/avatars/tosh.jpg" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="navigation" style={{marginTop: '80px'}}>
          <button>🚪 Leave quietly</button>

          <button style={{float: 'right'}}>✋🏽 Raise hand</button>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <button onClick={enterJamRoom}>Enter Room</button>
          <button onClick={leaveJamRoom}>Leave Room</button>
        </div>
      </div>
    </div>
  );
}