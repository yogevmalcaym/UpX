export const useSuspense = (init, initCompleted) => {
    if (!initCompleted) throw init();
};
