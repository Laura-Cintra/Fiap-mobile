let resetFunction = null;

export const setHandler = (handler) => {
    resetFunction = handler;
};

export const triggerReset = () => {
	if(resetFunction) resetFunction();
}
