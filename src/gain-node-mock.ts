import { IGainNode } from 'standardized-audio-context';
import { AudioContextMock } from './audio-context-mock';
import { AudioNodeMock } from './audio-node-mock';
import { AudioParamMock } from './audio-param-mock';
import { registrar } from './registrar';

export class GainNodeMock extends AudioNodeMock implements IGainNode {

    private _gain: AudioParamMock;

    constructor (context: AudioContextMock) {
        const deLorean = registrar.getDeLorean(context);

        super({
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            context,
            numberOfInputs: 1,
            numberOfOutputs: 1
        });

        this._gain = new AudioParamMock({
            deLorean,
            maxValue: 3.4028234663852886e38,
            minValue: -3.4028234663852886e38,
            onEventListUpdatedHandler () { }, // tslint:disable-line:no-empty
            value: 1
        });
    }

    get gain () {
        return this._gain;
    }

    set gain (value: AudioParamMock) {
        value; // tslint:disable-line:no-unused-expression
    }

}
