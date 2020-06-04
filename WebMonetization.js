// Creator: Néstor Campos (github.com/nescampos)
// Version: 1.0

class WebMonetization {
    constructor(pointer) {
        this.pointer = pointer;
    }

    isBrowserEnabled() {
        if (!document.monetization) {
            return false;
        }
        else {
            return true;
        }
    }

    getMonetizationState() {
        if (document.monetization) {
            return document.monetization.state;
        }
        else {
            return "Not enabled in browser";
        }
    }

    isPendingState() {
        return document.monetization && document.monetization.state === 'pending';
    }

    isStartedState() {
        return document.monetization && document.monetization.state === 'started';
    }

    isStoppedState() {
        return document.monetization && document.monetization.state === 'stopped';
    }

    isUndefinedState() {
        return document.monetization === undefined;
    }

    start() {
        const monetizationTag = document.querySelector('meta[name="monetization"]')
        if (!monetizationTag) {
            var meta = document.createElement('meta');
            meta.name = "monetization";
            meta.content = this.pointer;
            document.getElementsByTagName('head')[0].appendChild(meta);
        }
    }

    changePointer(pointer) {
        this.pointer = pointer;
        const monetizationTag = document.querySelector('meta[name="monetization"]')
        if (monetizationTag) {
            monetizationTag.content = this.pointer;
        }
    }

    registerStartListener(callbackFunction) {
        if (document.monetization) {
            document.monetization.addEventListener('monetizationstart', callbackFunction())
        }
    }

    registerProgressListener(callbackFunction) {
        if (document.monetization) {
            document.monetization.addEventListener('monetizationprogress', callbackFunction())
        }
    }

    registerStopListener(callbackFunction) {
        if (document.monetization) {
            document.monetization.addEventListener('monetizationstop', callbackFunction())
        }
    }

    registerPendingListener(callbackFunction) {
        if (document.monetization) {
            document.monetization.addEventListener('monetizationpending', callbackFunction())
        }
    }

    stop() {
        const monetizationTag = document.querySelector('meta[name="monetization"]')
        if (monetizationTag) {
            monetizationTag.remove();
        }
    }
}