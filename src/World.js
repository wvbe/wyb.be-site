import React from 'react';
import * as css from './style';
import fromAscii from './world/generators/fromAscii';
import {Anchor, Container, MonochromeBox, MonochromeTile, WebSurface, WireframeSea} from './lib/3d';
import FakeNewsFeed from "./ui/FakeNewsFeed";
import Button from "./ui/Button";
import BoxProgressBar from "./ui/BoxProgressBar";

const ascii = {
    wybe: `
##      ## ##    ## ########  ########
##  ##  ##  ##  ##  ##     ## ##
##  ##  ##   ####   ##     ## ##
##  ##  ##    ##    ########  ######
##  ##  ##    ##    ##     ## ##
##  ##  ##    ##    ##     ## ##
 ###  ###     ##    ########  ########
    `,
    minnebo: `
##     ## #### ##    ## ##    ## ######## ########   #######
###   ###  ##  ###   ## ###   ## ##       ##     ## ##     ##
#### ####  ##  ####  ## ####  ## ##       ##     ## ##     ##
## ### ##  ##  ## ## ## ## ## ## ######   ########  ##     ##
##     ##  ##  ##  #### ##  #### ##       ##     ## ##     ##
##     ##  ##  ##   ### ##   ### ##       ##     ## ##     ##
##     ## #### ##    ## ##    ## ######## ########   #######
    `,
    uxJs: `
#   # #   #       ####  ###
#   # #   #          # #   #
#   #  # #    #      # # 
#   #   #    ###     #  ###
#   #  # #    #   #  #     #
#  ## #   #       #  # #   #
 ## # #   #        ##   ###
    `,
    arrow: `
`
};

// Colors: https://color.adobe.com/nl/Copy-of-Flat-Design-color-theme-10773248/edit/?copy=true&base=1&rule=Custom&selected=1&name=Kopie%20van%20Copy%20of%20Flat%20Design&mode=hsv&rgbvalues=0.89,0.4841600000000777,0.24920000000000003,0.3432,0.88,0.7726400000000976,0.87,0.35510499999980555,0.28709999999999997,0.198,0.3005999999999803,0.36,0.94,0.7908533333331782,0.30079999999999996&swatchOrder=0,1,2,3,4
const appStyle = css.merge(
    css.steno.base,
	{
	    backgroundColor: '#F0CA4D',
        backgroundImage: 'linear-gradient(90deg, #f0ca4d 25%, #ebc641 25%, #ebc641 50%, #f0ca4d 50%, #f0ca4d 75%, #ebc641 75%, #ebc641 100%)',
        backgroundSize: '20px 20px',
        width: '100%',
        height: '100%'
	});

const webSurfaceContainerStyle = css.merge({
	// svg and viewbox
	width: '1px',
	height: '1px',
	overflow: 'visible',
    position: 'absolute',
    left: '50%',
    top: '50%'
});

export default function World () {
    return <div {...appStyle}>
        <div {...webSurfaceContainerStyle}>
            <WebSurface x={-12} y={1} z={2} width={10} axis={'x'}>
                <div style={{position: 'absolute', bottom: 0, width: '100%', textAlign: 'right' }}>
                    <p>wybe minnebo<br />application developer<br />and shenanigans</p>
                    <p>★★★★★</p>
                    <Button url={'https://github.com/wvbe'}>GitHub</Button>
                    <Button url={'https://www.linkedin.com/in/wybeminnebo/'}>LinkedIn</Button>
                </div></WebSurface>
            <WebSurface x={0} y={1} z={2} width={10} height={3}>
                <div style={{position: 'absolute', bottom: 0 }}>
                    <FakeNewsFeed/>
                </div>
            </WebSurface>
        </div>
        <Container>
            {/*<Anchor y={-30}>*/}
			    {/*<WireframeSea />*/}
            {/*</Anchor>*/}
            <Anchor x={-8} y={-38}>
                <Anchor x={8} y={38} z={0}>
                    { fromAscii(ascii.minnebo, 'x').map(coord => <Anchor key={ coord.toString() } { ...coord }>
                        <MonochromeBox fill={css.color('#324D5C')} stroke={'#243742'} innerStroke={'rgba(255, 255, 255,0.3)'} />
                    </Anchor>) }
                </Anchor>
                <Anchor x={8} y={0} z={0}>
                    { fromAscii(ascii.uxJs, 'x').map(coord => <Anchor key={ coord.toString() } { ...coord }>
                        <MonochromeBox fill={css.color('#58E0C5')} stroke={'#666'} innerStroke={'rgba(255, 255, 255,1)'} />
                    </Anchor>) }
                </Anchor>
                <Anchor x={0} y={1} z={0}>
                    { fromAscii(ascii.wybe, 'z').map(coord => <Anchor key={ coord.toString() } { ...coord }>
                        <MonochromeBox fill={css.color('#324D5C')} stroke={'#243742'} innerStroke={'rgba(255, 255, 255,0.3)'} />
                    </Anchor>) }
                </Anchor>
            </Anchor>
        </Container>
    </div>
}
