import React from 'react';

import ForgetFeed from './ui/ForgetFeed';
import Button from './ui/Button';

import startFakeNews from './animations/startFakeNews';
import World from "./World";
import events from "./events";

const initialFakeNews = [
	['init', 'Connected to http://wyb.be, welcome ANON'],
	['ws', '0x://websocket'],
	['http', '101 Switching Protocols'],
	['ws', 'Upgrade (websocket)'],
	['', 'permessage-deflate; client_max_window_bits'],
	['', 'MeIy8A1qAhcqufFKmIr/qw=='],
	['', 'aLE6oM0LDpu0+YGAiEbKf4Qnx98='],
	['usr', 'ANON user (wyb.be v1000)'],
	['usr', 'Loading profile'],
	// ['usr', navigator.userAgent]
];
setTimeout(() => {
	startFakeNews('fake-news')
}, 2000);

let i = 0;
const tickerMessages = [
	'critical error',
	'bad authentication',
	'critical error',
	'bad authentication',
	'critical error',
	'bad authentication',
	'critical error',
	'abandon all hope'
];
setInterval(() => events.emit('ticker', tickerMessages[i++ % tickerMessages.length]), 3000);

export default function App () {
    return <World
		renderHeaderSection={() => <div>
			<p>wybe minnebo<br />application developer<br />and shenanigans</p>
			<p>★★★★★</p>
			<Button url={'https://github.com/wvbe'}>GitHub</Button>
			<Button url={'https://www.linkedin.com/in/wybeminnebo/'}>LinkedIn</Button>
		</div>}
		renderSecondaryButtons={() => <div>

			<Button url={'resume-of-wybe-minnebo--wyb.be--2018.pdf'} small={true}>curriculum vitae</Button>
			<Button url={'picture-of-my-cat.jpg'} small={true}>picture of my cat</Button>
		</div>}
		renderLogSection={() => <ForgetFeed
			initial={initialFakeNews}
			eventName={'fake-news'}
		/>}
	/>
}